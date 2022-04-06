/// <reference types="cypress" />

import { navigateTo } from "../support/page_objects/navigationPage"
import { textTo } from "../support/page_objects/form"



describe('form submission test', () => {

  beforeEach('open text-box page', () => {
    navigateTo.textBoxPage()
  })

  before(function () {
    cy.fixture('example').then(function (data) {
      // this.data= data;
      globalThis.data = data;
    })
  })


  it('submitting form correctly', () => {

    cy.get('#output').find('div')
      .should('not.have.class', 'border')

    textTo.form_Submission('test@email.com')

    cy.get('#output').find('div')
      .should('have.class', 'border')

  })

  it('submitting form with incorrect e-mail', () => {

    textTo.form_Submission('bad@email')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })
})