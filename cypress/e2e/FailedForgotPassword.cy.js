describe('Forgotpassword Failed', () => {
  it('failedForgotpassword', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.button-group > :nth-child(3)').contains('Forgot Password ?').click()
    cy.get('#email').type('jeyashree@gmail.com')
    cy.get('#password').type('6789')
    cy.get('[type="submit"]').contains("Reset").click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('UserName Not Registered')
    });
    cy.get('[type="button"]').contains("Back To Login").click()
  })
})