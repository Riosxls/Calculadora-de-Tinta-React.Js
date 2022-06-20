import { useState } from "react";
import Medidas from "./components/Medidas/Medidas";
import Resultado from "./components/Resultado/Resultado";
import Card from "./components/UI/Card";

function App(props) {
  const [parede01, setParede01] = useState("");
  const [parede02, setParede02] = useState("");
  const [parede03, setParede03] = useState("");
  const [parede04, setParede04] = useState("");

  const appTestHandler = () => {
    console.log(parede01);
  };

  return (
    <Card className="App">
      <Medidas
        areaParede01={(parede) => setParede01(parede)}
        areaParede02={(parede) => setParede02(parede)}
        areaParede03={(parede) => setParede03(parede)}
        areaParede04={(parede) => setParede04(parede)}
      />
      <Resultado
        areaTotalP01={parede01}
        areaTotalP02={parede02}
        areaTotalP03={parede03}
        areaTotalP04={parede04}
      />
      <button onClick={appTestHandler}>Teste App</button>
    </Card>
  );
}

export default App;
