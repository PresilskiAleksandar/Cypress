
describe('XPathLocators',()=>{

    it('find num of products',()=>{
        
        cy.visit("http://automationpractice.pl/index.php")

        cy.xpath("//a[contains(text(),'Best Sellers')]").click()

        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.lenght',6)

    })

})