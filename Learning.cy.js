describe('Learning',()=>{

    it('First TC',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("input[value='radio1']").check().should('be.checked')
        
        cy.get("input[value='radio2']").should('not.be.checked')
        
    })

    it('Second TC',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete').type('Macedonia') 

        cy.get(".ui-menu-item-wrapper").contains('Macedonia, The Former Yugoslav Republic of').click()

        cy.get('#autocomplete').should('have.value','Macedonia, The Former Yugoslav Republic of')


    })

    it.only('DropDown',()=>{ 
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

        cy.get('#checkBoxOption1').click().should('be.checked','Option1')

    })      

})