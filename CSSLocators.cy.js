/// <reference types = "cypress" />

describe('CSSLocators',()=>{

    it("csslocators",()=>{

        cy.visit('http://automationpractice.pl/index.php')

       // cy.get("#search_query_top").type("T-Shirts")  //ID

       // cy.get(".search_query").type("T-Shirts")  // Class

       // cy.get("[name='search_query']").type("T-Shirts") //Attribute 

        cy.get("input.search_query[name='search_query']").type("T-Shirts")  // TAG Class Attribute

        cy.get("[name='submit_search']").click()  

        cy.get(".lighter").contains("T-Shirts")  // Assertion
    })
})