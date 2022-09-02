import React, { useState } from "react";
import './ImagemPerfilComponent.css';
import FotoPerfil from '../../../assets/contato_simbolo.png';

function ImagemPerfilComponent(props) {

  return (
    <div id="div_foto_perfil">
        <div id="div_perfil">
            <div id="perfil">
                <img width={100} height={100} id="imagem_perfil" src={FotoPerfil}/>
            </div>
            <div>
                <span>Daniel do PN</span>
            </div>
        </div>
    </div>
  );
}

export default ImagemPerfilComponent;
