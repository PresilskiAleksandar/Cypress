describe ("Assertions Demo",()=>{

    it("Implicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //cy.url().should('include','opensource-demo')

        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //cy.url().should('contain','orangehrm')


        cy.url().should('include','opensource-demo')

        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        .and('contain','orangehrm')

        .and('not.contain','redhrm')

        cy.title().should('include','Orange')  // Title

        .and('eq','OrangeHRM')

        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // Logo Visible
        
        .and('exist') //Logo Exist

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')

        cy.xpath('//input[@name="username"]').type('Admin')  // provide value

        cy.xpath('//input[@name="username"]').should('have.value','Admin')  /// Assert Value






    })


    it("Explicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type('Admin')

        cy.xpath('//input[@name="password"]').type('admin123')

        cy.get('.oxd-button').click()

        let expName="Paul Collings";

        cy.get('.oxd-userdropdown-name').then((x)=>{

            let actName=x.text()

            // BDD Style

            expect(actName).to.equal(expName)
            
            
        //TDD Style

            assert.equal(actName,expName)
          


        })

        



    })
})