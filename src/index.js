import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegrasPage from './components/pages/regras/RegrasPage';
import MeuEmpregoPage from './components/pages/meu_emprego/MeuEmpregoPage';
import MeuPerfilPage from './components/pages/meu_perfil/MeuPerfilPage';
import ChamadaDeEmergencia from './components/pages/chamada_de_emergencia/ChamadaDeEmergenciaPage';
import ChamadaDeEmergenciaForm from './components/form/chamada_emergencia_form/ChamadaEmergenciaForm';
import ListaDeEmpregos from './components/pages/empregos/listaEmpregos/ListaDeEmpregos';
import AppsPage from './components/pages/app_page/AppsPage';
import PolicialApp from './components/pages/Aplicativos/policial/PolicialApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
const login = true;

if(login) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index exact={true} path="/" element={<App />} />
          <Route path='/regras' exact={true} element={<RegrasPage />} />
          <Route path='/meu_perfil' exact={true} element={<MeuPerfilPage />} />
          <Route path='/meu_emprego' exact={true} element={<MeuEmpregoPage />} />
          <Route path='/chamada_de_emergencia' exact={true} element={<ChamadaDeEmergencia />} /> 
          <Route path="/regras" exact={true} element={<RegrasPage />} />
          <Route path="/fazer_chamada_de_emergencia" exact={true} element={<ChamadaDeEmergenciaForm />} />
          <Route path="/empregos" exact={true} element={<ListaDeEmpregos />} />
          <Route path="/apps" exact={true} element={<AppsPage />} />
          <Route path="/aplicativo/policial" exact={true} element={<PolicialApp />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );  
} else {
  root.render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  );  
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
