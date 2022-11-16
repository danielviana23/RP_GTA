import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './assets/banner_login.png'
import './Login.css';

import TelaPrincipal from './App';
import RegrasPage from './pages/regras/RegrasPage';
import MeuPerfilPage from './pages/perfil/MeuPerfilPage';
import ListaDeEmpregos from './pages/empregos/listaEmpregos/ListaDeEmpregos';
import AppsPage from './pages/apps/AppsPage';
import PolicialApp from './pages/apps/Aplicativos/policial/PolicialApp'
import ConsultarCpfPage from './pages/apps/Aplicativos/policial/consultar_cpf_page/ConsultarCpfPage';
import RegistrarComponent from './RegistrarComponent';
import MensagemPage from './pages/mensagem/MensagemPage';
import BancoAppPage from './pages/apps/Aplicativos/banco/BancoAppPage';
import MochilaPage from './pages/mochila/MochilaPage';
import FuncaoPixPage from './pages/apps/Aplicativos/banco/pix/funcao_pix/FuncaoPixPage';

import UberMainPage from './pages/apps/Aplicativos/uber/UberMainPage';

import LoadingIconGif from './assets/carregamento.gif';
import EnviarMensagemPage from './pages/mensagem/EnviarMensagemPage';
import AutenticacaoService from './services/AutenticacaoService';

function AppIndex() {
    
    const [showComponent, setShowComponent] = useState();
    const [token, setToken] = useState();
    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(() => {
        setToken(window.localStorage.getItem("token_rp_mobile"));
        if(token == null || token == undefined || token == "undefined" || token == "null") {
            setIsLogged(false);
        } else {
            setIsLogged(true);
        };
    });

    function habilitarRegistro() {
        if(showComponent) {
            setShowComponent(false)
        } else {
            setShowComponent(true)
            document.getElementById("inputs").style.display = "none";
        }
    }

    function logar() {
        let gamertag = document.getElementById("input_login_gamertag").value;        
        let senha = document.getElementById("input_login_senha").value;
        
        let bodyRequest = {
            gamertag: gamertag,
            senha: senha,
        };

        let responseAuth = AutenticacaoService.autenticarUsuario(bodyRequest)
        responseAuth.then((resp) => resp.json()).then((resp) => {
            window.localStorage.setItem("token_rp_mobile", resp.token);
            window.localStorage.setItem("id_jogador_rp_mobile", resp.id_jogador)
            setToken(resp.token);
        })
    }

    if(isLogged) {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route index exact={true} path="/" element={<TelaPrincipal />} />

                        <Route path='/regras' exact={true} element={<RegrasPage />} />
                        
                        <Route path='/jogador/meu_perfil' exact={true} element={<MeuPerfilPage />} />
                        <Route path='/jogador/mochila' exact={true} element={<MochilaPage />} /> 

                        <Route path='/mensagem_recebida' exact={true} element={<MensagemPage />} /> 
                        <Route path="/mensagem/enviar_mensagem" exact={true} element={<EnviarMensagemPage />} /> 
                        
                        <Route path="/apps" exact={true} element={<AppsPage />} /> 
                        <Route path="/aplicativo/pessoal/transferir_bens" exact={true} element={<div>transf</div>} /> 
                        
                        <Route path="/aplicativo/pessoal/banco" exact={true} element={<BancoAppPage />} /> 
                        <Route path="/aplicativo/pessoal/banco/pix" exact={true} element={<FuncaoPixPage />} /> 

                        <Route path="/empregos/lista_empregos" exact={true} element={<ListaDeEmpregos />} />

                        {/*APP POLICIAL  */}
                        <Route path="/aplicativo/policial" exact={true} element={<PolicialApp />} />
                        <Route path="/aplicativo/policial/consultar_cpf" exact={true} element={<ConsultarCpfPage />} />  
                        {
                            /* 
                                <Route path="/aplicativo/policial/consultar_placa"  exact={true} element={<ConsultarPlacaPage/>} />
                                <Route path="/aplicativo/policial/revistar_jogador" exact={true} element={<RevistarJogadorPage />} />
                                <Route path="/aplicativo/policial/revistar_veiculo" exact={true} element={<RevistarVeiculoPage />} />
                                <Route path="/aplicativo/policial/prender_jogador"  exact={true} element={<PrenderJogadorPage />} />   
                            */
                        }

                        {/*APP UBER*/}
                        <Route path="/aplicativo/uber" exact={true} element={<UberMainPage />} />  
                        
                        
    
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        )
    } else {
        return (
            <div id='login'>
                <div id='figure_banner_logina'>
                    <img id="imagem_banner_login" src={Banner}/>
                </div>
                
                <div id='inputs'>
                    <form id='form_login'>
                        <img id='loading_gif' src={LoadingIconGif} />
                        <input id='input_login_gamertag' placeholder='Gamertag'/>
                        <input id='input_login_senha' type="password" placeholder='Senha'/>
                    </form>
                    <a>Esqueci meu usuário ou senha</a>
                    <div id='buttons'>
                        <button onClick={logar} id="button_login1">
                            Entrar
                        </button>
                        <button onClick={habilitarRegistro} id="button_login2">
                            Registrar-se
                        </button>
                    </div>
                </div>
                {showComponent ? <RegistrarComponent /> : null} 
            </div>
        );
    }
}

export default AppIndex;
