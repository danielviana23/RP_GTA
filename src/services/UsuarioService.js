const UsuarioService = {
    cadastrarUsuario: function cadastrarUsuario(bodyRequest) {
        let urlApiJogador = "http://localhost:8081/usuario/cadastro";

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json",
                "Content-length": bodyRequest.length,
            }, 
            body: JSON.stringify(bodyRequest)
        }


        fetch(urlApiJogador, options)
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