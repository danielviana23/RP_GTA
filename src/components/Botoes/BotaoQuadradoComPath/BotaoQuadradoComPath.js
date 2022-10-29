import React from 'react';
import './BotaoQuadradoComPath.css';
import { Link } from 'react-router-dom';

function BotaoQuadradoComPath(props) {
  return (
    <div className='botao_quadrado_com_patch' id={props.id}>
        <Link className="link" to={props.path}>{props.name}</Link>
    </div>
  );
}

export default BotaoQuadradoComPath;