/* global Given, Then, When */

import UsuarioPage from '../pageobjects/UsuarioPage'
const usuarioPage = new UsuarioPage


Given("acesso o site Automação", () => {
    usuarioPage.acessarSite();
})

    And("acesso a pagina de automação web", () => {
        usuarioPage.clicarBotaoPaginaUsuario();
    })

    And("clico no botão Formulário", () => {
        usuarioPage.clicarBotaoFormulario();
    })

    And("clico no botão Criar Usuários", () => {
    usuarioPage.clicarBotaoCriarUsuario();
    })

    And("preencho o campo Nome", () => {
        usuarioPage.informarNome();
    })

    And("preencho o campo Último Nome", () => {
        usuarioPage.informarUltimoNome();
    })

    And("preencho o campo Email", () => {
        usuarioPage.informarEmail();
    })
    And("preencho o campo Endereço", () => {
        usuarioPage.informarEndereco();
    })

    And("preencho o campo Universidade", () => {
        usuarioPage.informarUniversidade();
    })

    And("preencho o campo Profissão", () => {
        usuarioPage.informarProfissao();
    })

    And("preencho o campo Gênero", () => {
        usuarioPage.informarGenero();
    })

    And("preencho o campo Idade", () => {
        usuarioPage.informarIdade();
    })
    
    When("clico no botão Criar", () => {
        usuarioPage.clicarBotaoCriar();
    })

    Then("devo visualizar a tela Cadastado com Sucesso", () => {
        usuarioPage.MensagemSucesso();
    })

    And("acesso a pagina de automação web", () => {
        usuarioPage.clicarBotaoPaginaUsuario();
    })

    And("clico no botão Formulário", () => {
        usuarioPage.clicarBotaoFormulario();
    })

    And("clico no botão Criar Usuários", () => {
        usuarioPage.clicarBotaoCriarUsuario();
    })

    And("preencho o campo Endereço", () => {
        usuarioPage.informarEndereco();
    })

    When("clico no botão Criar", () => {
        usuarioPage.clicarBotaoCriar();
    })

    Then("devo visualizar a mensagem de erro", () => {
        usuarioPage.mensagemErro();
    })

    And("acesso a pagina de automação web", () => {
        usuarioPage.clicarBotaoPaginaUsuario();
    })

    And("clico no botão Formulário", () => {
        usuarioPage.clicarBotaoFormulario();
    })

    And("clico no botão Criar Usuários", () => {
        usuarioPage.clicarBotaoCriarUsuario();
    })

    And("preencho o campo Nome", () => {
        usuarioPage.informarNome();
    })

    And("clico no botão voltar", () => {
        usuarioPage.clicarBotaoVoltar();
    })

    Then("devo visualizar a tela inicial", () => {
        usuarioPage.acessarSite();
    })

