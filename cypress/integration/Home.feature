
Feature: Tela Home

    Background: Acessar o site Automação com Batista
        Given acesso o site Automação com Batista

    Scenario: Validar Acesso a Automação
        When clico no botão começar automação web
        Then devo visualizar nova pagina 

    Scenario: Validar Url
        When clico no botão começar automação web
        Then valido a Url

