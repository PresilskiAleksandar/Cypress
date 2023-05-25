/// <reference types="Cypress" />


describe("Check UI Elements",()=>{

    it('Checking Radio Buttons',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio buttons

        cy.get('#male').should('be.visible')

        cy.get('#female').should('be.visible')

        //Selecting radio button

        cy.get('#male').check().should('be.checked')

        cy.get('#female').should('not.be.checked')
    })


    it('Checking Radio Buttons',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Visibility of the element

        cy.get('#monday').should('be.visible')

        //Selecting single check box - monday

        cy.get('#monday').check().should('be.checked')

        //Unselect checkbox

        cy.get('#monday').uncheck().should('not.be.checked')

        //Selecting all checkboxes

        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')

        //Unselecting all checkboxes

        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        //Select first from checkbox 

        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')





        
    })
})