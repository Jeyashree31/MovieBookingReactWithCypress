describe('View all booked tickets', () => {
  it('AllbookedTickets', () => {
    cy.visit('http://localhost:3000/getAllTickets')
    cy.get('button').contains("HOME").click()
    cy.get('[type="submit"]').contains("LOGOUT").click()
  })
})