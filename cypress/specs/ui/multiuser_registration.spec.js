import { faker } from '@faker-js/faker';

const csv = require('neat-csv')

let regData

describe('Multi User registration from csv file',()=>{
    before(()=>{
        cy.fixture('users.csv')
            .then(csv)
            .then((data)=>{
                regData = data
            })
    })

    it('Fills reg form for various users',()=>{
        for(let i = 0;i<regData.length;i++){
            cy.visit('/register.htm')
            cy.get('[id="customer.firstName"]').type(regData[i]['firstName'])
            cy.get('[id="customer.lastName"]').type(regData[i]['lastName'])
            cy.get('[id="customer.address.street"]').type(regData[i]['address'])
            cy.get('[id="customer.address.city"]').type(regData[i]['city'])
            cy.get('[id="customer.address.state"]').type(regData[i]['state'])
            cy.get('[id="customer.address.zipCode"]').type(regData[i]['zipCode'])
            cy.get('[id="customer.phoneNumber"]').type(regData[i]['phone'])
            cy.get('[id="customer.ssn"]').type(regData[i]['ssn'])
            cy.get('[id="customer.username"]').type(regData[i]['username'])
            cy.get('[id="customer.password"]').type(regData[i]['password'])
            cy.get('[id="repeatedPassword"]').type(regData[i]['password'])
            cy.get('input[value="Register"]').click()
            cy.get('h1').should('contain', 'Welcome')  

        }
    })
})
