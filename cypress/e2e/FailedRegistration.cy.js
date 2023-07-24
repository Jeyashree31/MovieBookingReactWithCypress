describe('failed Registration spec', () => {
  it('failedRegistration', () => {
    cy.visit('http://localhost:3000/registration')
    cy.get('#loginId').type(5)
    cy.get('#firstName').type('Shree')
    cy.get('#lastName').type('R')
    cy.get('#email').type('Shree123.gmail.com')
    cy.get('#contactNumber').type('9876509876')
    cy.get('#password').type('1234')
    cy.get('#confirmPassword').type('1234')
    cy.get('#role').type('User')
    cy.get('[type="submit"]').contains('Register').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Error in Registering')
    });
  })
})