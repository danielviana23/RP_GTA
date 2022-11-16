import React from 'react';
import ReactDOM from 'react-dom/client';
import AppIndex from './AppIndex';
import './index.css';

import GIFCarregamento from './assets/carregamento.gif';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <div id="div_tela_carregamento" >
      <img src={GIFCarregamento} />
    </div>
    <AppIndex/>
  </div>
);  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals