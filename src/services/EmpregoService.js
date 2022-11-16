import funcoesUteis from "./TelaCarregamento";

const URLS = {
    API_EMPREGO: {
        URL_BASE: 'http://45.233.176.162:8086/emprego',
        PATH_BUSCAR_EMPREGO: '/buscar_empregos',
    },
    API_JOGADOR: {
        URL_BASE: 'http://45.233.176.162:8081/jogador',
        PATH_ASSOCIAR_JOGADOR_EMPREGO: '/associar_jogador_emprego',
        PATH_DESASSOCIAR_JOGADOR_EMPREGO: '/desassociar_jogador_emprego'
    }
}

const HEADERS = {
    headerDefault: function headerDefault() {
        var headerRequest = new Headers();
        let token = window.localStorage.getItem("token_rp_mobile");
        // headerRequest.set("Access-Control-Request-Method", "GET");
        // headerRequest.set("Access-Control-Request-Headers", "Content-Type");
        headerRequest.set("Authorization", token);
        return headerRequest;
    },

    headerApiJogador: function headerApiJogador() {
        var headerRequest = new Headers();
        let token = window.localStorage.getItem("token_rp_mobile");
        headerRequest.set("Access-Control-Request-Method", "POST");
        headerRequest.set("Access-Control-Request-Headers", "Content-Type");
        headerRequest.set("Authorization", token);
        return headerRequest;
    }
};

const EmpregoServices = {
    buscar_lista_empregos: function buscarListaEmpregos() {
        funcoesUteis.tela_carregamento(true)
        return fetch(URLS.API_EMPREGO.URL_BASE + URLS.API_EMPREGO.PATH_BUSCAR_EMPREGO, 
            { headers: HEADERS.headerDefault(), mode: 'cors' }
        ).then((resposta) => {
            return resposta.json();
        }).catch((erro) => {
            alert("ocorreu um erro ao buscar empregos")
        }).finally(() => {
            funcoesUteis.tela_carregamento(false)
        });
    },

    associar_jogador_emprego: function associarJogadorEmprego(idEmprego) {
        funcoesUteis.tela_carregamento(true);

        let empregoBody = {
            id_jogador: window.localStorage.getItem("id_jogador_rp_mobile"),
            id_emprego: idEmprego
        };

        fetch(URLS.API_JOGADOR.URL_BASE + URLS.API_JOGADOR.PATH_ASSOCIAR_JOGADOR_EMPREGO, {
            method: 'POST',
            headers: HEADERS.headerApiJogador(), 
            mode: 'cors',
            body: JSON.stringify(empregoBody)
        }).then((resposta) => {
            return resposta.json();
        }).then((res) => {
            alert(res.mensagem)
        }).catch((erro) => {
            alert("Ocorreu um erro tentar empregá-lo! Tente novamente!");
        }).finally(() => {
            funcoesUteis.tela_carregamento(false);
        });
    },
    desassociarJogadorDoEmprego: function desassociarJogadorDoEmprego(idEmprego) {
        let empregoBody = {
            id_jogador: window.localStorage.getItem("id_jogador_rp_mobile"),
            id_emprego: idEmprego
        };

        fetch(URLS.API_JOGADOR.URL_BASE + URLS.API_JOGADOR.PATH_DESASSOCIAR_JOGADOR_EMPREGO, {
            method: 'POST',
            headers: HEADERS.headerApiJogador(), 
            mode: 'cors',
            body: JSON.stringify(empregoBody)
        }).then((resposta) => {
            return resposta.json();
        }).then((res) => {
            alert(res.mensagem)
        }).catch((erro) => {
            alert("Ocorreu um erro tentar sair do emprego! Tente novamente!");
        });
    }
}

export default EmpregoServices;