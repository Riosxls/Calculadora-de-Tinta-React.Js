import React from "react";
import styles from "./Resultado.module.css";

const Resultado = (props) => {
  return (
    <div className={styles.resultado}>
      <div className={styles["resultado-parede"]}>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>1ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área da <br /> Parede: {props.areaTotalP01}
            </label>
            <label>
              Litros <br /> de Tinta: {props.areaTotalP01 / 5}
            </label>
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>2ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área da <br /> Parede: {props.areaTotalP02}
            </label>
            <label>
              Litros <br /> de Tinta: {props.areaTotalP02 / 5}
            </label>
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>3ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área da <br /> Parede: {props.areaTotalP03}
            </label>
            <label>
              Litros <br /> de Tinta: {props.areaTotalP03 / 5}
            </label>
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>4ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área da <br /> Parede: {props.areaTotalP04}
            </label>
            <label>
              Litros <br /> de Tinta: {props.areaTotalP04 / 5}
            </label>
          </div>
        </div>
      </div>
      <div className={styles["resultado-total"]}>
        <div className={styles["resultado-total-item"]}>
          <label>Area Total M²: </label>
        </div>
        <div className={styles["resultado-total-item"]}>
          <label>Litros de Tinta: </label>
        </div>
      </div>
      <div>
        <label>Você vai precisar de:</label>
      </div>
      <div className={styles["resultado-tinta"]}>
        <p className={styles["resultado-item"]}>Latas de 18L</p>
        <p className={styles["resultado-item"]}>Latas de 3.6L</p>
        <p className={styles["resultado-item"]}>Latas de 2.5L</p>
        <p className={styles["resultado-item"]}>Latas de 0.5</p>
      </div>
    </div>
  );
};

export default Resultado;
