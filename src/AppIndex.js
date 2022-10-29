import React, {useEffect, useState} from 'react';
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

import MochilaPage from './pages/mochila/MochilaPage';

import EnviarMensagemPage from './pages/mensagem/EnviarMensagemPage';

function AppIndex() {
    
    const [showComponent, setShowComponent] = useState();
    const [token, setToken] = useState();
    const [isLogged, setIsLogged] = useState();

    
    useEffect(() => {
        setToken(window.localStorage.getItem("token"));
        if(token == null || token == undefined || token == "undefined" || token == "null") {
            setIsLogged(true)
        } else {
            setIsLogged(true)
        }
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
        let usuario = document.getElementById("input_login_usuario").value;        
        let senha = document.getElementById("input_login_senha").value;

        let bodyRequest = {
            "usuario": usuario,
            "senha": senha
        };

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json",
                "Content-length": bodyRequest.length,
            }, 
            body: JSON.stringify(bodyRequest)
        };

        fetch("http://localhost:8080/autenticacao/login", options)
        .then((resposta) => {
            if(resposta.status == 200) {
                window.localStorage.setItem("token", resposta.json().token);
                window.location.href = "/";
                return resposta.json();
            } else if(resposta.status == 404) {
                alert("Usuário ou senha incorreto!")
            } else {
                return resposta.json();
            }
        }).catch((error) => {
            console.log(error)
            alert("Ocorreu um erro ao fazer o login")
        });
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
                        
                        <Route path="/empregos/lista_empregos" exact={true} element={<ListaDeEmpregos />} />

                        <Route path="/aplicativo/policial" exact={true} element={<PolicialApp />} />
                        <Route path="/aplicativo/policial/consultar_cpf" exact={true} element={<ConsultarCpfPage />} />  
                        {/* <Route path="/aplicativo/policial/consultar_placa"  exact={true} element={<ConsultarPlacaPage/>} />
                        <Route path="/aplicativo/policial/revistar_jogador" exact={true} element={<RevistarJogadorPage />} />
                        <Route path="/aplicativo/policial/revistar_veiculo" exact={true} element={<RevistarVeiculoPage />} />
                        <Route path="/aplicativo/policial/prender_jogador"  exact={true} element={<PrenderJogadorPage />} />   */}
    
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
                        <input id='input_login_usuario' placeholder='Gamertag'/>
                        <input id='input_login_senha' placeholder='Senha'/>
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
