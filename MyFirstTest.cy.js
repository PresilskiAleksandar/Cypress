

describe('My First Test', () => {

    it('Test1', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.title().should('eq','OrangeHRM')
    })

    it('Test2', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.title().should('eq','OrangeHRM123')
    })


  })