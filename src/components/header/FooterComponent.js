import React from 'react';
import BotaoGenericoMenu from '../BotaoGenericoMenu/BotaoGenericoMenu';
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
        <BotaoGenericoMenu path="/chamada_de_emergencia" id="chamada_de_emergencia" name="Contatos"/>
        <BotaoGenericoMenu path="/meu_perfil" id="perfil_jogador" name="Perfil"/>
        <BotaoGenericoMenu path="/chamada_de_emergencia" id="chamada_de_emergencia" name="Contatos"/>

        <div id='menu' onClick={ativarMenuDropdown}>
            Menu
        </div>
    </footer>
  );
}

export default FooterComponent;
