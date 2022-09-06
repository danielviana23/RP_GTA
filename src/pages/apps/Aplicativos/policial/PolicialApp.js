import React, { useState } from "react";
import HeaderComponentVoltar from '../../../../components/footer/headerVoltar/HeaderComponentVoltar';
import BotaoFuncaoEmprego from '../../../../components/Botoes/BotaoFuncaoEmprego/BotaoFuncaoEmprego'
import ErroApp from '../../../erroApp/ErroApp';

function PolicialApp() {

  let cpfJogador = window.localStorage.getItem("token");

  const [emprego, setEmprego] = useState();

  let apijogador = "http://localhost:8080/jogador/buscar_jogador/" + cpfJogador;
  var headerRequest = new Headers();
  headerRequest.set("Access-Control-Request-Method", "POST");
  headerRequest.set("Access-Control-Request-Headers", "Content-Type");

  //let emprego_atual = window.localStorage.getItem("id_emprego")
  fetch(apijogador, {headers: headerRequest, mode: 'cors'})
  .then((resposta) => {
    return resposta.json()
  }).then(jsonBody => {
      console.log(jsonBody)
      setEmprego(jsonBody.emprego)
    }).catch((erro) => {
      console.log(erro);
      alert("Ocorreu um erro ao buscar informação do jogador!")
  });

  if(emprego == null) {
    return (<ErroApp />)
  } else {
    if(emprego.id == 1) {
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
    }
  }

  

    

}

export default PolicialApp;