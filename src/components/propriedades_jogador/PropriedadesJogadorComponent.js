import React, { useState } from "react";
import './PropriedadesJogadorComponent.css';

function PropriedadesJogadorComponent(props) {

  return (
    <section className="propriedades_jogador">
        <div className="propriedades">
            <span className="nome_propriedade">
                {props.nome_propriedade}
            </span>
            <span id={props.id} className="valor_propriedade">
                {props.valor_propriedade}
            </span>
        </div>
    </section>
  );
}

export default PropriedadesJogadorComponent;