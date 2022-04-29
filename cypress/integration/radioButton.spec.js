/// <reference types="cypress" />



describe('radio button cheking', () => {

  beforeEach('open radio button page', () => {
    cy.visit('https://demoqa.com/radio-button')
  })


  it('cheking the yes radio button is checked', () => {

 
  cy.getBySelRadio("yesRadio");

  })


  it('cheking if second radio button is checked', () => {

 
    cy.getBySelRadio("impressiveRadio");
    
    })
})