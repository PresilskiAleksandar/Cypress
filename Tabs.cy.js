describe('Handle Tab',()=>{

    it.skip('Approach1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')  // parent tab

        cy.get(".example >a").invoke('removeAttr','target').click(); // clicking on link

        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")  // assert

        cy.go('back')  // Back to parent tab
    })


    it('Approach2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')  // parent tab

        cy.get(".example >a").then((e)=>{           //Visit to href
 
            let url=e.prop('href');

            cy.visit(url);
        })
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")  // assert

        cy.go('back')  // Back to parent tab
    })

})