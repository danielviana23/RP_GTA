const funcoesUteis = {
    tela_carregamento: function carregamento(isActive) {
        if(isActive) {
            document.getElementById("div_tela_carregamento").style.display = "block"
        } else {
            document.getElementById("div_tela_carregamento").style.display = "none"
        }
    }
}

export default funcoesUteis;