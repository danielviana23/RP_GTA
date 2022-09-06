import React from "react";
import HeaderComponentVoltar from "../../components/footer/headerVoltar/HeaderComponentVoltar";
import './ChamadaDeEmergenciaPage.css';

function ChamadaDeEmergenciaPage() {

    function enviarOcorrencia() {
        let numero_emergencia = document.getElementById("numero_emergencia").value;
        let ocorrencia = document.getElementById("descricao_emergencia").value;

        let bodyRequest = {
                cpfJogadorOcorrencia: "1233333",
                numeroChamado: 190,
                descricaoOcorrencia: "Assalto em andamento em tal lugar"
        }

        const urlApiOcorrencia = "http://localhost:8080/ocorrencia/gerar_ocorrencia";

        if(numero_emergencia == "190") {
                bodyRequest.cpfJogadorOcorrencia = "112233";
                bodyRequest.numeroChamado = "190";
                bodyRequest.descricaoOcorrencia = "Assaltooooo"
        } else if(numero_emergencia == "192") {
                bodyRequest.cpfJogadorOcorrencia = "222";
                bodyRequest.numeroChamado = "192";
                bodyRequest.descricaoOcorrencia = "Gato no alto"
        } else if(numero_emergencia == "193") {
                bodyRequest.cpfJogadorOcorrencia = "111";
                bodyRequest.numeroChamado = "193";
                bodyRequest.descricaoOcorrencia = "Atropelamentoooo"
        }

        fetch(urlApiOcorrencia, {
                body: JSON.stringify(bodyRequest),
                method: 'POST',
                mode: 'cors'
        }).then((res) => {
            console.log("res " + res)
            console.log(res)
            return res.json();
        }).then((resposta) => {
            alert(resposta.mensagemRetorno)
        }).catch((erro) => {
            alert("Não foi possível criar a ocorrência")
            console.log(erro)
        });
       }       


    const listaContatosEmergencia = [
        {
            id: 1,
            nome: "Policia",
            numero: 190
        },
        {
            id: 2,
            nome: "Bombeiro",
            numero: 193
        },
        {
            id: 3,
            nome: "Samu",
            numero: 192
        }
    ]
       

    const listaContatosEmerg = listaContatosEmergencia.map(contatos => {
        return (
            <li className="contatos_emergencia">
                <div className="detalhe_contato">
                    <span className="nome_contato">
                        Nome: {contatos.nome}
                    </span>
                    <span className="nome_contato">
                        Numero: {contatos.numero}
                    </span>
                </div>
            </li>
        )
    })

  return (
    <div>
        <HeaderComponentVoltar href="/"/>
        <div id="div_inputs_emergencia"> 
            <div id="input_chamada_emergencia"> 
                <input id="numero_emergencia" placeholder="Número emergência"/>
                <input id="descricao_emergencia" placeholder="O que está acontecendo?"/>
                <button id="enviar_chamada_emergencia" onClick={enviarOcorrencia}>Enviar</button>
            </div>
        </div>
        <div id="contatos_salvos">
            <ul>
                {listaContatosEmerg}
            </ul>
        </div>
    </div>
  );
}

export default ChamadaDeEmergenciaPage;
