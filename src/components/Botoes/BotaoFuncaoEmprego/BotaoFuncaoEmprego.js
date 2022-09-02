import React from "react";
import './BotaoFuncaoEmprego.css';
import { Link } from 'react-router-dom';

function BotaoFuncaoEmprego(props) {
  return (
    <div className="div_botao_aplicativo_emprego">
        <Link className="link" to={props.href_funcao}>{props.name}</Link>
    </div>
  );
}

export default BotaoFuncaoEmprego;
