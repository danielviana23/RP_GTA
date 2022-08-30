import React from "react";
import HeaderComponentVoltar from "../../header/headerVoltar/HeaderComponentVoltar";
import './ChamadaDeEmergenciaPage.css';
import { Link } from 'react-router-dom';

function ChamadaDeEmergenciaPage() {
  return (
    <div>
        <HeaderComponentVoltar href="/"/>
        <section id="section_emergencia">
          <h2>Chamada de emergência</h2>
          <div id="div_emergencia">
            <div id="emergencia_policia"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Policial</Link></div>
            <div id="emergencia_bombeiro"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Bombeiro</Link></div>
            <div id="emergencia_ambulancia"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Ambulância</Link></div>
            <div id="emergencia_mecanico"><Link className="link_fazer_chamada_emergencia" to="/fazer_chamada_de_emergencia">Mecânico</Link></div>
          </div>
        </section>
    </div>
  );
}

export default ChamadaDeEmergenciaPage;
