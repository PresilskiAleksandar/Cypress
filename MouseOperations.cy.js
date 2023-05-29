describe('Mouse Operation',()=>{

    it('MouseHover',()=>{
        cy.visit('https://demo.opencart.com/')

        cy.get("ul[class='list-unstyled']>li>a[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']")
        .should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get("ul[class='list-unstyled']>li>a[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']")
        .should('be.visible');

        cy.get("ul[class='list-unstyled']>li>a[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").click()
    })

    it('Right Click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Aproach1

        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')

        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('be.visible')

    })

    it('Right Click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Aproach2

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();

        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('be.visible')

    })

    it('Double click',()=>{
        cy.visit('https://docs.cypress.io/api/commands/dblclick')
        cy.get("div[class='headerWrapper_tu51'] h1").dblclick();

    })

    it('Drag and Drop using plugin',()=>{
        

    })

    it('Scrolling Page',()=>{

    })
})