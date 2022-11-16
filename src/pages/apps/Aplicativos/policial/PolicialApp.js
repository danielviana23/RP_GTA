import React, { useEffect, useState } from "react";
import HeaderComponentVoltar from '../../../../components/footer/headerVoltar/HeaderComponentVoltar';
import BotaoFuncaoEmprego from '../../../../components/Botoes/BotaoFuncaoEmprego/BotaoFuncaoEmprego'
import ErroApp from '../../../erroApp/ErroApp';

import ServiceJogador from "../../../../services/JogadorService";

function PolicialApp() {

  const [jogador, setJogador] = useState({});

  useEffect(() => {
    let jogadorEncontrado = ServiceJogador.buscar_jogador();

    jogadorEncontrado.then(res => res.json())
    .then(json => {
      console.log(json);
      setJogador(json);
    });
  }, [])
  

  if(jogador.id_emprego != 1) {
    return (<ErroApp />)
  } else {
    if(jogador.id_emprego == 1) {
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