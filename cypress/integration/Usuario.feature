Feature: Tela Home/Criar usuário


    Background: Acessar o site Automação
    Given acesso o site Automação


    Scenario: Teste cadastrar usuário
        And acesso a pagina de automação web
        And clico no botão Formulário
        And clico no botão Criar Usuários
        And preencho o campo Nome
        And preencho o campo Último Nome
        And preencho o campo Email
        And preencho o campo Endereço
        And preencho o campo Universidade
        And preencho o campo Profissão
        And preencho o campo Gênero
        And preencho o campo Idade
        When clico no botão Criar
        Then devo visualizar a mensagem tela Cadastado com Sucesso


    Scenario: Teste Validar Campo obrigatorio
        And acesso a pagina de automação web
        And clico no botão Formulário
        And clico no botão Criar Usuários
        And preencho o campo Endereço
        When clico no botão Criar
        Then devo visualizar a mensagem de erro

    Scenario: Teste Validar voltar
        And acesso a pagina de automação web
        And clico no botão Formulário
        And clico no botão Criar Usuários
        And preencho o campo Nome
        When clico no botão voltar
        Then devo visualizar a tela inicial
        

