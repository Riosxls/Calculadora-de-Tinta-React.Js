import React from "react";
import styles from "./Esquadrias.module.css";

const Esquadrias = (props) => {
  return (
    <div className={styles.esquadrias}>
      <div className={styles["esquadria-item"]}>
        <label className={styles["esquadria-text"]}>Portas:</label>
        <input
          onChange={(e) => props.onQtdPortas(e.target.value)}
          type="number"
          placeholder="(Qtd)"
        />
      </div>
      <div className={styles.medida}>
        <label className={styles["esquadria-text"]}>Janelas:</label>
        <input
          onChange={(e) => props.onQtdJanelas(e.target.value)}
          type="number"
          placeholder="(Qtd)"
        />
      </div>
    </div>
  );
};

export default Esquadrias;
