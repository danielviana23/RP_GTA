import React, { useEffect, useState } from "react";
import CirculoNecessidade from "../../../components/circulos/CirculoNecessidade";
import ImagemPerfilComponent from "../../../components/imagem/img_perfil/ImagemPerfilComponent";
import PropriedadesJogadorComponent from "../../../components/propriedades_jogador/PropriedadesJogadorComponent";


import './PerfilJogador.css';

function PerfilJogador(props) {

  const [cpf, setCpf] = useState(null);
  const [dinheiro, setDinheiro] = useState(null);
  const [vida, setVida] = useState(null);
  const [emprego, setEmprego] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [cnh, setCnh] = useState(null);
  const [fome, setFome] = useState(null);
  const [sede, setSede] = useState(null);
  const [sono, setSono] = useState(null);
  const [count, setCount] = useState(1);


  useEffect(() => {
    setTimeout(() => {
      mudarCorNecessidades(fome, '1')
      mudarCorNecessidades(sede, '2')
      mudarCorNecessidades(sono, '3')
      mudarCorNecessidades(vida, 'vida')
      buscarInformacaoPerfilJogador()
      console.log("ok");
      if(count == 1 ) {
        setCount(count - 1)
      } else {
        setCount(count + 1)
      }
    }, 1000)

  }, [count]);

  function mudarCorNecessidades(nome_necessidade, id_elemento) {
    if(nome_necessidade > 50 && nome_necessidade <= 80) {
      document.getElementById(id_elemento).style.backgroundColor = "#509910";
    } else if(nome_necessidade > 20 && nome_necessidade <= 50) {
      document.getElementById(id_elemento).style.backgroundColor = "#FFFF00";
    } else if(nome_necessidade >= 0 && nome_necessidade <= 20) {
      document.getElementById(id_elemento).style.backgroundColor = "#F50000";
    } else {
      document.getElementById(id_elemento).style.backgroundColor = "#008000";
    }
  }

  let apijogador = "http://localhost:8080/jogador/buscar_jogador/" + props.id_jogador_consulta;
  var headerRequest = new Headers();
  headerRequest.set("Access-Control-Request-Method", "GET");
  headerRequest.set("Access-Control-Request-Headers", "Content-Type");

  function buscarInformacaoPerfilJogador() {
    fetch(apijogador, {headers: headerRequest, mode: 'cors'})
    .then((resposta) => {
      return resposta.json();
    }).then(jsonBody => {

      setCpf(jsonBody.idJogador)
      setDinheiro(jsonBody.dinheiro);
      setVida(jsonBody.vida);
  
      if(jsonBody.emprego != null) {
        setEmprego(jsonBody.emprego.nomeEmprego)
        setCargo(jsonBody.emprego.cargo)
      } else {
        setEmprego("Desempregado")
      }
  
      setCnh(jsonBody.cnh);
      setSede(jsonBody.sede);
      setFome(jsonBody.fome)
      setSono(jsonBody.sono)
    });
  }

  return (
    <div>
        <h3 id="texto_meu_perfil">Informações do cidadão</h3>
        <div id='necessidades_do_player'>
            <CirculoNecessidade id="1" nome_necessidade="Fome" percentual={fome + "%"}/>
            <CirculoNecessidade id="2" nome_necessidade="Sede" percentual={sede + "%"}/>
            <CirculoNecessidade id="3" nome_necessidade="Sono" percentual={sono + "%"}/>
        </div>
        <div id="status_player_identificacao">
          <ImagemPerfilComponent />
          <section id="identificação">
            <div id="texto_identificacao">IDENTIFICAÇÃO</div>
            <PropriedadesJogadorComponent nome_propriedade="CPF" valor_propriedade={cpf}/>
          </section>
          <section id="status">
            <div id="texto_status_jogador">STATUS DO JOGADOR</div>
            <PropriedadesJogadorComponent nome_propriedade="Dinheiro" valor_propriedade={dinheiro}/>
            <PropriedadesJogadorComponent id="vida" nome_propriedade="Vida" valor_propriedade={vida + "%"}/>
            <PropriedadesJogadorComponent nome_propriedade="Emprego" valor_propriedade={emprego}/>
            <PropriedadesJogadorComponent nome_propriedade="Cargo" valor_propriedade={cargo}/>
            <PropriedadesJogadorComponent nome_propriedade="CNH" valor_propriedade={cnh}/>
          </section>
        </div>
    </div>
  );
}

export default PerfilJogador;
