import logo from './logo.svg';
import './App.css';
import Contacto from './components/contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Contacto
          nombre={"Pedro"}
          apellido={"Pérez"}
          email={"123@correo.com"}
          estado={false}
        />
        <Contacto
          nombre={"Andrés"}
          apellido={"Vargas"}
          email={"correo@123.com"}
          estado={true}  
        />
      </header>
    </div>
  );
}

export default App;
