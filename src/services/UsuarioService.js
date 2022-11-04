const UsuarioService = {
    cadastrarUsuario: function cadastrarUsuario(bodyRequest) {
        let urlApiCadastro = "http://45.233.176.162:8081/usuario/cadastro";
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
            if(resposta.status == 201) {
                alert("Jogador cadastrado com sucesso!")
            } else if(resposta.status == 400){
                console.log(resposta)
                console.log(resposta.json())
                alert(resposta.json())
            };
          return resposta;
        }).catch((error) => {
            console.log(error)
        });
    }
}


export default UsuarioService;