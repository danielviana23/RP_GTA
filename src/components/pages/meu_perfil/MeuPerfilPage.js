import React, { useEffect, useState } from "react";
import HeaderComponentVoltar from "../../header/headerVoltar/HeaderComponentVoltar";

function MeuPerfilPage() {

  let informJog = useState({
    resposta: null
  });

  useEffect(() => {
    fetch("http://localhost:8080/jogador/buscar_jogador/ebad5448-3c15-4d74-b65f-57613efb3478", {method: 'GET', mode: 'no-cors'})
      .then(res => {
        console.log(res)
      })
      .catch(ex => {
        console.log(ex)
      })
      .finally((response) => {
        console.log("res "  + response)
        console.log("res "  + response.json())

      });
  
  })
  

  return (
    <div>
        <HeaderComponentVoltar href="/"/>
        <div>
        </div>
    </div>
  );
}

export default MeuPerfilPage;
