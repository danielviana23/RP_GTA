import React from 'react';
import './BancoAppPage.css';

import HeaderComponentVoltar from '../../../../components/footer/headerVoltar/HeaderComponentVoltar';
import HeaderAppBanco from '../../../../components/app/banco_app/HeaderAppBanco';
import { Link } from 'react-router-dom';

function BancoAppPage() {
  
  return (
    <div className='banco_page'>

      <HeaderAppBanco />

      <section id='section_saldo_disponivel'>
            <span id='texto_saldo_disponivel'>Saldo disponível</span>
            <span id='valor_saldo_disponivel'>RP$ 4.500,00</span>
      </section>
      
      <section id='carossel_opcoes_bancarias'>
        <Link id='botao_link_pix' to={"/aplicativo/pessoal/banco/pix"}>Pix</Link>
      </section>

      <HeaderComponentVoltar href="/apps"/>
    </div>
  );
}

export default BancoAppPage;