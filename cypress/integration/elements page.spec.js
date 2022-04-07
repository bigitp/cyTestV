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

  it('submitting e-mail without dot', () => {

    textTo.form_Submission('bad@email')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })

  it('submitting e-mail only text', () => {

    textTo.form_Submission('emaildotcom')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })

  it('submitting e-mail end with comma', () => {

    textTo.form_Submission('email@some.com,')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })

  it('submitting e-mail with sign = ', () => {

    textTo.form_Submission('bad=name@email.com')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })

  it('submitting e-mail with two @@', () => {

    textTo.form_Submission('bad@ema@il.com')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })

  it('submitting e-mail with symbols', () => {

    textTo.form_Submission('bad@ema!il.com')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })

  it('submitting two e-mails with ; separator', () => {

    textTo.form_Submission('bad@email.com ; two@email.com')

    cy.get('#userEmail')
      .should('have.class', 'field-error')

  })
















})