import React, { useState } from 'react';
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';
import './MochilaPage.css';
import ServiceJogador from '../../services/JogadorService';

function MochilaPage() {

    const [itensMochilaJogador, setItensMochilaJogador] = useState([]);
    const filtro_categoria = {
      comida: "comida",
      bebida: "bebida",
      arma: "arma",
      outros_produtos: "outros_produtos"
    };
    const itens_mochila_jogador = ServiceJogador.buscar_itens_mochila_jogador(); 
    
    function mostrarDropdown(id_item) {
      let li_item = document.getElementById("lista" + id_item);
      // if(li_item.style.display == "none") {
      //   li_item.style.display = "block"
      // } else {
      //   li_item.style.display = "none"
      // }
    }

    function mostrarComidas() {
      let containsComida = false;
      let itens_comida_filtrados = itens_mochila_jogador.map(item => {
        if(item.categoria === filtro_categoria.comida) {
          containsComida = true;
          return (
            <li className='item_mochila' id='lista_categoria_comida'>
              <div className='nome_produto_mochila' >Pizza ( 10 unidades )</div>
              <div className='botoes_usar_transferir'>
                <div className='botao_usar_mochilapage'>Usar</div>
                <div className='botao_transferir_mochilapage'>Transferir</div>
              </div>
            </li>
          )
        } 
      });

      if(!containsComida) {
        return <h3 className='notfound'>Nenhuma comida na mochila</h3>
      }

      console.log(itens_comida_filtrados);

      return itens_comida_filtrados;
    }

    function mostrarBebidas() {
      let containsComida = false;
      let itens_comida_filtrados = itens_mochila_jogador.map(item => {
        if(item.categoria === filtro_categoria.bebida) {
          containsComida = true;
          return (
            <li className='item_mochila' id='lista_categoria_comida'>
              <div className='nome_produto_mochila' >{item.nome_produto} ( {item.quantidade} unidades )</div>
              <div className='botoes_usar_transferir'>
                <div className='botao_usar_mochilapage'>Usar</div>
                <div className='botao_transferir_mochilapage'>Transferir</div>
              </div>
            </li>
          )
        } 
      });

      if(!containsComida) {
        return <h3 className='notfound'>Nenhuma bebida na mochila</h3>
      }

      console.log(itens_comida_filtrados);

      return itens_comida_filtrados;
    }

    function mostrarArmas() {
      let containsComida = false;
      let itens_comida_filtrados = itens_mochila_jogador.map(item => {
        if(item.categoria === filtro_categoria.arma) {
          containsComida = true;
          return (
            <li className='item_mochila' id='lista_categoria_comida'>
              <div className='nome_produto_mochila' >{item.nome_produto} ( {item.quantidade} unidades )</div>
              <div className='botoes_usar_transferir'>
                <div className='botao_usar_mochilapage'>Usar</div>
                <div className='botao_transferir_mochilapage'>Transferir</div>
              </div>
            </li>
          )
        } 
      });

      if(!containsComida) {
        return <h3 className='notfound'>Nenhuma arma na mochila</h3>
      }

      console.log(itens_comida_filtrados);

      return itens_comida_filtrados;
    }

    function mostrarOutrosProdutos() {
      let containsComida = false;
      let itens_comida_filtrados = itens_mochila_jogador.map(item => {
        if(item.categoria === filtro_categoria.outros_produtos) {
          containsComida = true;
          return (
            <li className='item_mochila' id='lista_categoria_comida'>
              <div className='nome_produto_mochila' >{item.nome_produto} ( {item.quantidade} unidades )</div>
              <div className='botoes_usar_transferir'>
                <div className='botao_usar_mochilapage'>Usar</div>
                <div className='botao_transferir_mochilapage'>Transferir</div>
              </div>
            </li>
          )
        } 
      });

      if(!containsComida) {
        return <h3 className='notfound'>Nenhum produto na mochila</h3>
      }

      console.log(itens_comida_filtrados);

      return itens_comida_filtrados;
    }

    return (
        <div className="mochila_page">
          <div>
            <h1>Sua mochila</h1>
          </div>
          <span id='capacidade_mochila'>Capacidade máxima de carga da mochila: 10 unidades</span>
          
          <div className='link_page_mochila'>
              Comidas
          </div>
          <ul className='lista_itens_mochila'>
            {mostrarComidas()}
          </ul>
          
          <div className='link_page_mochila'>
              Bebidas
          </div>
          <ul className='lista_itens_mochila'>
            {mostrarBebidas()}
          </ul>
          
          <div className='link_page_mochila'>
              Armas
          </div>
          <ul className='lista_itens_mochila'>
            {mostrarArmas()}
          </ul>

          <div className='link_page_mochila'>
              Outros produtos
          </div>
          <ul className='lista_itens_mochila'>
            {mostrarOutrosProdutos()}
          </ul>
          <HeaderComponentVoltar href="/"/>
        </div>

    );
}

export default MochilaPage;