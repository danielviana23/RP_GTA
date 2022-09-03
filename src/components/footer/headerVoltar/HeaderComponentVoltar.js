import React from 'react';
import './HeaderComponentVoltar.css';
import { Link } from 'react-router-dom';

function HeaderComponentVoltar(props) {
  return (
    <header id='header'>
        <div id="div_menu">
            <div id='menu'>
                <Link id="link_voltar" to={props.href}>Voltar</Link>
            </div>
        </div>
    </header>
  );
}

export default HeaderComponentVoltar;
