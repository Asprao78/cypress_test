describe('Parabank Registration', () => {

    it('successfully registers a new user', () => {
  
      const username = 'srinpara';  
      // Visit the home page
      cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  
      // Enter first name
      cy.get('[id="customer.firstName"]').type('Sad')
  
      // Enter last name
      cy.get('[id="customer.lastName"]').type('Cypress')
  
      // Enter address
      cy.get('[id="customer.address.street"]').type('Kondapur')
  
      // Enter city 
      cy.get('[id="customer.address.city"]').type('Hyderabad')
  
      // Enter state
      cy.get('[id="customer.address.state"]').type('Telangana')
  
      // Enter zip code
      cy.get('[id="customer.address.zipCode"]').type('500084')
  
      // Enter phone
      cy.get('[id="customer.phoneNumber"]').type('1234567890')
  
      // Enter SSN 
      cy.get('[id="customer.ssn"]').type('A12345')
  
      // Enter username
      cy.get('[id="customer.username"]').type(username)
  
      // Enter password
      cy.get('[id="customer.password"]').type('Password@123')
  
      // Confirm password
      cy.get('[id="repeatedPassword"]').type('Password@123')
  
      // Click Register
      cy.get('input[value="Register"]').click()
  
      // Verify registration completed
      cy.get('h1').should('contain', 'Welcome')
  
    })
  
  })