/* global Given, Then, When */

import HomePage from '../pageobjects/HomePage'
const homePage = new HomePage

Given("acesso o site Automação com Batista", () => {
    homePage.acessarSite();
})

    When("clico no botão começar automação web", () => {
        homePage.clicarBotaoComecarAutomacaoWeb()
    })

    Then("devo visualizar nova pagina", () => {
        homePage.acessarSite();
    })

    When("clico no botão começar automação web", () => {
        homePage.clicarBotaoComecarAutomacaoWeb()
    })

    Then("valido a Url", () => {
        homePage.acessarSite();
    })