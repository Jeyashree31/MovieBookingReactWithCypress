describe('SignUp spec', () => {
  it('SignUp', () => {
    cy.visit('http://localhost:3000')
    cy.get('.tab > :nth-child(1) > button').click()
    cy.get('#loginId').type(100)
    cy.get('#firstName').type('Jeyashree')
    cy.get('#lastName').type('Ravikumar')
    cy.get('#email').type('jeyashreeravi@31.gmail.com')
    cy.get('#contactNumber').type('9108273456')
    cy.get('#password').type('Shreeravi@31')
    cy.get('#confirmPassword').type('Shreeravi@31')
    cy.get('#role').type('User')
    cy.get('[type="submit"]').contains('Register').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('User Registered Successfully');
    });
  })
})