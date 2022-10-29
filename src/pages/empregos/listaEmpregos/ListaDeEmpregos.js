import React, { useEffect, useState } from 'react';
import HeaderComponentVoltar from '../../../components/footer/headerVoltar/HeaderComponentVoltar';
import './ListaDeEmpregos.css';

function ListaDeEmpregos() {

    const [empregos, setEmpregos] = useState([]);

    let apijogador = "http://localhost:8080/emprego/buscar_empregos";
    var headerRequest = new Headers();
    headerRequest.set("Access-Control-Request-Method", "GET");
    headerRequest.set("Access-Control-Request-Headers", "Content-Type");
            
    

    useEffect(() => {
        fetch(apijogador, { headers: headerRequest, mode: 'cors' })
        .then((resposta) => {
            return resposta.json()
        }).then(jsonBody => {
            setEmpregos(jsonBody);
        }).catch((erro) => {
            console.log("ocorreu um erro ao buscar empregos")
        });

    }, [null])

    function associarJogadorAoEmprego(idEmprego) {
        
        console.log("INICIAR ASSOCIAÇÃO JOGADOR EMPREGO " + idEmprego)
        let apiEmpregos = "http://localhost:8080/emprego/associar_emprego_jogador";
        var headerRequest = new Headers();
        headerRequest.set("Access-Control-Request-Method", "POST");
        headerRequest.set("Access-Control-Request-Headers", "Content-Type");

        let empregoBody = {
            id_jogador: window.localStorage.getItem("token"),
            id_emprego: idEmprego
        }

        fetch(apiEmpregos, {
            method: 'POST',
            headers: headerRequest, 
            mode: 'cors',
            body: JSON.stringify(empregoBody)
        }).then((resposta) => {
            return resposta.json()
        }).then(jsonBody => {
            alert("Você está empregado!")
        }).catch((erro) => {
            console.log(erro);
            alert("Ocorreu um erro tentar empregá-lo! Tente novamente!");
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
            <h3>Lista de empregos</h3>
            <div id="div_lista_empregos">
                <ul id='lista_empregos'>
                    {lista_empregos}
                </ul>
            </div>
            <HeaderComponentVoltar href="/" />
        </div>
    );
}

export default ListaDeEmpregos;
