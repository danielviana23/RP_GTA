import React, { useEffect, useState } from "react";
import ImagemPerfilComponent from "../../components/imagem/img_perfil/ImagemPerfilComponent";
import PropriedadesJogadorComponent from "../../components/propriedades_jogador/PropriedadesJogadorComponent";
import CirculoNecessidade from '../../components/circulos/CirculoNecessidade';

import './MeuPerfilPage.css';
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';

import ServiceJogador from "../../services/JogadorService";

function MeuPerfilPage() {

  const [cpf, setCpf] = useState(null);
  const [dinheiro, setDinheiro] = useState(null);
  const [vida, setVida] = useState(null);
  const [gamertag, setGamertag] = useState(null);
  const [emprego, setEmprego] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [cnh, setCnh]     = useState(null);
  const [fome, setFome]   = useState(null);
  const [sede, setSede]   = useState(null);
  const [sono, setSono]   = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      buscarInformacaoPerfilJogador()
      mudarCorNecessidades(fome, '1')
      mudarCorNecessidades(sede, '2')
      mudarCorNecessidades(sono, '3')
      mudarCorNecessidades(vida, 'vida')
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

  function buscarInformacaoPerfilJogador() {
    let idJogador = window.localStorage.getItem("id_jogador_rp_mobile");
    let token = window.localStorage.getItem("token_rp_mobile");

    let respostaApiJogador = ServiceJogador.buscar_jogador(idJogador, token);    
    
    respostaApiJogador.then((resp) => {
      console.log("resposta");
      console.log(resp);
      return resp.json();
    }).then(resJson => {
      console.log(resJson)
      setDinheiro(resJson.dinheiro);
      setCpf(resJson.id_jogador);
      setGamertag(resJson.gamertag);
      setSede(resJson.necessidades.sede);
      setFome(resJson.necessidades.fome);
      setVida(resJson.necessidades.vida);
      setSono(resJson.necessidades.sono);

      if(resJson.id_emprego) {
        setEmprego(resJson.empregoModel.nome_emprego);
        setCargo(resJson.empregoModel.cargos[0].nome_cargo);
      }
      setCnh("Você não possui CNH")
    });
  }


  return (
    <div>
        <HeaderComponentVoltar href="/"/>
        <h3 id="texto_meu_perfil">Meu perfil</h3>
        <div id='necessidades_do_player'>
            <CirculoNecessidade id="1" nome_necessidade="Fome" percentual={fome + "%"}/>
            <CirculoNecessidade id="2" nome_necessidade="Sede" percentual={sede + "%"}/>
            <CirculoNecessidade id="3" nome_necessidade="Sono" percentual={sono + "%"}/>
        </div>
        <div id="status_player_identificacao">
          <ImagemPerfilComponent nome_titulo={gamertag}/>
          <section id="identificação">
            <div id="texto_identificacao">IDENTIFICAÇÃO</div>
            <PropriedadesJogadorComponent nome_propriedade="ID" valor_propriedade={cpf}/>
          </section>
          <section id="status">
            <div id="texto_status_jogador">STATUS DO JOGADOR</div>
            <PropriedadesJogadorComponent nome_propriedade="Dinheiro" valor_propriedade={dinheiro}/>
            <PropriedadesJogadorComponent id="vida" nome_propriedade="Vida" valor_propriedade={vida + "%"}/>
            <PropriedadesJogadorComponent nome_propriedade="Emprego" valor_propriedade={emprego}/>
            <PropriedadesJogadorComponent nome_propriedade="Cargo" valor_propriedade={cargo}/>
            {/* <PropriedadesJogadorComponent nome_propriedade="CNH" valor_propriedade={cnh}/> */}
          </section>
        </div>
    </div>
  );
}

export default MeuPerfilPage;