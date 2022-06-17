import React, { useState } from "react";
import MedidasItem from "./MedidasItem";
import styles from "./Medidas.module.css";
import Card from "../UI/Card";

const Medidas = (props) => {
  const [parede01, setParede01] = useState("");
  const [parede02, setParede02] = useState("");
  const [parede03, setParede03] = useState("");
  const [parede04, setParede04] = useState("");
  const [esquadrias01, setEsquadrias01] = useState("");
  const [esquadrias02, setEsquadrias02] = useState("");
  const [esquadrias03, setEsquadrias03] = useState("");
  const [esquadrias04, setEsquadrias04] = useState("");


  const calcAreaTintaHandler = () => {
    const areaTotal01 = parede01 - esquadrias01;
    const areaTotal02 = parede02 - esquadrias02;
    const areaTotal03 = parede03 - esquadrias03;
    const areaTotal04 = parede04 - esquadrias04;
    props.areaParede01(areaTotal01);
    props.areaParede02(areaTotal02);
    props.areaParede03(areaTotal03);
    props.areaParede04(areaTotal04);

  }

  return (
    <Card>
      <div className={styles.medidas}>
        <label>Digite quantas Portas e Janelas tem cada Parede:</label>
        <div className={styles["medidas-items"]}>
          <MedidasItem
            num="1"
            onGetAreaParede={(area) => setParede01(area)}
            onGetAreaEsquadrias={(esquadria) => setEsquadrias01(esquadria)}
          />
          <MedidasItem
            num="2"
            onGetAreaParede={(area) => setParede02(area)}
            onGetAreaEsquadrias={(esquadria) => setEsquadrias02(esquadria)}
          />
          <MedidasItem
            num="3"
            onGetAreaParede={(area) => setParede03(area)}
            onGetAreaEsquadrias={(esquadria) => setEsquadrias03(esquadria)}
          />
          <MedidasItem
            num="4"
            onGetAreaParede={(area) => setParede04(area)}
            onGetAreaEsquadrias={(esquadria) => setEsquadrias04(esquadria)}
          />
        </div>
        <button onClick={calcAreaTintaHandler} form='medidas-form' type="submit">Exibir Resultados</button>
      </div>
    </Card>
  );
};

export default Medidas;
