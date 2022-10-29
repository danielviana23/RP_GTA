import React from 'react';
import './HeaderComponentVoltar.css';
import { Link } from 'react-router-dom';

function HeaderComponentVoltar(props) {
  return (
    <header id='header'>
        <div id="botao_voltar_tela_anterior">
            <Link id="link_voltar" to={props.href}></Link>
        </div>
    </header>
  );
}

export default HeaderComponentVoltar;
