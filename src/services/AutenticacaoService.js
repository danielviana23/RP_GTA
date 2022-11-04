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
        let loadGif = document.getElementById("loading_gif");

        buttonLogin.disabled = true;
        loadGif.style.display = "block";

        fetch("http://45.233.176.162:8083/autenticacao/login", options)
        .then((json) => {
            
            console.log(json);
            
            if(json.status == 200) {
                console.log(json)
                window.localStorage.setItem("token_rp_mobile", json.token);
                window.localStorage.setItem("id_jogador_rp_mobile", json.id_jogador);
                // window.location.href = "/";
                // window.location.reload();
            } else {

            }

        }).catch((error) => {
            console.log(error);
            alert("Ocorreu um erro ao fazer o login");
        });

        buttonLogin.disabled = false;
        loadGif.style.display = "none";
    },
}

export default AutenticacaoService;