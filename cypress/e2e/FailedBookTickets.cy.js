describe('BookTicketsFailed', () => {
  it('failedBookTickets', () => {
    cy.visit('http://localhost:3000/bookingPage/Mission%20Impossible/Sathyam/4')
    cy.get('#loginId').type("jeyashreeravi@gmail.com")
    cy.get('#numberOfTickets').type('1')
    cy.get('#seatNumbers').type('H20,H21')
    cy.get('.button').contains('Book Ticket').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Number of Seats Booked is not equal to Number of Tickets selected')
    });

  })
})