describe('Empty username Login', () => {
  it('emptyUsernameLogin', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#email').type(' ')
    cy.get('#password').type('6789')
    cy.get('.button-group > :nth-child(1)').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Enter Username')
    });
  })
})