import React from "react";
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';
import './ErroApp.css';

function ErroApp() {
  return (
    <div id="erro_permissao_app">
      <HeaderComponentVoltar href="/apps"/>
      <h1>Você não está empregado neste cargo para usar este aplicativo</h1>
    </div>
  );
}

export default ErroApp;