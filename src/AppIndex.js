import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './assets/banner_login.png'
import './Login.css';

import App from './App';
import RegrasPage from './pages/regras/RegrasPage';
import MeuPerfilPage from './pages/perfil/MeuPerfilPage';
import ChamadaDeEmergenciaPage from './pages/chamada/ChamadaDeEmergenciaPage';
import ListaDeEmpregos from './pages/empregos/listaEmpregos/ListaDeEmpregos';
import AppsPage from './pages/apps/AppsPage';
import PolicialApp from './pages/apps/Aplicativos/policial/PolicialApp'
import ConsultarCpfPage from './pages/apps/Aplicativos/policial/consultar_cpf_page/ConsultarCpfPage';
import RegistrarComponent from './RegistrarComponent';


function AppIndex() {
    
    const [showComponent, setShowComponent] = useState();
    const [token, setToken] = useState();
    const [isLogged, setIsLogged] = useState();

    
    useEffect(() => {
        setToken(window.localStorage.getItem("token"));
        if(token == null || token == undefined || token == "undefined" || token == "null") {
            setIsLogged(false)
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
        }

        fetch("http://localhost:8080/autenticacao/login", options)
        .then((resposta) => {
          return resposta.json();
        }).then(jsonBody => {
            window.localStorage.setItem("token", jsonBody.token);
            window.location.href = "/";
        }).catch((error) => {
            alert("Ocorreu um erro ao fazer o login")
            console.log(error)
        });
    }

    if(isLogged) {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route index exact={true} path="/" element={<App />} /> 
                        <Route path='/regras' exact={true} element={<RegrasPage />} />
                        <Route path='/meu_perfil' exact={true} element={<MeuPerfilPage />} />
                        <Route path='/chamada_de_emergencia' exact={true} element={<ChamadaDeEmergenciaPage />} /> 
                        <Route path="/regras" exact={true} element={<RegrasPage />} />
                        <Route path="/fazer_chamada_de_emergencia" exact={true} element={<ChamadaDeEmergenciaPage />} />
                        <Route path="/empregos" exact={true} element={<ListaDeEmpregos />} />
                        <Route path="/apps" exact={true} element={<AppsPage />} /> 
                        
                        
                        <Route path="/aplicativo/policial" exact={true} element={<PolicialApp />} />
                        <Route path="/aplicativo/policial/consultar_cpf"    exact={true} element={<ConsultarCpfPage />} />  
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
