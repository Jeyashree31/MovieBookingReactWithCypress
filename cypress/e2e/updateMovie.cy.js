describe('Update/Add Movie spec', () => {
  it('updateMovie', () => {
    cy.visit('http://localhost:3000/AddMovie')
    cy.get('#movieId').type("110")
    cy.get('#movieName').type("Movie2")
    cy.get('#TheatreName').type("Theatre2")
    cy.get('.button-group > .btn').contains("Update Movie").click()
    cy.get('.tab > .btn').contains("BACK").click()
    cy.get('[type="submit"]').contains("LOGOUT").click()
  })
})