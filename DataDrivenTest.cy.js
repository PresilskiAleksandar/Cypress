describe('MyTestSuite',()=>{

    it('DataDrivenTest',()=>{

        cy.fixture("orangehrm2").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)

                cy.get("input[placeholder='Password']").type(userdata.password)
        
                cy.get("button[type='submit']").click()

                if(userdata.username=='Admin'&& userdata.password=='admin123'){

                //If data is valid can do this assertion, and if not continue

                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)

                cy.get('.oxd-userdropdown-tab').click()  //Logout
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click()  //Logout
                }
                else{
                        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userdata.expected)
                }

            })
        
    
        })
    })
})