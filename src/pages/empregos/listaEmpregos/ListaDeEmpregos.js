import React, { useEffect, useState } from 'react';
import HeaderComponentVoltar from '../../../components/footer/headerVoltar/HeaderComponentVoltar';
import './ListaDeEmpregos.css';

import EmpregoServices from '../../../services/EmpregoService';
import ServiceJogador from '../../../services/JogadorService';
import funcoesUteis from '../../../services/TelaCarregamento';


function ListaDeEmpregos() {

    const [empregos, setEmpregos] = useState([]);
    const [id_emprego_jogador, setIdEmpregoJogador] = useState();

    useEffect(() => {
        console.log("ok")
        let resposta = EmpregoServices.buscar_lista_empregos();
        resposta.then((response) => {
            setEmpregos(response);
        })
    }, []);

    function associarJogadorAoEmprego(idEmprego) {
        EmpregoServices.associar_jogador_emprego(idEmprego);
    };

    function desassociarJogadorAoEmprego(idEmprego) {
        EmpregoServices.desassociarJogadorDoEmprego(idEmprego);
    };

    function buscarInformacaoJogador() {
        let token = window.localStorage.getItem("token_rp_mobile");
        let id_jogador = window.localStorage.getItem("id_jogador_rp_mobile");

        let jogador = ServiceJogador.buscar_jogador(id_jogador, token);
        return jogador;
    }

    const lista_empregos = empregos.map((emprego) => {

        let jogador = buscarInformacaoJogador();

        jogador.then(res=> res.json())
        .then(resposta => {
            setIdEmpregoJogador(resposta.id_emprego) 
        });

        console.log(emprego);
        console.log(id_emprego_jogador);
        
        if(id_emprego_jogador != emprego.id_emprego) {
            return (
                <li className='item-emprego' key={emprego.id_emprego} id={emprego.id_emprego}>
                    <span>Emprego: {emprego.nome_emprego}</span>
                    <span>Salário inicial: {emprego.cargos[0].salario}</span>
                    <button className='botao_emprego' 
                        onClick={() => {
                            associarJogadorAoEmprego(emprego.id_emprego)
                        }} id={emprego.id_emprego}>Selecionar este emprego
                    </button> 
                </li>
            )
        } else {
            return (
                <li className='item-emprego' key={emprego.id_emprego} id={emprego.id_emprego}>
                    <span>Emprego: {emprego.nome_emprego}</span>
                    <span>Salário inicial: R$ {emprego.cargos[0].salario}</span>
                    <button className='botao_emprego sair' onClick={() => {
                        desassociarJogadorAoEmprego(emprego.id_emprego)
                        }} id={emprego.id_emprego}>Sair deste emprego
                    </button> 
                </li>
            )
        }
    }
);

    return (
        <div>
            <h3>Lista de empregos</h3>
            <div id="div_lista_empregos">
                <ul id='lista_empregos'>
                    {lista_empregos.length == 0 ? <div>Não há emprego disponível</div> : lista_empregos}
                </ul>
            </div>
            <HeaderComponentVoltar href="/" />
        </div>
    );
}

export default ListaDeEmpregos;