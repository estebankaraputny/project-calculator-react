import './App.css';
import logoReact from './image/logo512.png'
import Boton from './components/button';
import Pantalla from './components/pantalla';
import BotonClear from  './components/buttonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState(''); 

  const agregarInput = val => {
    setInput(input + val);
  }
  
  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    } else{
      alert("No has introducido ningún valor.")
    }
  }


  return (
    <div className="App">
      <div className='react-logo-contenedor'>
        <img src={logoReact} className='react-logo' alt='Logo de React' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Pantalla input={input}/>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            C
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
