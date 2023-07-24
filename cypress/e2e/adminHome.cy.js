describe('Admin Home spec', () => {
  it('adminHome', () => {
    cy.visit('http://localhost:3000/home')
    cy.get(':nth-child(1) > :nth-child(6) > .button-book').click()
  })
})