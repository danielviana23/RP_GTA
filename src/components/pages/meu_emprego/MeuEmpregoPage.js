import React from "react";
import HeaderComponentVoltar from "../../header/headerVoltar/HeaderComponentVoltar";

function MeuEmpregoPage() {

  function buscarEmpregoAtual() {

      let emprego = window.localStorage.getItem("id_emprego_atual");
    
      if(emprego == null || emprego == "") {
        return "Você está desempregado! Procure um emprego!"
      }

     return emprego;
  }

  return (
    <div>
        <HeaderComponentVoltar href="/"/>
        <span>Emprego: {buscarEmpregoAtual()}</span>
    </div>
  );
}

export default MeuEmpregoPage;
