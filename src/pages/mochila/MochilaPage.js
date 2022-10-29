import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';
import './MochilaPage.css';

function MochilaPage() {
    return (
      <div className="mensagem_page">
        <div>
          <h1>Sua mochila</h1>
        </div>
        <span id='capacidade_mochila'>Capacidade de carga: 10 unidades</span>
        <ul id='lista_itens_mochila'>
          <li className='item_mochila' id='item_comida_mochila'><Link className='link_page_mochila' to={"/jogador/mochila/comida"}>Comida</Link></li>
          <li className='item_mochila' id='item_arma_mochila'><Link className='link_page_mochila' to={"/jogador/mochila/armas"}>Armas</Link></li>
          <li className='item_mochila' id='item_outros_produtos_mochila'><Link className='link_page_mochila' to={"/jogador/mochila/outros_produtos"}>Outros produtos</Link></li>
        </ul>
        <HeaderComponentVoltar href="/"/>
      </div>
    );
}

export default MochilaPage;
