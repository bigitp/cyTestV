/// <reference types="cypress" />


describe('Home page test', () => {

  beforeEach('openD', () => {
    cy.visit('/')
  })

  it('open elements on homePage', () => {

    cy.get('.card').each(($el, index, $list) => {

      cy.get('.card').eq(index).click()
      cy.wait(1000)  // gledaj da nigde ne koristis fiksnu vrednost wait-a. Sigurno ima neki nacin da se ceka na neki dogadjaj da se desi ili zavrsi
      cy.get(':nth-child(1) > .group-header > .header-wrapper').should('exist')
      cy.visit('/')
      cy.wait(1000)

    })
  })
})