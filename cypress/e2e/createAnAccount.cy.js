describe('create Account', () => {
  it('createAccount', () => {
    cy.visit('http://localhost:3000')
    cy.get('.tab > :nth-child(2)').contains("LOGIN").click()
    cy.get('[type="button"]').contains("Create An Account").click()
  })
})