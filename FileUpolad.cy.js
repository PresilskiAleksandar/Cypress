import'cypress-file-upload'

describe('File Uploads',()=>{
    
    it('Single File Upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Za dare.xlsx')
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!') 
    })

    it('File Upload - Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Za dare.xlsx',fileName:'myfile.xlsx'});
        cy.get('#file-submit').click();
        cy.wait(2000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!') 

    })

    it('File Upload -Drag and Drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Za dare.xlsx',{subjectType:'drag-n-drop'});
        cy.wait(1000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Za dare.xlsx')
        

    })

    it.only('Multiple files Upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(['Za dare.xlsx','Test.xlsx']);
        cy.get('#file-submit').click();
        cy.wait(2000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!') 


    })

})