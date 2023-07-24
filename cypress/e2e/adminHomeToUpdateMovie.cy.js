describe('Updating Movie', () => {
  it('adminHomeToUpdateMovie', () => {
    cy.visit('http://localhost:3000/home')
    cy.get('.tab > :nth-child(2)').contains("UPDATE MOVIE").click()
    cy.get('.tab > .btn').contains("BACK").click()
    cy.get('.tab > :nth-child(3)').contains("BOOKED TICKETS").click()
    cy.get('button').contains("HOME").click()
  })
})