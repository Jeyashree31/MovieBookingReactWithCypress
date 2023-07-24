describe('Moving to Login spec', () => {
  it('HomeToLogin', () => {
    cy.visit('http://localhost:3000')
    cy.get('.tab > :nth-child(2)').click()
    cy.get('.button-group > :nth-child(3)').click()
  })
})