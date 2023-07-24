describe('Admin Login', () => {
  it('adminLogin', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#email').type('shreeit31@gmail.com')
    cy.get('#password').type('Shree@31')
    cy.get('.button-group > :nth-child(1)').click()
  })
})