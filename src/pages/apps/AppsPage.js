import React from 'react';
import BotaoApp from '../../components/Botoes/BotaoApps/BotaoApp';
import './AppsPage.css';
import { Link } from 'react-router-dom';

// Ícone aplicativos
import BombeiroIcon from '../../assets/emprego_icon/icone_bombeiro.png';
import PoliciaIcon from '../../assets/emprego_icon/icone_policia.jpg';
import UberIcon from '../../assets/emprego_icon/uber.png';
import AmbulanciaIcon from '../../assets/emprego_icon/icone_ambulancia.png';
import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';

function AppsPage() {

  let aplicativos = [
    {
      nome_aplicativo: "Policial",
      caminho_icone_aplicativo: PoliciaIcon,
      path_tela_aplicativo: "/aplicativo/policial"
    },
    {
      nome_aplicativo: "Bombeiro",
      caminho_icone_aplicativo: BombeiroIcon,
      path_tela_aplicativo: "/aplicativo/bombeiro"
    },
    {
      nome_aplicativo: "Uber",
      caminho_icone_aplicativo: UberIcon,
      path_tela_aplicativo: "/aplicativo/uber"
    },
    {
      nome_aplicativo: "Ambulância",
      caminho_icone_aplicativo: AmbulanciaIcon,
      path_tela_aplicativo: "/aplicativo/ambulancia"
    }
  ]

  let lista_aplicativos = aplicativos.map((aplicativo) => 
    <Link to={aplicativo.path_tela_aplicativo}>
      <BotaoApp caminho_icone_aplicativo={aplicativo.caminho_icone_aplicativo} nome_aplicativo={aplicativo.nome_aplicativo}/>
    </Link>
  )

  return (
    <div id='div_aplicativos'>
      <h3>Aplicativos</h3>
        <section id='aplicativos'>
          {lista_aplicativos}
        </section>
        <div></div>
        <HeaderComponentVoltar href="/"/>
    </div>
  );
}

export default AppsPage;