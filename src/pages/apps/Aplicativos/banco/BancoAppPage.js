import React from 'react';
import './BancoAppPage.css';

import HeaderComponentVoltar from '../../../../components/footer/headerVoltar/HeaderComponentVoltar';

import IconeBancoRp from '../../../../assets/icone_banco.png';
import { Link } from 'react-router-dom';

function BancoAppPage() {
  
  return (
    <div className='banco_page'>
      <section id='section_icone_banco'>
        <img width={100} height={100} id='icone_banco_tela_app' src={IconeBancoRp}/>
        <h1 id='titulo_rp_bank'>RP BANK</h1>
      </section>

      <section id='section_saldo_disponivel'>
            <span id='texto_saldo_disponivel'>Saldo disponível</span>
            <span id='valor_saldo_disponivel'>RP$ 4.500,00</span>
      </section>
      
      <section id='carossel_opcoes_bancarias'>
        <Link id='botao_link_pix' to={""}>Pix</Link>
      </section>

      <HeaderComponentVoltar href="/apps"/>
    </div>
  );
}

export default BancoAppPage;