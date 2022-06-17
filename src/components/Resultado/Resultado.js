import React from "react";
import Card from "../UI/Card";
import styles from "./Resultado.module.css";

const Resultado = (props) => {

  return (
    <Card>
      <div className={styles.resultado}>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>1ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área <br /> Total:
            </label>
            <p>{props.areaTotalP01}</p>
            <label>
              Quantidade <br /> de Tinta:
            </label>
            <p></p>
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>2ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área <br /> Total: {props.parede02}
            </label>
            <p>{props.areaTotalP02}</p>
            <label>
              Quantidade <br /> de Tinta:
            </label>
            <p></p>
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>3ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área <br /> Total:
            </label>
            <p>{props.areaTotalP03}</p>
            <label>
              Quantidade <br /> de Tinta:
            </label>
            <p></p>
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>4ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área <br /> Total:
            </label>
            <p>{props.areaTotalP04}</p>
            <label>
              Quantidade <br /> de Tinta:
            </label>
            <p></p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Resultado;
