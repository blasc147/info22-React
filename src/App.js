import './App.css';
import ClassComponent from './components/ClassComponent';
import Header from './components/Header';
import Noticia from './components/Noticia';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Noticia titulo="Primer noticia" descripcion="detalle de la noticia nro 1"></Noticia>
      <Noticia titulo="Segunda noticia"></Noticia>
      <ClassComponent titulo="este es el class component"></ClassComponent>
    </div>
  );
}

export default App;
