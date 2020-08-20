/// <reference types="Cypress" />

import UsuarioElements from '../elements/UsuarioElements'
const usuarioElements = new UsuarioElements
const url = Cypress.config("baseUrl")

class UsuarioPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaAutomacaoWeb() {
        cy.get(usuarioElements.botaoPaginaTeste()).click()
    }

    // Clica no botão de realizar Formulário
    clicarBotaoFormulario() {
        cy.get(usuarioElements.botaoFormulario()).click()
    }

    //clica no botão criar usuario
    clicarBotaoCriarUsuario() {
        cy.get(usuarioElements.botaoCriarUsuario()).click()
    }

    // Informa nome no input do nome
    informarNome(nome) {
        cy.get(usuarioElements.inputNome()).type(nome)
    }
    // Informa ultimo nome no input do ultimonome
    informarUltimoNome(ultimonome) {
        cy.get(usuarioElements.inputUltimoNome()).type(ultimonome)
    }

    // Informa Email no input do email
    informarEmail(email) {
        cy.get(usuarioElements.inputEmail()).type(email)
    }

    // Informa Endereço no input do endereco
     informarEndereco(endereco) {
        cy.get(usuarioElements.inputEndereco()).type(endereco)
    }

    // Informa Universidade no input da universidade
     informarUniversidade(universidade) {
        cy.get(usuarioElements.inputUniversidade()).type(universidade)
    }

    // Informa Profissão no input da profissao
     informarProfissao(profissao) {
        cy.get(usuarioElements.inputProfissao()).type(profissao)
    }

    // Informa Genero no input do genero
     informarGenero(genero) {
        cy.get(usuarioElements.inputGenero()).type(genero)
    }

    // Informa Idade no input da idade
    informarIdade(idade) {
        cy.get(usurioElements.inputIdade()).type(idade)
    }

    //clica no botão criar 
    clicarBotaoCriar() {
        cy.get(usuarioElements.botaoCriar()).click()
    }

    // Visualizar mensagem de erro "3 errors proibiu que este usuário fosse salvo:"
    visualizarErroUsuario() {
        cy.get(usuarioElements.mensagemErro()).should('contain', '3 errors proibiu que este usuário fosse salvo:')
    }

    // Visualizar mensagem de sucesso:"Usuário Criado com sucesso"
    visualizarSucessoUsuario() {
        cy.get(usuarioElements.mensagemSucesso()).should('contain', 'Usuário Criado com sucesso')
    }

    //clica no botão criar 
    clicarBotaoVoltar() {
        cy.get(usuarioElements.botaoVoltar()).click()
    }

    // Voltar a tela Automação web
    acessarSite() {
        cy.visit(url)
    }

}

export default UsuarioPage;
