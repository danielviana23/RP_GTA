import React, { useEffect, useState } from "react";
import HeaderComponentVoltar from '../../../../components/footer/headerVoltar/HeaderComponentVoltar';
import BotaoFuncaoEmprego from '../../../../components/Botoes/BotaoFuncaoEmprego/BotaoFuncaoEmprego'
import ErroApp from '../../../erroApp/ErroApp';

import ServiceJogador from "../../../../services/JogadorService";

function UberMainPage() {

  const [jogador, setJogador] = useState({});

  useEffect(() => {
    let jogadorEncontrado = ServiceJogador.buscar_jogador();

    jogadorEncontrado.then(res => res.json())
    .then(json => {
      console.log(json);
      setJogador(json);
    });
  }, [])
  

  if(jogador.id_emprego != 2) {
    return (<ErroApp />)
  } else {
    if(jogador.id_emprego == 2) {
      return (
        <div id="aplicativo_uber">
          <BotaoFuncaoEmprego href_funcao="/aplicativo/policial/consultar_cpf" name="Pedidos de cliente" />
          <HeaderComponentVoltar href="/"/>
        </div>
      );
    }
  }
}

export default UberMainPage;