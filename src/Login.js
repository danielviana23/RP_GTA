import React, { useState } from 'react';
import './Login.css';

function Login(props) {

    const isLogged = useState({
        isLogged: false
    });

    return (
        <div id='login'>
            <img id='banner_rp' src=''/>
            <div id='inputs'>
                <form id='form_login'>
                    <input placeholder='Usuário'/>
                    <input placeholder='Senha'/>
                </form>
                <a>Esqueci meu usuário ou senha</a>
                <div id='buttons'>
                    <button>
                        Entrar
                    </button>
                    <button>
                        Registrar-se
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
