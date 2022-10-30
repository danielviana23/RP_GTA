import React from 'react';
import './FuncaoPixPage.css';

import HeaderComponentVoltar from '../../../../../../components/footer/headerVoltar/HeaderComponentVoltar';
import HeaderAppBanco from '../../../../../../components/app/banco_app/HeaderAppBanco';
import { Link } from 'react-router-dom';

function FuncaoPixPage() {
  return (
    <div className='banco_pix_page'>
        <HeaderAppBanco />
        <form id='formulario_pix'>
            <h1 id='titulo_pix_banco_app'>PIX</h1>
            <section className='campo_id_valor' id='input_jogador_receber_pix'>
                <div>ID jogador que irá receber o PIX</div>
                <input></input>
            </section>
            <section className='campo_id_valor' id='input_valor_pix'>
                <div>Valor do PIX</div>
                <input></input>
            </section>
            <section id='section_botao'>
                <Link id='botao_enviar_pix' to={""}>Enviar PIX</Link>
            </section>
        </form>
        <HeaderComponentVoltar href="/aplicativo/pessoal/banco"/>
    </div>
  );
}

export default FuncaoPixPage;