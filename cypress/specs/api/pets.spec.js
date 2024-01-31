describe('Pets API spec',()=>{
    it('passes',()=>{
        cy.request('GET','https://petstore.swagger.io/#/').then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})