describe('Failed Login spec', () => {
  it('failedLogin', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#email').type('jeyashreeravi.gmail.com')
    cy.get('#password').type('6789')
    cy.get('.button-group > :nth-child(1)').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('UserName or Password is incorrect')
    });
    cy.get('.tab > button').contains('HOME').click()
  })
})