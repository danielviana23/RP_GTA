import React from 'react';
import './CirculoNecessidade.css';

function CirculoNecessidade(props) {
  return (
    <div>
      <span>{props.nome_necessidade}</span>
      <div className='circulo' id={props.id}>
        {props.percentual}
      </div>
    </div>
  );
}

export default CirculoNecessidade;
