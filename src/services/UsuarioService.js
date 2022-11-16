const UsuarioService = {
    cadastrarUsuario: function cadastrarUsuario(bodyRequest) {
        let urlApiCadastro = "http://45.233.176.162:8090/usuario/cadastro";
        const options = {
            method: 'POST',
            mode: "cors",
            headers: {
                "Authorization": "token123",
            }, 
            body: JSON.stringify(bodyRequest)
        }

        fetch(urlApiCadastro, options)
        .then((resposta) => {

            switch (resposta.status) {
                case 201:
                    alert("Jogador cadastrado com sucesso!")
                    break;
                case 404:
                    alert("Usuário já cadastrado!")
                    break;
                default:
                    alert("Erro ao cadastrar usuário! Avise o administrador.")
                    break;
            }
            
          return resposta;
        }).catch((error) => {
            console.log(error)
            alert("Ocorreu um erro ao cadastrar o jogador. Tente novamente ou avise o administrador!")
        }).finally(() => {
            document.getElementById("botao_cadastrar").disabled = false;
            document.getElementById("imagem_carregamento").style.display = "none";
        });
    }
}


export default UsuarioService;