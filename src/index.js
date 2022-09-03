import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AppIndex from './AppIndex';
import './index.css';
import RegrasPage from './components/pages/app_page/AppsPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
let logg = window.localStorage.getItem("login");
let isLogged = false;
if(logg == "true") {
  isLogged = true
} else {
  isLogged = false;
}

root.render(
  <AppIndex isLogado={isLogged}/>
);  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals