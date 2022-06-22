import { useState } from "react";
import Medidas from "./components/Medidas/Medidas";
import Resultado from "./components/Resultado/Resultado";

function App(props) {
  const [parede01, setParede01] = useState("");
  const [parede02, setParede02] = useState("");
  const [parede03, setParede03] = useState("");
  const [parede04, setParede04] = useState("");
  const [quanTin01, setQuanTin01] = useState({});
  const [quanTin02, setQuanTin02] = useState({});
  const [quanTin03, setQuanTin03] = useState({});
  const [quanTin04, setQuanTin04] = useState({});

  //qtdTinta = quanTin = Paint Amount

  return (
    <div className="App">
      <Medidas
        areaParede01={(parede) => setParede01(parede)}
        areaParede02={(parede) => setParede02(parede)}
        areaParede03={(parede) => setParede03(parede)}
        areaParede04={(parede) => setParede04(parede)}
        quanTinTemp01={(quantin) => setQuanTin01(quantin)}
        quanTinTemp02={(quantin) => setQuanTin02(quantin)}
        quanTinTemp03={(quantin) => setQuanTin03(quantin)}
        quanTinTemp04={(quantin) => setQuanTin04(quantin)}
      />
      <Resultado
        areaTotalP01={parede01}
        areaTotalP02={parede02}
        areaTotalP03={parede03}
        areaTotalP04={parede04}
        qtdTinta01={quanTin01}
        qtdTinta02={quanTin02}
        qtdTinta03={quanTin03}
        qtdTinta04={quanTin04}
      />
    </div>
  );
}

export default App;
