import React from 'react';
import BotaoGenericoMenu from '../../Botoes/BotaoGenericoMenu/BotaoGenericoMenu';
import BotaoQuadradoComPath from '../../Botoes/BotaoQuadradoComPath/BotaoQuadradoComPath';
import Wifi from '../../../assets/wifi.jpg';
import './SectionPrincipal.css';


function SectionPrincipal() {

    function deslogar() {
        window.localStorage.setItem("token", null);
        window.location.href = "/";
        // deslogar jogador da sessão
    }

    return (
        <div id='div_menu_principal'>
            <div id='aba_notificacao'>
                <div><img id='simbolo_wifi' src={Wifi} alt="simbolo wifi"/></div>
            </div>
            <div id='menu_dropdown' hidden>
                <div id='menus_botoes'>
                    <BotaoQuadradoComPath path="/regras" id="opcao_regras" name="Regras"/>
                    <BotaoQuadradoComPath path="/empregos" id="opcao_emprego" name="Emprego"/>
                    {/* <BotaoQuadradoComPath path="/denunciar_jogador" id="opcao_denunciar_jogador" name="Denunciar jogador"/> */}
                    <button onClick={deslogar} id='botao_sair'>Sair da sessão RP</button>
                </div>
            </div>
        </div>
    );
}

export default SectionPrincipal;