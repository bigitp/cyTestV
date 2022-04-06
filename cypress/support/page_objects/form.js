

export class TextBox {
    
form_Submission(email){
    cy.get('#userName').type(data.name)
    cy.get('#userEmail').type(email)
    cy.get('#currentAddress').type(data.address1)
    cy.get('#permanentAddress').type(data.address2)
    cy.get('#submit').click()
}
}

export const textTo = new TextBox()