import funcoesUteis from "./TelaCarregamento";

const ServiceJogador = {
    buscar_jogador: function buscarJogador() {

        let token = window.localStorage.getItem("token_rp_mobile");
        let id_jogador = window.localStorage.getItem("id_jogador_rp_mobile");
        
        let apijogador = "http://45.233.176.162:8081/jogador/buscar_jogador?id_jogador=" + id_jogador;
        var headerRequest = new Headers();
            headerRequest.set("Access-Control-Request-Method", "POST");
            headerRequest.set("Access-Control-Request-Headers", "Content-Type");
            headerRequest.set("Authorization", token);
        
        let resposta = fetch(apijogador, { headers: headerRequest, mode: 'cors'})
            .then((resposta) => {
                if(resposta.status == 200) {
                    return resposta;
                } else {
                    alert("Ocorreu um erro ao buscar informação do jogador! Avise o ADM")
                    return resposta;
                }
            });
        
        return resposta;
    },

    buscar_itens_mochila_jogador: function buscarItensMochilaJogador() {
        return [
            {
                id_item: 1,
                nome_produto: "Pizza",
                categoria: "comida",
                quantidade: 10
            }, 
            {
                id_item: 2,
                nome_produto: "Pistola",
                categoria: "arma",
                quantidade: 1
            }, 
            {
                id_item: 3,
                nome_produto: "agua",
                categoria: "bebida",
                quantidade: 1
            }, 
            {
                id_item: 4,
                nome_produto: "Relógio",
                categoria: "outros_produtos",
                quantidade: 1
            } 
        ];
    },
}

export default ServiceJogador;