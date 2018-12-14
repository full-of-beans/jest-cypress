describe('anonymous calculator', () => {
  it('can make calculations', () => {
    const user = cy
    user
      .visit('http://localhost:8080')
      .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(5)')
      .click()
      .get('._3Ny0bi3qR2Hqp_CL7Ya8tU')
      .click()
      .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(5)')
      .click()
      .get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(5)')
      .click()
      .get('.css-194xwg8-calculator-display--DisplayContainer')
      .should('have.text', '9')
  })
})
