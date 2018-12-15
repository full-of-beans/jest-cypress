describe('anonymous calculator', () => {
  it('can make calculations', () => {
    const user = cy
    user
      .visit('/')
      .getByText(/^3$/)
      .click()
      .getByText(/^×$/)
      .click()
      .getByText(/^3$/)
      .click()
      .getByText(/^=$/)
      .click()
      .getByTestId('total')
      .should('have.text', '9')
  })
})

describe('authenticated calculator', () => {
  it('displays the username', () => {
    cy.createUser().then(user => {
      cy.request({
        url: 'http://localhost:3000/login',
        method: 'POST',
        body: user,
      }).then(response => {
        window.localStorage.setItem('token', response.body.user.token)
      })
      cy.visit('/')
        .getByTestId('username-display')
        .should('have.text', user.username)
        .getByText(/logout/i)
        .click()
        .queryByTestId('username-display', {timeout: 300})
        .should('not.exist')
    })
  })
})
