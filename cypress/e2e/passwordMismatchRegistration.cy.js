describe('Password Mismatch registration spec', () => {
  it('passwordMismatchRegistration', () => {
    cy.visit('http://localhost:3000/registration')
    cy.get('#loginId').type(100)
    cy.get('#firstName').type('Jeyashree')
    cy.get('#lastName').type('Ravikumar')
    cy.get('#email').type('jeyashreeravi@31.gmail.com')
    cy.get('#contactNumber').type('9108273456')
    cy.get('#password').type('Shreeravi@31')
    cy.get('#confirmPassword').type('Shreeravi@3')
    cy.get('#role').type('User')
    cy.get('[type="submit"]').contains('Register').click()
  })
})