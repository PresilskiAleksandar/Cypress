describe('Handling Tables',(()=>{

    beforeEach('Login',()=>{

        cy.visit('https://demo.opencart.com/admin/index.php')

        cy.get('#input-username').type('demo')

        cy.get('#input-password').type('demo')

        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()

        cy.get('#menu-customer>a').click()  // customers main menu

        cy.get('#menu-customer>ul>li:first-child').click()  // Customers Sub menu

        })

        it('Check numbers of rows and colums',()=>{

            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')   // Count Row

            cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length','7') //count Colums

        })

        it('Check cell data from specific row and colums',()=>{

            cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('xvrt@test.com')


        })

        it('Read all the rows and colums in the first page',()=>{   

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row,index, $rows)=>{

                    cy.wrap($row).within(()=>{

                        cy.get("td").each(($col, index , $cols)=>{
                            
                            cy.log($col.text());
                        })
                    })
            })
 
        })

        it('Pegination Table',()=>{
                //find total number of pages
            let totalPages;
            cy.get('.col-sm-6.text-end').then( (e)=>{
                let mytext=e.text();  //Showing 1 to 10 of 5581 (559 Pages)

                totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 )

            cy.log("Total number of pages in table =====>"+totalPages);
            })
        })

        it.only('Pegination ',()=>{
            //find total number of pages  
            /*
        let totalPages;
        cy.get('.col-sm-6.text-end').then( (e)=>{
            let mytext=e.text();  //Showing 1 to 10 of 5581 (559 Pages)

            totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 )

        cy.log("Total number of pages in table =====>"+totalPages);
        })
*/

        let totalPages=5; 

        
        for(let p=1;p<=totalPages;p++){
            if(totalPages>1){
                cy.log("ACtivepage is ==="+p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();

                cy.wait(2000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());  ///Email
                        })
                    })
                })
            }
        }
    })

}))