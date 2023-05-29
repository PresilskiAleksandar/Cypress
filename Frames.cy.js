import 'cypress-iframe'


describe('Handling Frames',()=>{


    it('aproach1',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe=cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)

        iframe.clear().type("Welcome{ctrl+a}")

        cy.get("button[title='Bold']").click()

    })

    it.only('aproach2',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr'); // load the frame

        cy.iframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}');  // Type and select all and clear

        cy.get("button[title='Bold']").click()
    })
})