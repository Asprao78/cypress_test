describe('Para Bank functions',()=>{
    beforeEach(()=>{
        cy.login('sriniJasper57','password@123')
    })   
    
    
    it('User checks the account activity page for credits',()=>{
        cy.get('a.ng-binding').contains('18672').click()
        cy.get('h1').contains('Account Details')
        cy.get('select#month option:selected').should('have.text','All')
        cy.get('select#month').select('January')
        //cy.get('[id="month"]').click()
        //cy.get('[id="transactionType"]').click()
        cy.get('select#transactionType option:selected').should('have.text','All')
        cy.get('select#transactionType').select('Credit')
        cy.get('input[value="Go"]').click()
        cy.get('a.ng-binding').contains('Funds Transfer Received')
    }),
    it('User creates a Savings Account',()=>{
        cy.get('a').contains('Open New Account').click()
        cy.get('select#type').select('SAVINGS')
        cy.get('select#fromAccountId').select('18672')
        cy.get('input').contains('Open New Account').click()
        cy.get('h1').contains('Account Opened!')
        cy.get('b').contains('Your new account number:')
    })

})