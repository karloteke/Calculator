
import './App.css';
import Boton from './components/Boton'
import Screen from './components/Screen';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('')
  
  const addInput = valu => {
    setInput (input + valu);
  };

  const result = () => {
    setInput(evaluate(input))
  }
    

  return (
    <div className="App">
      <div className='container-logo'>
        <h1>CALCULA LO QUE QUIERAS</h1>
      </div>

      <div className='container-calculator'>
        <Screen input={input} />
        <div className='file'>
          <Boton clickManagement={addInput}>1</Boton>
          <Boton clickManagement={addInput}>2</Boton>
          <Boton clickManagement={addInput}>3</Boton>
          <Boton clickManagement={addInput}>+</Boton>
        </div>
        <div className='file'>
          <Boton clickManagement={addInput}>4</Boton>
          <Boton clickManagement={addInput}>5</Boton>
          <Boton clickManagement={addInput}>6</Boton>
          <Boton clickManagement={addInput}>-</Boton>
        </div>
        <div className='file'>
          <Boton clickManagement={addInput}>7</Boton>
          <Boton clickManagement={addInput}>8</Boton>
          <Boton clickManagement={addInput}>9</Boton>
          <Boton clickManagement={addInput}>*</Boton>
        </div>
        <div className='file'>
          <Boton clickManagement={result}>=</Boton>
          <Boton clickManagement={addInput}>0</Boton>
          <Boton clickManagement={addInput}>.</Boton>
          <Boton clickManagement={addInput}>/</Boton>
        </div>
        <div className='file'>
          <BotonClear clearManagement={() => setInput('')}>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
