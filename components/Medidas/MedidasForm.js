import React, { useState } from "react";
import styles from "./MedidasForm.module.css";

const MedidasForm = (props) => {
  const porta = 1.52;
  const janela = 2.4;

  const [paredeAltura, setParedeAltura] = useState("");
  const [paredeComprimento, setParedeComprimento] = useState("");
  const [qtdPortas, setQtdPortas] = useState("");
  const [qtdJanelas, setQtdJanelas] = useState("");
  const [areaParede, setAreaParede] = useState("");

  return (
    <div className={styles.input}>
      <form>
        <div className={styles.medidas}>
          <label> 1ªParede</label>
          <div className={styles["medida-item"]}>
            <div className={styles.esquadrias}>
              <div className={styles.medida}>
                <label className={styles["medida-text"]}>Portas:</label>
                <input
                  onChange={(e) => setQtdPortas(e.target.value)}
                  type="number"
                  placeholder="(Qtd)"
                />
              </div>
              <div className={styles.medida}>
                <label className={styles["medida-text"]}>Janelas:</label>
                <input
                  onChange={(e) => setQtdJanelas(e.target.value)}
                  type="number"
                  placeholder="(Qtd)"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MedidasForm;
