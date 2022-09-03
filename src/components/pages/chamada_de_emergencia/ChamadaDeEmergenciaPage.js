import React from "react";
import './ChamadaDeEmergenciaPage.css';
import { Link } from 'react-router-dom';
import HeaderComponentVoltar from "../../footer/headerVoltar/HeaderComponentVoltar";

function ChamadaDeEmergenciaPage() {
  return (
    <div>
        <HeaderComponentVoltar href="/"/>
        <section id="section_emergencia">
          <h2>Contatos</h2>
          <div id="div_emergencia">
            <div className="contatos_emergencia" id="adicionar_contato"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Adicionar contato</Link></div>
            <div className="contatos_emergencia" id="emergencia_policia"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Policial</Link></div>
            <div className="contatos_emergencia" id="emergencia_bombeiro"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Bombeiro</Link></div>
            <div className="contatos_emergencia" id="emergencia_ambulancia"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Ambulância</Link></div>
            <div className="contatos_emergencia" id="emergencia_mecanico"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Mecânico</Link></div>
          </div>
        </section>
    </div>
  );
}

export default ChamadaDeEmergenciaPage;
