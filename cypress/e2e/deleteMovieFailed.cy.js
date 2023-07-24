describe('Delete Movie failed', () => {
  it('deleteMovieFailed', () => {
    cy.visit('http://localhost:3000/home')
    cy.get(':nth-child(1) > :nth-child(7) > .button-delete').click()
  })
})