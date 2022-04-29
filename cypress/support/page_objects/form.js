
export class TextBox {

    // da li bi mogao da napises konstruktor i u njega stavis sve ove selektore?
    
form_Submission(email){ // pogledaj naming konvencije (nije toliko bitno ali pokazuje da te je interesovalo i tako nesto)
    cy.get('#userName').type(data.name)
    cy.get('#userEmail').type(email)
    cy.get('#currentAddress').type(data.address1)
    cy.get('#permanentAddress').type(data.address2)
    cy.get('#submit').click()
}
}

export const textTo = new TextBox()