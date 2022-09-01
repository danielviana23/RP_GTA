import React from 'react';
import './BotaoApps.css';
import { Link } from 'react-router-dom';

function BotaoApp(props) {
  return (
    <div className='botao_app'>
      <div className='icone_aplicativo'>
        <img className='img_aplicativo' src={props.caminho_icone_aplicativo}/>
      </div>
      <span> App {props.nome_aplicativo}</span>
    </div>
  );
}

export default BotaoApp;
