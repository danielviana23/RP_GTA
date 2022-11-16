import React, { useState } from 'react';
import './Login.css';
import './RegistrarComponent.css';

import UsuarioService from './services/UsuarioService';
import GifCarregamento from './assets/carregamento.gif';

function RegistrarComponent(props) {

    function validaBodyRequest(campo) {
        
    }

    // TODO ADICIONAR VALIDADOR
    function cadastrarJogador() {

        document.getElementById("botao_cadastrar").disabled = true;
        document.getElementById("imagem_carregamento").style.display = "block";
        
        let gamertag = document.getElementById("gamertag").value
        let senha    = document.getElementById("senha").value
        let email    = document.getElementById("email").value
        let numero   = document.getElementById("contato").value

        let bodyRequest = {
            gamertag: gamertag,
            senha: senha,
            email: email,
            contato: numero
        };


        if(validaBodyRequest(bodyRequest.gamertag) ||
            validaBodyRequest(bodyRequest.senha) ||
            validaBodyRequest(bodyRequest.email) ||
            validaBodyRequest(bodyRequest.senha)
        ) {
            alert("Todos os campos precisam estar com valor preenchido!")
            return;
        }

        UsuarioService.cadastrarUsuario(bodyRequest);
    }

    function voltarTelaLogin() {
        document.getElementById("inputs").style.display = "";
        document.getElementById("registrar-se").style.display = "none";
    }

    return (
        <div id='registrar-se'>
            <div id='div_inputs_registrar'>
                <img src={GifCarregamento} id="imagem_carregamento"/>
                <input className='input_cadastro' id='gamertag' placeholder='Gamertag'/>
                <input className='input_cadastro' id='email' type="email" placeholder='E-mail'/>
                <input className='input_cadastro' id='senha' type="password" placeholder='Senha'/>
                <input className='input_cadastro' id='contato' type="numero" placeholder='Número'/>
                
                <div id='div_botoes_cadastro'>
                    <button id='botao_cadastrar' onClick={cadastrarJogador}>Cadastrar-se</button>
                    <button id='botao_voltar' onClick={voltarTelaLogin}>Voltar</button>
                </div>
            </div> 
        </div>
    );
}

export default RegistrarComponent;
