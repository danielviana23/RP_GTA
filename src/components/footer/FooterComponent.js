import React from 'react';
import BotaoGenericoMenu from '../Botoes/BotaoGenericoMenu/BotaoGenericoMenu';
import './FooterComponent.css';
// import { Link } from 'react-router-dom';

function FooterComponent() {

  function ativarMenuDropdown() {
    let dropdown = document.getElementById("menu_dropdown");
    if(dropdown.hidden) {
      dropdown.hidden = false;
    } else {
      dropdown.hidden = true;
    }
  }

  return (
    <footer id='footer'>
        <BotaoGenericoMenu path="/mensagem_recebida" id="botao_mensagem" />
        <BotaoGenericoMenu path="/jogador/mochila" id="botao_mochila" />
        <BotaoGenericoMenu path="/jogador/meu_perfil" id="botao_perfil_jogador" />
        <BotaoGenericoMenu path="/apps" id="apps" />
        <div id='menu' onClick={ativarMenuDropdown}>
        </div>
    </footer>
  );
}

export default FooterComponent;
