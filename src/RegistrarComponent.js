import React, { useState } from 'react';
import './Login.css';
import './RegistrarComponent.css';


function RegistrarComponent(props) {

    function validaBodyRequest(campo) {
        
    }

      // TODO ADICIONAR VALIDADOR
    function registrarJogador() {
        let urlApiJogador = "http://localhost:8080/jogador/criar_jogador";
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
            if(resposta.status == 201) {
                alert("Jogador cadastrado com sucesso!")
            } else if(resposta.status == 400){
                console.log(resposta)
                console.log(resposta.json())
                alert(resposta.json())
            }
          return resposta;
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
                <input className='input_cadastro' id='email' type="email" placeholder='E-mail'/>
                <input className='input_cadastro' id='senha' type="password" placeholder='Senha'/>
                <div id='div_botoes_cadastro'>
                    <button id='botao_cadastrar' onClick={registrarJogador}>Cadastrar-se</button>
                    <button id='botao_voltar' onClick={voltarTelaLogin}>Voltar</button>
                </div>
            </div> 
        </div>
    );
}

export default RegistrarComponent;
