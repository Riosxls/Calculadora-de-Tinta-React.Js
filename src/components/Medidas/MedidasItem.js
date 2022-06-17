import React, { useState } from "react";
import Parede from "./Parede/Parede";
import styles from "./MedidasItem.module.css";
import Esquadrias from "./Esquadrias/Esquadrias";

const MedidasItem = (props) => {
  const porta = 1.52;
  const janela = 2.4;

  const [paredeAlturaMt, setParedeAlturaMt] = useState("");
  const [paredeAlturaCm, setParedeAlturaCm] = useState("");
  const [paredeComprimentoMt, setParedeComprimentoMt] = useState("");
  const [paredeComprimentoCm, setParedeComprimentoCm] = useState("");
  const [qtdPortas, setQtdPortas] = useState("");
  const [qtdJanelas, setQtdJanelas] = useState("");
  const [areaParede, setAreaParede] = useState("");
  const [paredeAltura, setParedeAltura] = useState("");
  const [paredeComprimento, setParedeComprimento] = useState("");
  const [areaTotalParede, setAreaTotalParede] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const altura = paredeAlturaMt + paredeAlturaCm;
    const comprimento = paredeComprimentoMt + paredeComprimentoCm;
    setParedeAltura(() => altura);
    setParedeComprimento(() => comprimento);
    const areaTotalEsquadrias = qtdPortas * porta + qtdJanelas * janela;
    const areaTotalParede = altura * comprimento;
    props.onGetAreaParede(areaTotalParede);
    props.onGetAreaEsquadrias(areaTotalEsquadrias);
  };

  return (
    <div className={styles.input}>
      <form id='medidas-form' onSubmit={submitHandler}>
        <div className={styles.medidas}>
          <label>{props.num}ªParede</label>
          <div className={styles["medida-item"]}>
            <Parede
              onAlturaMt={(mt) => setParedeAlturaMt(mt)}
              onAlturaCm={(cm) => setParedeAlturaCm(cm)}
              onComprimentoMt={(mt) => setParedeComprimentoMt(mt)}
              onComprimentoCm={(cm) => setParedeComprimentoCm(cm)}
            />
            <Esquadrias
              onQtdPortas={(portas) => setQtdPortas(portas)}
              onQtdJanelas={(janela) => setQtdJanelas(janela)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MedidasItem;
