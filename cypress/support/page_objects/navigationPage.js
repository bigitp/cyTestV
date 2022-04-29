


export class NavigationPage {
    

    elementsPage(){
        cy.visit('https://demoqa.com/elements')
    }

    textBoxPage(){
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()

    }

    uploadPage(){
        cy.visit('https://demoqa.com/upload-download')
    }

    c1BoxPage(){
        cy.visit('https://demoqa.com/checkbox')
       

    }

}

export const navigateTo = new NavigationPage()