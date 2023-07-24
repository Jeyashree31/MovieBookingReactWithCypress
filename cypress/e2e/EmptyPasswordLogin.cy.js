describe('Empty password Login', () => {
  it('emptyPasswordLogin', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#email').type('jeyashreeravi.gmail.com')
    cy.get('.button-group > :nth-child(1)').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Enter Password')
    });
  })
})