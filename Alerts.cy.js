describe('Alerts',()=>{

        //1) JavaScript Alert: It will have some text and an 'OK' button

        it.skip('JavaScript Alerts',()=>{

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.get("button[onclick='jsAlert()']").click()

            cy.on('window:alert',(t)=>{

                expect(t).to.contains('I am a JS Alert')
            })
                //Alert window automatically closed by cypress
            
            cy.get('#result').should('have.text','You successfully clicked an alert')


        })

        //2) JavaScript Confirm Alert:It will have some text with 'OK' and 'Cancel' buttons

        it('JavaScript Confirm',()=>{

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.get("button[onclick='jsConfirm()']").click()

            cy.on('window:confirm',(t)=>{

                expect(t).to.contains('I am a JS Confirm')
            })
                //Alert window automatically closed by cypress by using ok button-default
            
            cy.get('#result').should('have.text','You clicked: Ok')


        })

        it('JavaScript alert-cancel',()=>{

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.get("button[onclick='jsConfirm()']").click()

            cy.on('window:confirm',(t)=>{

                expect(t).to.contains('I am a JS Confirm')
            })
                // Close with cancel button

            cy.on('window:confirm',()=>false)

            cy.get('#result').should('have.text','You clicked: Cancel')

        })
        
        //3)JavaScript Prompt Alert

        it('JavaScript prompt alert',()=>{

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.window().then((win)=>{

                cy.stub(win,'prompt').returns('welcome')
            })

            cy.get("button[onclick='jsPrompt()']").click()

            //cypress automatically close prompted alert - it will use ok button - by default

            cy.get('#result').should('have.text','You entered: welcome')
        })


        it('JavaScript prompt -cancel button',()=>{

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.window().then((win)=>{

                cy.stub(win,'prompt').returns('welcome')
            })

            cy.get("button[onclick='jsPrompt()']").click()

            cy.on('window:prompt',()=> false)

            cy.get('#result').should('have.text','You entered: null')
        })
        
        //4) Authenticated Alert
        it('JavaScript Authenticated alert',()=>{
            // Aproach 1 Pass username and pass like parametars

            cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}});

            cy.get("div[class='example'] p").should('have.contain','Congratulations')
        })

        it.only('JavaScript Authenticated alert 2',()=>{
            // Aproach 2 Pass username and pass in url

           // https://admin:admin@the-internet.herokuapp.com/basic_auth

            cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

            cy.get("div[class='example'] p").should('have.contain','Congratulations')
        })

        
})