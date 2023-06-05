describe("Custom commands",()=>{

    it('handling links',()=>{

        cy.visit('https://demo.nopcommerce.com/')
        //Direct without custom commands
       // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click()

    //using custom command
    cy.clickLink("Apple MacBook Pro 13-inch")

    cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
   
    })


    it.only('Login command',()=>{
         cy.visit('https://demo.nopcommerce.com/')
        //login
         cy.clickLink('Log in'); //Click on login
         cy.loginapp("aleksandar@gmail.com",'test123');

         cy.get('.ico-account').should('have.text','My account');

        //search

    })
})