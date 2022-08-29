import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import SectionPrincipal from './components/section/section-principal/SectionPrincipal';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SectionPrincipal />
    </div>
  );
}

export default App;
