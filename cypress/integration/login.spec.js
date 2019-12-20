context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('login to the portal', () => {

    cy.get('#sso').within(e=>{
      e.get()[0].shadowRoot.querySelector('#email').value=Cypress.env('email')
      e.get()[0].shadowRoot.querySelector('#password').value=Cypress.env('password')
      e.get()[0].shadowRoot.querySelector('button').click()
    })
  })

})
