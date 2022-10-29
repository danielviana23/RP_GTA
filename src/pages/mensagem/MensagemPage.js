import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';
import './MensagemPage.css';

function MensagemPage() {

    function buscarMensagens() {
        let mensagens_recebidas = [
            {
                id_mensagem: 1,
                nome_remetente_mensagem: "Daniel do PN",
                conteudo_mensagem: "Mensagem fulano taltaltal"
            },
            {
                id_mensagem: 2,
                nome_remetente_mensagem: "Daniel do PN2",
                conteudo_mensagem: "Mensagem fulano taltaltal"
            }
        ]

        if(mensagens_recebidas.length == 0) {
            return <h1>Nenhuma mensagem recebida.</h1>
        }

        let lista_mensagens_renderizada = mensagens_recebidas.map(mensagem => {
            return  (
                <li className='mensagem_recebida' id={mensagem.id_mensagem}>
                    <span className='nome_remetente_mensagem'>{mensagem.nome_remetente_mensagem}</span>
                    <span className='conteudo_mensagem_recebida'>{mensagem.conteudo_mensagem}</span>
                </li>
            )
        });
        

        return lista_mensagens_renderizada;
    }
    

    return (
      <div id="mensagem_page">
        <div id='botao_escrever_nova_mensagem'>
            <div id='icone_escrever_nova_mensagem'>
                <Link id='escrever_nova_mensagem' to={"/mensagem/enviar_mensagem"}></Link>
            </div>
        </div>
        <div id='titulo_mensagem_recebida'>
            <h1>Mensagem recebida</h1>
        </div>
        <ul id='lista_mensagens_recebidas'>
            {
                buscarMensagens()
            }           
        </ul>
        <HeaderComponentVoltar href="/"/>
      </div>
    );
}

export default MensagemPage;
