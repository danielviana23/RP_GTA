import React, { useState } from 'react';
import './Login.css';
import './RegistrarComponent.css';


function RegistrarComponent(props) {

      // TODO ADICIONAR VALIDADOR
    function registrarJogador() {
        let urlApiJogador = "http://localhost:8080/jogador/criar_jogador";
        let bodyRequest = {
            "gamertag": document.getElementById("gamertag").value,
            "nome_personagem": document.getElementById("nome_personagem").value,
            "email": document.getElementById("email").value,
            "senha": document.getElementById("senha").value
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

        fetch(urlApiJogador, options)
        .then((resposta) => {
          return resposta;
        }).then(jsonBody => {
            console.log(jsonBody)
            alert("jogador cadastrado com sucesso!")
        }).catch((error) => {
            console.log(error)
        });
    }

    function voltarTelaLogin() {
        document.getElementById("inputs").style.display = "";
        document.getElementById("registrar-se").style.display = "none";
    }

    return (
        <div id='registrar-se'>
            <div id='div_inputs_registrar'>
                <input className='input_cadastro' id='gamertag' placeholder='Gamertag'/>
                <input className='input_cadastro' id='nome_personagem' placeholder='Nome personagem'/>
                <input className='input_cadastro' id='email' placeholder='E-mail'/>
                <input className='input_cadastro' id='senha' placeholder='Senha'/>
                <div id='div_botoes_cadastro'>
                    <button id='botao_cadastrar' onClick={registrarJogador}>Cadastrar-se</button>
                    <button id='botao_voltar' onClick={voltarTelaLogin}>Voltar</button>
                </div>
            </div> 
        </div>
    );
}

export default RegistrarComponent;
