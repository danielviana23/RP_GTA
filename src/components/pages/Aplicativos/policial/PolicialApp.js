import React from "react";
import HeaderComponentVoltar from "../../../footer/headerVoltar/HeaderComponentVoltar";
import BotaoFuncaoEmprego from '../../../Botoes/BotaoFuncaoEmprego/BotaoFuncaoEmprego'
import ErroApp from "../../erroApp/ErroApp";

function PolicialApp() {

  //let emprego_atual = window.localStorage.getItem("id_emprego")
  let emprego_atual = 1
  if(emprego_atual == 1) {
    return (
      <div id="aplicativo_policial">
        <HeaderComponentVoltar href="/"/>
        <BotaoFuncaoEmprego href_funcao="/aplicativo/policial/consultar_cpf" name="Consultar CPF" />
        {/* <BotaoFuncaoEmprego href_funcao="/aplicativo/policial/consultar_placa"  name="Consultar placa" />
        <BotaoFuncaoEmprego href_funcao="/aplicativo/policial/revistar_jogador" name="Revistar jogador" />
        <BotaoFuncaoEmprego href_funcao="/aplicativo/policial/revistar_veiculo" name="Revistar veiculo" />
        <BotaoFuncaoEmprego href_funcao="/aplicativo/policial/prender_jogador"  name="Prender jogador" /> */}
      </div>
    );
  } else {
    return (
      <div><ErroApp /></div>
    )
  }
}

export default PolicialApp;