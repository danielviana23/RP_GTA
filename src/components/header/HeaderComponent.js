import React from 'react';
import './HeaderComponent.css';
// import { Link } from 'react-router-dom';

function HeaderComponent() {

  function ativarMenuDropdown() {
    let dropdown = document.getElementById("menu_dropdown");
    if(dropdown.hidden) {
      dropdown.hidden = false;
    } else {
      dropdown.hidden = true;
    }
  }

  return (
    <header id='header'>
        <div id="div_menu">
            <div id='menu' onClick={ativarMenuDropdown}>
                Menu
            </div>
        </div>
    </header>
  );
}

export default HeaderComponent;
