import React, { useState } from 'react';
import './Login.css';
import './RegistrarComponent.css';

import UsuarioService from './services/UsuarioService';

function RegistrarComponent(props) {

    function validaBodyRequest(campo) {
        
    }

      // TODO ADICIONAR VALIDADOR
    function registrarJogador() {


        let bodyRequest = {
            "gamertag": document.getElementById("gamertag").value,
            "nome_personagem": document.getElementById("nome_personagem").value,
            "email": document.getElementById("email").value,
            "senha": document.getElementById("senha").value
        };
        console.log(validaBodyRequest(bodyRequest.gamertag))

        if(validaBodyRequest(bodyRequest.gamertag) ||
            validaBodyRequest(bodyRequest.nome_personagem) ||
            validaBodyRequest(bodyRequest.email) ||
            validaBodyRequest(bodyRequest.senha)
        ) {
            alert("Todos os campos precisam estar com valor preenchido!")
            console.log("validado")
            return;
        }

        UsuarioService.cadastrarUsuario();


        

        
    }

    function voltarTelaLogin() {
        document.getElementById("inputs").style.display = "";
        document.getElementById("registrar-se").style.display = "none";
    }

    return (
        <div id='registrar-se'>
            <div id='div_inputs_registrar'>
                <input className='input_cadastro' id='gamertag' placeholder='Gamertag'/>
                <input className='input_cadastro' id='email' type="email" placeholder='E-mail'/>
                <input className='input_cadastro' id='senha' type="password" placeholder='Senha'/>
                <input className='input_cadastro' id='numero' type="numero" placeholder='Número'/>
                
                <div id='div_botoes_cadastro'>
                    <button id='botao_cadastrar' onClick={registrarJogador}>Cadastrar-se</button>
                    <button id='botao_voltar' onClick={voltarTelaLogin}>Voltar</button>
                </div>
            </div> 
        </div>
    );
}

export default RegistrarComponent;
