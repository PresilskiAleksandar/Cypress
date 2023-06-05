describe('mysuite',()=>{
    it('NavigationTest',()=>{

        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq','Your Store')  //Home page

        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get("div[id='content'] h2").should('have.text','Cameras')  //Cameras Page

        cy.go('back'); // Go to home page 
        cy.title().should('eq','Your Store')

        cy.go('forward'); // Again to camera page
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.go(-1);
        cy.title().should('eq','Your Store')  //Home page

        cy.go(1);
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.reload();

    })
})