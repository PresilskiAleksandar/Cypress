describe('Handle Dropdowns',()=>{

    it.skip('DropDOwn with Select', ()=>{
        //skip TC

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('Macedonia').should('have.value','Macedonia')



    })

    it.skip('DropDOwn without Select', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Italy')

        

    })



    it.skip('Auto Suggested DropDown', ()=>{

        cy.visit('https://wikipedia.org')

        cy.get('#searchInput').type('Bitola')

        cy.get('.suggestion-title').contains('Bitola inscription').click()


        

    })


    it('OrangeHRM DropDown', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type('Admin')

        cy.xpath('//input[@name="password"]').type('admin123')

        cy.get('.oxd-button').click()

        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[1]').click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]').click()

        cy.get('.oxd-select-dropdown').contains('Admin').click()




        

    })
})