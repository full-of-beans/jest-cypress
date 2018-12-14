import {userBuilder} from '../support/generate'

describe('login', () => {
  it('should login an existing user', () => {
    const user = userBuilder()

    // register the user and then logout
    cy.request({
      url: 'http://localhost:3000/register',
      method: 'POST',
      body: user,
    })

    // login tests start now
    cy.visit('/')
      .getByText(/login/i)
      .click()
      .getByLabelText(/username/i)
      .type(user.username)
      .getByLabelText(/password/i)
      .type(user.password)
      .getByText(/submit/i)
      .click()

      // verify things after getting logged in
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .window()
      .its('localStorage.token')
      .should('be.a', 'string')
      .getByTestId('username-display', {timeout: 500})
      .should('have.text', user.username)
  })
})
