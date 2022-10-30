import React from 'react';
import './HeaderAppBanco.css';
import IconeBancoRp from '../../../assets/icone_banco.png';


function HeaderAppBanco() {
    return (
      <section id='section_icone_banco'>
        <img width={100} height={100} id='icone_banco_tela_app' src={IconeBancoRp}/>
        <h1 id='titulo_rp_bank'>RP BANK</h1>
      </section>
    );
}

export default HeaderAppBanco;