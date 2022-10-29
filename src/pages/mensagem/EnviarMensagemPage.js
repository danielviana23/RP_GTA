import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';
import './MensagemPage.css';

function EnviarMensagemPage() {

    function enviarMensagemPage() {
        
    }

    return (
      <div id="enviar_mensagem_page">
        <div id='titulo_escrever_mensagem'>
            <h1>Enviar mensagem</h1>
        </div>
        <div id='numero_destinatario'>
            <div>
                Destinatario
            </div>
            <input />
        </div>
        <textarea id='text_area_conteudo_mensagem' placeholder='Escreva sua mensagem'>
        </textarea>
        <HeaderComponentVoltar href="/mensagem"/>
      </div>
    );
}

export default EnviarMensagemPage;
