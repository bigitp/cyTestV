/// <reference types="cypress" />

import { navigateTo } from "../support/page_objects/navigationPage"



describe('checkbox cheking', () => {

  beforeEach('open text-box page', () => {
    navigateTo.textBoxPage()
  })


  it('cheking the checkbox is checked', () => {

     cy.get('#item-1').click()

     cy.get('#tree-node-home').check({ force: true }).should('be.checked')
 

  })
})