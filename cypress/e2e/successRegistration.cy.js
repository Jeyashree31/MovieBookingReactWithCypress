describe('Success registration spec', () => {
  it('SuccessRegistration', () => {
    cy.visit('http://localhost:3000/registration')
    cy.get('#loginId').type(110)
    cy.get('#firstName').type('Jeyashree')
    cy.get('#lastName').type('Ravi')
    cy.get('#email').type('jeyashreeravi.gmail.com')
    cy.get('#contactNumber').type('9108273456')
    cy.get('#password').type('Shreeravi@31')
    cy.get('#confirmPassword').type('Shreeravi@31')
    cy.get('#role').type('User')
    cy.get('[type="submit"]').contains('Register').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('User Registered Successfully')
    });
    cy.get('[type="button"]').contains("Move To Login Page").click()
  })
})