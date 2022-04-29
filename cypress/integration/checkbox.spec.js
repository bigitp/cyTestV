// cemu sluzi ova linija ispod?
/// <reference types="cypress" />

import { navigateTo } from "../support/page_objects/navigationPage"

// Sve ukupno je pristojno odradjen posao
// Postavicu samo par pitanja

// svaki test mi pada zbog neke greske u aplikaciji 
// browser konzola -- Uncaught TypeError: e(...).setup is not a function
// vidi da li ovo moze nekako da se ignorise pomocu Cypress-a

describe('checkbox cheking', () => {

  beforeEach('open text-box page', () => {
    navigateTo.textBoxPage()
  })


  it('cheking the checkbox is checked', () => {

    // kako si pronalazio ove selektore, moze li krace da se napisu a da budu jedinstveni?
    // poenta page object pattern-a je da se ovakve stvari pisu u page-ovima.
    // tvoj dobar primer je form_Submission funkcija
        
    // cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    
    // naravno moze i po kracem postupku, u lini ispod sam to i uradio
    cy.get('#item-1').click()

    cy.get('#tree-node-home').check({ force: true }).should('be.checked') // radi li i bez force: true?
    // ne radi bez {force:true}, jer taj elemnet nije vidljiv u DOM-u, bez toga cy smarta da taj element ne postoji

  })
})