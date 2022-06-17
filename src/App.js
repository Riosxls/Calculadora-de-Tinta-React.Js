import React, { useState } from 'react';
import Medidas from './components/Medidas/Medidas';
import Resultado from './components/Resultado/Resultado';

const MEDIDAS_TOTAL = "";

const App = () => {
  const [medidas, setMedidas] = useState(MEDIDAS_TOTAL);

  const addMedidasHandler = (medida) => {
    setMedidas(medida);
    console.log(medidas);
  };

  return (
    <div className="App">
      <Medidas onAddMedidas={addMedidasHandler}/>
      <Resultado resultItem={medidas}/>
      <button onClick={addMedidasHandler}>Teste App.js</button>
    </div>
  );
}

export default App;
