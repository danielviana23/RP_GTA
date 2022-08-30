import React from 'react';
import BotaoGenericoMenu from '../../BotaoGenericoMenu/BotaoGenericoMenu';
import CardJogadorAtivo from '../../cardJogador/CardJogadorAtivo';
import CirculoNecessidade from '../../circulos/CirculoNecessidade';
import './SectionPrincipal.css';

function SectionPrincipal() {
  return (
    <div id='div_menu_principal'>
        <div id='menu_dropdown' hidden>
            <BotaoGenericoMenu path="/regras" id="opcao_regras" name="Regras"/>
            <BotaoGenericoMenu path="/empregos" id="opcao_emprego" name="Emprego"/>
            <BotaoGenericoMenu path="/denunciar_jogador" id="opcao_denunciar_jogador" name="Denunciar jogador"/>
        </div>
        <section id='section_menu_principal'>
            <BotaoGenericoMenu path="/chamada_de_emergencia" id="chamada_de_emergencia" name="Chamada de emergência"/>
            <BotaoGenericoMenu path="/meu_emprego" id="meu_emprego" name="Meu emprego"/>
            <BotaoGenericoMenu path="/meu_perfil" id="meu_perfil" name="Meu perfil"/>
        </section>
        <div id='necessidades_do_player'>
            <CirculoNecessidade id="1" nome_necessidade="Fome" percentual="50%"/>
            <CirculoNecessidade id="2" nome_necessidade="Sede" percentual="10%"/>
            <CirculoNecessidade id="3" nome_necessidade="Sono" percentual="100%"/>
        </div>
        <h4>Lista de jogadores ativos</h4>
        <section id='secao_jogadores_ativos'>
            <div id='div_jogadores_ativos'>
                <input id='input_buscar_jogador' placeholder='Buscar jogador por gamertag'/>
                <CardJogadorAtivo />
            </div>
        </section>
    </div>
  );
}

export default SectionPrincipal;
