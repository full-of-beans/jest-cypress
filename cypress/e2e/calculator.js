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
