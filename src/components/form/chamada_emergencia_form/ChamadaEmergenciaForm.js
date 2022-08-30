import React from 'react';
import HeaderComponentVoltar from '../../header/headerVoltar/HeaderComponentVoltar';
import "./ChamadaDeEmergenciaForm.css";

function ChamadaDeEmergenciaForm() {

    function submeterFormulario(event) {
        event.preventDefault();
        alert("fpo")
    }

    return (
        <div>
            <HeaderComponentVoltar href="/chamada_de_emergencia" />
            <form onSubmit={submeterFormulario} id='form_denuncia'>
                <h3>Emergência</h3>
                <div id='div_formulario'>
                    <textarea rows="5" name='acao_jogador' id="acao_jogador"  placeholder='Escreva aqui o que aconteceu e o que você precisa'/>
                    <button type='submit'>Fazer chamada</button>
                </div>
            </form>
        </div>
    );
}

export default ChamadaDeEmergenciaForm;
