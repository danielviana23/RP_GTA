import React from 'react';
import HeaderComponentVoltar from '../../../header/headerVoltar/HeaderComponentVoltar';
import './ListaDeEmpregos.css';

function ListaDeEmpregos() {
    let empregos = [
        {
            id_emprego: 1,
            nome_emprego: "Policial",
            salario: 5000.00
        },
        {
            id_emprego: 2,
            nome_emprego: "Uber",
            salario: "Calculado com base na corrida"
        }
    ]

    function selecionarEmprego(id_emprego_novo) {
        let id_emprego_atual = window.localStorage.getItem("id_emprego_atual");

        if(id_emprego_atual == null || id_emprego_atual == "") {
            window.localStorage.setItem("id_emprego_atual", id_emprego_novo);
        } else {
            alert("Para entrar neste emprego você precisa sai do emprego atual.")
        }
    }

    let lista_empregos = empregos.map(emprego => {
        return ( <li className='item-emprego' id={emprego.id_emprego}>
                    <span>Emprego: {emprego.nome_emprego}</span>
                    <span>Salário: {emprego.salario}</span>
                    <button className='botao_emprego' onClick={selecionarEmprego} id={emprego.id_emprego}>Selecionar este emprego</button>
                </li>
        )
    })

  return (
    <div>
        <HeaderComponentVoltar href="/chamada_de_emergencia" />
        <div id="div_lista_empregos">
            <ul id='lista_empregos'>
                {lista_empregos}
            </ul>
        </div>
    </div>
  );
}

export default ListaDeEmpregos;
