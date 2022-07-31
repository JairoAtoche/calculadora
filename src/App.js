import './App.css';
import { Pantalla } from '../src/componentes/Pantalla';
import Boton from '../src/componentes/Boton';
import BotonLimpiar from '../src/componentes/BotonLimpiar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {  
  const [valor, setValor] = useState('');
  const agregarValor = val => setValor(valor + val);
  const limpiarPantalla = () => setValor('');
  function tieneNumero(inputString) {
    var matches = inputString.match(/(\d+)/);
    if (matches) {
      return true;
    }
    return false;
  }
  const calcularResultado = () => {
    try {
      if(valor && tieneNumero(valor)) {
        setValor(evaluate(valor) );    
      }else {
        setValor('');
        alert('Por favor, ingresa un valor correcto.');
      }
    } catch(error) {
      setValor('');
      alert('Por favor, ingresa un valor correcto.');
    }
  };
  return (
    <div className='App'>
      <header className='header'>
        <h1 className='header__h1'>Calculadora usando ReactJS</h1>
      </header>
      <main className='main'>
        <article className='calculadora'>
          <Pantalla input={valor}></Pantalla>
          <div className='fila'>
            <Boton manejarClick={agregarValor}>1</Boton>
            <Boton manejarClick={agregarValor}>2</Boton>
            <Boton manejarClick={agregarValor}>3</Boton>
            <Boton manejarClick={agregarValor}>+</Boton>
          </div>
          <div className='fila'>            
            <Boton manejarClick={agregarValor}>4</Boton>
            <Boton manejarClick={agregarValor}>5</Boton>
            <Boton manejarClick={agregarValor}>6</Boton>
            <Boton manejarClick={agregarValor}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarValor}>7</Boton>
            <Boton manejarClick={agregarValor}>8</Boton>
            <Boton manejarClick={agregarValor}>9</Boton>
            <Boton manejarClick={agregarValor}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarValor}>0</Boton>
            <Boton manejarClick={agregarValor}>.</Boton>
            <Boton manejarClick={agregarValor}>/</Boton>
          </div>
          <div className='fila'>
            <BotonLimpiar manejarClick={limpiarPantalla}>Limpiar</BotonLimpiar>
          </div>
        </article>
      </main>
      <footer className='footer'>
        <a className='footer__a' href='https://www.github.com/jairoatoche' target='_blank' rel='noreferrer'>
          Desarrollado por @JairoAtoche
        </a>
      </footer>
    </div>
  );
}

export default App;
