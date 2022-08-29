import React from 'react';
import './CardJogadorAtivo.css';

function CardJogadorAtivo(props) {
    let jogadores_ativos = [
        {
            Gamertag: "daniel do pn",
            Emprego: "policial",
            Status_jogador: "ativo na sessao"
        },
        {
            Gamertag: "cinthiadvf",
            Emprego: "policial",
            Status_jogador: "ativo na sessao"
        }
    ];

    let listaDeJogadoresAtivos = jogadores_ativos.map(jogador => {
        return (
            <li>
                <span>Gamertag: {jogador.Gamertag}</span>
                <span>Emprego: {jogador.Emprego}</span>
                <span>Status: {jogador.Status_jogador}</span>
            </li>
        );
    })

  return (
    <div id='card_jogador_ativo'>
        <ul>
            {listaDeJogadoresAtivos}
        </ul>
    </div>
  );
}

export default CardJogadorAtivo;
