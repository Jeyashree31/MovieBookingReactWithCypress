describe('Empty UserName And password Login', () => {
  it('emptyUnameAndPwdLogin', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.button-group > :nth-child(1)').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Enter UserName And Password')
    });
  })
})