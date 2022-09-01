import React from 'react';
import BotaoGenericoMenu from '../../Botoes/BotaoGenericoMenu/BotaoGenericoMenu';
import CardJogadorAtivo from '../../cardJogador/CardJogadorAtivo';
import CirculoNecessidade from '../../circulos/CirculoNecessidade';
import Wifi from '../../../assets/wifi.jpg';
import './SectionPrincipal.css';

function SectionPrincipal() {
  return (
    <div id='div_menu_principal'>
        <div id='aba_notificacao'>
            <div><img id='simbolo_wifi' src={Wifi}/></div>
            <div id='simbolos'>
                <div id='simbolo_bateria'>
                    <div>simbolo bateria</div>
                    <div id='percentual_bateria'></div>
                </div>
                <div>simbolo sinal</div>
            </div> 
        </div>
        <div id='menu_dropdown' hidden>
            <BotaoGenericoMenu path="/regras" id="opcao_regras" name="Regras"/>
            <BotaoGenericoMenu path="/empregos" id="opcao_emprego" name="Emprego"/>
            <BotaoGenericoMenu path="/denunciar_jogador" id="opcao_denunciar_jogador" name="Denunciar jogador"/>
        </div>

        <div id='necessidades_do_player'>
            <CirculoNecessidade id="1" nome_necessidade="Fome" percentual="50%"/>
            <CirculoNecessidade id="2" nome_necessidade="Sede" percentual="10%"/>
            <CirculoNecessidade id="3" nome_necessidade="Sono" percentual="100%"/>
        </div>

    </div>
  );
}

export default SectionPrincipal;