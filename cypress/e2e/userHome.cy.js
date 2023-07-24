describe('User home spec', () => {
  it('userHome', () => {
    cy.visit('http://localhost:3000/userHome')
    cy.get('input').type('Mission impossible')
    cy.get('.search-bar > button').click()
    cy.get('.button-book').click()
    cy.get('#loginId').type('jeyashree31@gmail.com')
    cy.get('#numberOfTickets').type('1')
    cy.get('#seatNumbers').type('H21')
    cy.get('.button').contains('Book Ticket').click()
    cy.get('.tab > :nth-child(1)').contains("HOME").click()
    cy.get('.tab > button').contains("LOGOUT").click()
  })
  
})