import { faker } from '@faker-js/faker';

describe('Parabank Registration Scenarios', () => {

  beforeEach(()=>{
    cy.visit('/register.htm');    
  })

    it('successfully registers a new user', () => {        
      
    const username = faker.internet.userName().toString();  
            
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
      cy.get('[id="customer.username"]').type('srini'+username)
  
      // Enter password
      cy.get('[id="customer.password"]').type('password@123')
  
      // Confirm password
      cy.get('[id="repeatedPassword"]').type('password@123')
  
      // Click Register
      cy.get('input[value="Register"]').click()
  
      // Verify registration completed
      cy.get('h1').should('contain', 'Welcome')  

      //User logs out
      cy.get('a[href="/parabank/logout.htm"]').click()
      cy.get('h2').should('contain','Customer Login')
        
      }),

      it('Cannot register with same username', () => {            
            
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
    cy.get('[id="customer.username"]').type('testUser3')

    // Enter password
    cy.get('[id="customer.password"]').type('password@123')

    // Confirm password
    cy.get('[id="repeatedPassword"]').type('password@123')

    // Click Register
    cy.get('input[value="Register"]').click()

    // Verify registration completed
    cy.get('[id="customer.username.errors"]').should('contain','This username already exists.')  

      
    }),

    it('Cannot register with Blank First Name', () => {            
            
      // Enter first name
  

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
  cy.get('[id="customer.username"]').type('testUser4')

  // Enter password
  cy.get('[id="customer.password"]').type('password@123')

  // Confirm password
  cy.get('[id="repeatedPassword"]').type('password@123')

  // Click Register
  cy.get('input[value="Register"]').click()

  // Verify registration completed
  cy.get('[id="customer.firstName.errors"]').should('contain','First name is required.')  

    
  }),

  it('Cannot register with Blank Last Name', () => {            
            
    // Enter first name
cy.get('[id="customer.firstName"]').type('Sad')

// Enter last name


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
cy.get('[id="customer.username"]').type('testUser4')

// Enter password
cy.get('[id="customer.password"]').type('password@123')

// Confirm password
cy.get('[id="repeatedPassword"]').type('password@123')

// Click Register
cy.get('input[value="Register"]').click()

// Verify registration completed
cy.get('[id="customer.lastName.errors"]').should('contain','Last name is required.')  

}),

it('Invalid user cannot login successfully',()=>{
  cy.visit('/index.htm')
  cy.get('input[name="username"]').type("randomUser")
  cy.get('input[name="password"]').type("password@123")
  cy.get('input[value="Log In"]').click()
  cy.get('h1').contains('Error!')
})

})