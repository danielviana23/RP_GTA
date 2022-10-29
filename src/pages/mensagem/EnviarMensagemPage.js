import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';
import './EnviarMensagemPage.css';

function EnviarMensagemPage() {

    function enviarMensagemPage() {
        alert("mensagem enviada com sucesso")
    }

    return (
      <div id="body_pagina_enviar_mensagem">
        <div id='enviar_mensagem_page'>
            <div id='titulo_escrever_mensagem'>
                <h1 id='titulo_enviar_mensagem'>Enviar mensagem</h1>
            </div>
            <div id='numero_destinatario'>
                <div id='descricao_destinatario_mensagem'>
                    N° Destinatário
                </div>
                <input id='input_numero_destinatario'/>
            </div>
            <textarea id='text_area_conteudo_mensagem' placeholder='Escreva sua mensagem'>
            </textarea>
            <button id='botao_enviar_mensagem' onClick={enviarMensagemPage}>
                Enviar mensagem
            </button>
            <HeaderComponentVoltar href="/mensagem_recebida"/>
        </div>
      </div>
    );
}

export default EnviarMensagemPage;