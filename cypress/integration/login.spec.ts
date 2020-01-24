context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('should log the user in', () => {
    cy.shadowGet('#sso').shadowFind('#email').shadowType(Cypress.env('email')).shadowClick();
    cy.shadowGet('#sso').shadowFind('#password').shadowType(Cypress.env('password')).shadowClick();
    cy.shadowGet('#sso').shadowFind('button').shadowClick();

  })

 
})
