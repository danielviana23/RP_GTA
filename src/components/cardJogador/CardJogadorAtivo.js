import React from 'react';
import './CardJogadorAtivo.css';

function CardJogadorAtivo(props) {
    let jogadores_ativos = [
        {
            id: 1,
            Gamertag: "daniel do pn",
            Emprego: "policial",
            Status_jogador: "ativo na sessao"
        },
        {
            id: 2,
            Gamertag: "cinthiadvf",
            Emprego: "policial",
            Status_jogador: "ativo na sessao"
        }
    ];

    let listaDeJogadoresAtivos = jogadores_ativos.map(jogador => {
        return (
                <li className='item-li' id={jogador.id}>
                    <span className='span_jogador_ativo'>Gamertag: {jogador.Gamertag}</span>
                    <span className='span_jogador_ativo'>Emprego: {jogador.Emprego}</span>
                    <span className='span_jogador_ativo'>Status: {jogador.Status_jogador}</span>
                </li>
        );
    });

  return (
    <div id='card_jogador_ativo'>
        <ul id='lista_de_jogadores_ativos'>
            {listaDeJogadoresAtivos}
        </ul>
    </div>
  );
}

export default CardJogadorAtivo;