import React from 'react';
import BotaoApp from '../../components/Botoes/BotaoApps/BotaoApp';
import './AppsPage.css';
import { Link } from 'react-router-dom';

// Ícone aplicativos
import BombeiroIcon from '../../assets/emprego_icon/icone_bombeiro.png';
import PoliciaIcon from '../../assets/emprego_icon/icone_policia.jpg';
import BancoIcon from '../../assets/icone_banco.png';
import UberIcon from '../../assets/emprego_icon/uber.png';
import BensIcons from '../../assets/icone_posse.jpg';

import HeaderComponentVoltar from '../../components/footer/headerVoltar/HeaderComponentVoltar';


function AppsPage() {
  let aplicativos_pessoais = [
    {
      nome_aplicativo: "Meu banco",
      caminho_icone_aplicativo: BancoIcon,
      path_tela_aplicativo: "/aplicativo/pessoal/banco"
    }
  ];

  let aplicativos_emprego = [
    {
      nome_aplicativo: "Uber",
      caminho_icone_aplicativo: UberIcon,
      path_tela_aplicativo: "/aplicativo/uber"
    }
  ];

  let lista_apps_pessoais = aplicativos_pessoais.map((aplicativo) => 
    <Link className='link_tela_aplicativo' to={aplicativo.path_tela_aplicativo}>
      <BotaoApp caminho_icone_aplicativo={aplicativo.caminho_icone_aplicativo} nome_aplicativo={aplicativo.nome_aplicativo}/>
    </Link>
  );

  let lista_apps_emprego = aplicativos_emprego.map((aplicativo) => 
    <Link className='link_tela_aplicativo' to={aplicativo.path_tela_aplicativo}>
      <BotaoApp caminho_icone_aplicativo={aplicativo.caminho_icone_aplicativo} nome_aplicativo={aplicativo.nome_aplicativo}/>
    </Link>
  );


  return (
    <div id='div_aplicativos'>
      <div className='div_aplicativos'>
        <h3 className='titulo_tela_aplicativo'>APPs pessoais</h3>
        <section className='aplicativos'>
            {lista_apps_pessoais}
        </section>
      </div>
      <div className='div_aplicativos'>
        <h3 className='titulo_tela_aplicativo'>APPs do trabalho</h3>
        <section className='aplicativos'>
            {lista_apps_emprego}
        </section>
      </div>
      <HeaderComponentVoltar href="/"/>
    </div>
  );
}

export default AppsPage;