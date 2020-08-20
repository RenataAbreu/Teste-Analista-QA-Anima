/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a automação Web
    clicarBotaoComecarAutomacaoWeb() {
        cy.get(':nth-child(1) > .collapsible-header').click()
    }
    
    // Mostra a nova Pagina
    acessarSite() {
        cy.visit(url)
    }

    //valida a url
    acessarSite() {
        cy.url().should('include', '/home.html')
}
}
export default HomePage;
