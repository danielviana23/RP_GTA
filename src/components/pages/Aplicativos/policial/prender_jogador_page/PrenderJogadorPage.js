import React from "react";
import HeaderComponentVoltar from "../../../../header/headerVoltar/HeaderComponentVoltar";
import ErroApp from "../../../erroApp/ErroApp";


function PrenderJogadorPage() {

  //let emprego_atual = window.localStorage.getItem("id_emprego")
  let emprego_atual = 1
  if(emprego_atual == 1) {
    return (
      <div id="aplicativo_policial">
        <HeaderComponentVoltar href="/aplicativo/policial"/>

      </div>
    );
  } else {
    return (
      <div><ErroApp /></div>
    )
  }
}

export default PrenderJogadorPage;