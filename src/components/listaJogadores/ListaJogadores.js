import React from "react";
import './ListaJogadores.css';

function ListaJogadores() {
  return (
    <section id='secao_jogadores_ativos'>
        <h4>Lista de jogadores ativos</h4>
        <div id='div_jogadores_ativos'>
            <input id='input_buscar_jogador' placeholder='Buscar jogador por gamertag'/>
            <CardJogadorAtivo />
        </div>
    </section>
  );
}

export default ListaJogadores;
