import React from 'react';
import './BotaoGenericoMenu.css';
import {Link} from 'react-router-dom';

function BotaoGenericoMenu(props) {
  return (
    <div className='botao_generico' id={props.id}>
        <Link className="link" to={props.path}>{props.name}</Link>
    </div>
  );
}

export default BotaoGenericoMenu;
