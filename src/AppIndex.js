import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './assets/banner_login.png'
import './Login.css';

import App from './App';
import RegrasPage from './components/pages/regras/RegrasPage';
import MeuPerfilPage from './components/pages/meu_perfil/MeuPerfilPage';
import ChamadaDeEmergenciaPage from './components/pages/chamada_de_emergencia/ChamadaDeEmergenciaPage';
import ListaDeEmpregos from './components/pages/empregos/listaEmpregos/ListaDeEmpregos';
import AppsPage from './components/pages/app_page/AppsPage';
import PolicialApp from './components/pages/Aplicativos/policial/PolicialApp';
import ConsultarCpfPage from './components/pages/Aplicativos/policial/consultar_cpf_page/ConsultarCpfPage';
import RegistrarComponent from './RegistrarComponent';


function AppIndex(props) {

    const isLoggedIn = props.isLogado;
    let token = window.localStorage.getItem("login")
    const [isLogged, setIsLogged] = useState(token != null || token != "");
    const [showComponent, setShowComponent] = useState(false);

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
            console.log(jsonBody)
            window.localStorage.setItem("login", true)
            window.location.href = "/"
        }).catch((error) => {
            console.log(error)
        });
    }

    if(isLoggedIn) {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route index exact={true} path="/" element={<App />} /> 
                        <Route path='/regras' exact={true} element={<RegrasPage />} />
                        <Route path='/meu_perfil' exact={true} element={<MeuPerfilPage />} />
                        <Route path='/chamada_de_emergencia' exact={true} element={<ChamadaDeEmergenciaPage />} /> 
                        <Route path="/regras" exact={true} element={<RegrasPage />} />
                        {/* <Route path="/fazer_chamada_de_emergencia" exact={true} element={<ChamadaDeEmergenciaForm />} /> */}
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
        // <Login />
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
