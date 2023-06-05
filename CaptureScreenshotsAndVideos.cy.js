describe('my suite',()=>{

    it('Capture Screenshots and Videos',()=>{

        cy.visit('https://demo.opencart.com/index.php?route=common/home&language=en-gb')

        /*cy.screenshot('Home Page')

        cy.get("img[title='Your Store']").screenshot("Logo")*/

        //Automatically capture screenshot & video on failure - only when on execute trought CLI

        cy.get("li:nth-child(7) a:nth-child(1)").click()

        cy.get("div[id='content'] h2").should('have.text','Tablets')

   


    })
    
})