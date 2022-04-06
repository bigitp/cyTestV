/// <reference types="cypress" />

import {navigateTo} from "../support/page_objects/navigationPage"


  describe('test upload', () => {

    beforeEach('open upload page', () => {
     navigateTo.uploadPage()
    })

  

   it('upload test.png file', () => {

     cy.get('#uploadFile')
     .attachFile('test pencil.png');

    cy.get('#uploadedFilePath').should('exist')
   
   }) 
 })