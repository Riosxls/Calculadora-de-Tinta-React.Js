import React from "react";
import styles from "./Parede.module.css";
import ParedeMedidas from "./ParedeMedidas";

const Parede = (props) => {

  return (
    <div className={styles["parede-item"]}>
      <ParedeMedidas
        alturaMt={(mt) => props.onAlturaMt(mt)}
        alturaCm={(cm) => props.onAlturaCm(cm)}
        comprimentoMt={(mt) => props.onComprimentoMt(mt)}
        comprimentoCm={(cm) => props.onComprimentoCm(cm)}
      />
    </div>
  );
};

export default Parede;
