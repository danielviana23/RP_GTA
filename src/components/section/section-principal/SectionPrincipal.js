import React from 'react';
import BotaoGenericoMenu from '../../BotaoGenericoMenu/BotaoGenericoMenu';
import CardJogadorAtivo from '../../cardJogador/CardJogadorAtivo';
import CirculoNecessidade from '../../circulos/CirculoNecessidade';
import './SectionPrincipal.css';

function SectionPrincipal() {
  return (
    <div id='div_menu_principal'>
        <div id='menu_dropdown' hidden>
            <BotaoGenericoMenu id="a" name="Regras"/>
            <BotaoGenericoMenu id="a" name="Emprego"/>
            <BotaoGenericoMenu id="a" name="Denunciar jogador"/>
        </div>
        <section id='section_menu_principal'>
            <BotaoGenericoMenu id="a" name="Iniciar RP"/>
            <BotaoGenericoMenu id="b" name="Chamada de emergência"/>
            <BotaoGenericoMenu id="c" name="Meu emprego"/>
            <BotaoGenericoMenu id="c" name="Meu perfil"/>
        </section>
        <div id='necessidades_do_player'>
            <CirculoNecessidade id="1" nome_necessidade="Fome" percentual="50%"/>
            <CirculoNecessidade id="1" nome_necessidade="Fome" percentual="10%"/>
            <CirculoNecessidade id="1" nome_necessidade="Fome" percentual="100%"/>
        </div>
        <span>Lista de jogadores ativos</span>
        <input id='input_buscar_jogador' placeholder='Buscar jogador por gamertag'/>
        <div id='jogadores_ativos'>
            <CardJogadorAtivo />
        </div>
    </div>
  );
}

export default SectionPrincipal;
