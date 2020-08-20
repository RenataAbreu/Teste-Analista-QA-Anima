class UsuarioElements {


    botaoCriar = () => { return'.actions > input'}

    botaoVoltar = () => {return'.waves-light'}

    botaoPaginaAutomacaoWeb = () => { return ':nth-child(1) > .collapsible-header' }

    botaoCriarUsuario = () => { return '.active > .collapsible-body > ul > :nth-child(1) > a'}

    botaoFormulario = () => { return '.active > .collapsible-header' }

    inputNome = () => { return '#user_name' }

    inputUltimoNome = () => { return '#user_lastname' }

    inputEmail = () => { return '#user_email' }

    inputEndereco = () => { return '#user_address' }

    inputUniversidade = () => { return '#user_university' }

    inputProfissao = () => { return '#user_profile' }

    inputGenero = () => {return'#user_gender'}

    inputIdade = () => {return'#user_age'}

    mensagemSucesso = () => {return '.row.center'}

    mensagemErro = () => { return 'h2'}
}

export default UsuarioElements;