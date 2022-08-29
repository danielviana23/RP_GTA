import React from 'react';
import './BotaoGenericoMenu.css';

function BotaoGenericoMenu(props) {
  return (
    <div className='botao_generico' id={props.id}>
        {props.name}
    </div>
  );
}

export default BotaoGenericoMenu;
