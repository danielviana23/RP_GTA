import React, { useEffect, useState } from 'react';
import HeaderComponentVoltar from '../../../header/headerVoltar/HeaderComponentVoltar';
import './ListaDeEmpregos.css';

function ListaDeEmpregos() {

    const [empregos, setEmpregos] = useState([{id: 1}]);

    useEffect(() => {
        setInterval(() => {
            let apijogador = "http://localhost:8080/emprego/buscar_empregos";
            var headerRequest = new Headers();
            headerRequest.set("Access-Control-Request-Method", "GET");
            headerRequest.set("Access-Control-Request-Headers", "Content-Type");
            
            fetch(apijogador, { headers: headerRequest, mode: 'cors' })
            .then((resposta) => {
                return resposta.json()
            }).then(jsonBody => {
                setEmpregos(jsonBody);
            });

        }, 10000);
    }, [empregos]);

    function associarJogadorAoEmprego(idEmprego) {
        console.log("INICIAR ASSOCIAÇÃO JOGADOR EMPRESA " + idEmprego)
        let apiEmpregos = "http://localhost:8080/emprego/associar_emprego_jogador";
        var headerRequest = new Headers();
        headerRequest.set("Access-Control-Request-Method", "POST");
        headerRequest.set("Access-Control-Request-Headers", "Content-Type");

        let empregoBody = {
            id_jogador: 1,
            id_emprego: 1
        }

        fetch(apiEmpregos, {
            method: 'POST',
            headers: headerRequest, 
            mode: 'cors',
            body: {
                "id_jogador": 5,
                "id_emprego": 1
            }
        }).then((resposta) => {
            return resposta.json()
        }).then(jsonBody => {
            // setEmpregos(jsonBody);
        });
    }

    const lista_empregos = empregos.map((emprego) => 
        <li className='item-emprego' key={emprego.id} id={emprego.id}>
            <span>Emprego: {emprego.nomeEmprego}</span>
            <span>Salário: {emprego.salario}</span>
            <button className='botao_emprego' onClick={() => {associarJogadorAoEmprego(emprego.id)}} id={emprego.id_emprego}>Selecionar este emprego</button>
        </li>
    );

  return (
    <div>
        <HeaderComponentVoltar href="/chamada_de_emergencia" />
        <h3>Lista de empregos</h3>
        <div id="div_lista_empregos">
            <ul id='lista_empregos'>
                {lista_empregos}
            </ul>
        </div>
    </div>
  );
}

export default ListaDeEmpregos;
