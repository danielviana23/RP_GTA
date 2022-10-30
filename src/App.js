import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SectionPrincipal from './components/section/section-principal/SectionPrincipal'
import FooterComponent from './components/footer/FooterComponent';

function TelaPrincipal() {
    return (
      <div className="App_principal">
        <SectionPrincipal />
        
        <FooterComponent/>
      </div>
    );
}

export default TelaPrincipal;