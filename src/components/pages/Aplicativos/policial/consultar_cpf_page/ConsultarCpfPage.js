import React, { useState } from "react";
import HeaderComponentVoltar from "../../../../footer/headerVoltar/HeaderComponentVoltar";
import ErroApp from "../../../erroApp/ErroApp";
import PerfilJogador from "../../../meu_perfil/perfil_jogador/PerfilJogador";

function ConsultarCpfPage() {

  const [showComponent, setShowComponent ] = useState(false);
  const [cpf, setCpf ] = useState(null);

  function onButtonClick() {
    
    if(showComponent) {
      console.log(cpf)
      setShowComponent(false)
    } else {
      setCpf(document.getElementById("input_cpf_jogador").value);
      document.getElementById("input_cpf_jogador").hidden = true;
      document.getElementById("botao_consulta_jogador").hidden = true;
      setShowComponent(true)
    }
  }

  // let emprego_atual = window.localStorage.getItem("id_emprego")
  let emprego_atual = 1
  if(emprego_atual == 1) {
    return (
    
      <div id="consultar_cpf">
        <HeaderComponentVoltar href="/aplicativo/policial" />
        { showComponent ?
          <PerfilJogador id_jogador_consulta={cpf}/> :
          null
        }
        <input id="input_cpf_jogador" />
        <button id="botao_consulta_jogador" onClick={onButtonClick}>Fazer consulta</button>
      </div>
    );
  } else {
    return (
      <div><ErroApp /></div>
    )
  }
}

export default ConsultarCpfPage;