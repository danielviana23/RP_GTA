const ServiceJogador = {
    buscar_jogador: function buscarJogador() {

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
                nome_produto: "Pistola",
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