const AutenticacaoService = {
    
    autenticarUsuario: function autenticar(bodyRequest) {
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': "token123",
            }, 
            body: JSON.stringify(bodyRequest)
        };

        let buttonLogin = document.getElementById("button_login1");
        let loadGif     = document.getElementById("loading_gif");

        buttonLogin.disabled = true;
        loadGif.style.display = "block";

        let resp = fetch("http://45.233.176.162:8083/autenticacao/login", options)
        .then((json) => {
            if(json.status == 200) {
                window.localStorage.setItem("token_rp_mobile", json.token);
                window.localStorage.setItem("id_jogador_rp_mobile", json.id_jogador);
                return json;
            } else {
                window.localStorage.removeItem("token_rp_mobile");
                window.localStorage.removeItem("id_jogador_rp_mobile");
                alert("Ocorreu um erro ao tentar fazer login. Avise ao administrador!")
                return json;
            }
        }).catch((error) => {
            console.log(error);
            console.log("foi3")
            alert("Ocorreu um erro ao fazer o login");
        }).finally(() => {
            buttonLogin.disabled = false;
            loadGif.style.display = "none";
        });

        return resp;

    },
}

export default AutenticacaoService;