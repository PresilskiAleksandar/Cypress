//before
//after
//BeforeEach
//AfterEach

describe('MyTestSuite',()=>{

    before(()=>{

        cy.log("*** Launch App ***");

    })

    after(()=>{
        cy.log("*** Close app ***")
    })

    beforeEach(()=>{
        cy.log("*** Login ***")
    })

    afterEach(()=>{
        cy.log("*** Logout ***")
    })

    it('search',()=>{
        cy.log("*** searching ***")

    })

    it('advanced search',()=>{

        cy.log("*** advanced searching ***")
    })

    it('listing Products',()=>{
        cy.log("***listing  products ***")

    })
})