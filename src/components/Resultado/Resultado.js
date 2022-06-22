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
              Litros <br /> de Tinta: {props.qtdTinta01.total05}
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
              Litros <br /> de Tinta: {props.qtdTinta02.total05}
            </label>
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>3ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área da <br /> Parede:
            </label>
            <p>{props.areaTotalP03}</p>
            <label>
              Litros <br /> de Tinta:
            </label>
            {/* <p>Amount buckets of 18L: {props.quanTinTotal03.total18}</p>
            <p>Amount buckets of 3.6L: {props.quanTinTotal03.total36}</p>
            <p>Amount buckets of 2.5L: {props.quanTinTotal03.total25}</p>
            <p>Amount buckets of 0.5L: {props.quanTinTotal03.total05}</p> */}
          </div>
        </div>
        <div className={styles["resultado-item"]}>
          <label className={styles["resultado-title"]}>4ª Parede</label>
          <div className={styles.textarea}>
            <label>
              Área da <br /> Parede:
            </label>
            <p>{props.areaTotalP04}</p>
            <label>
              Litros <br /> de Tinta:
            </label>
            {/* <p>Amount buckets of 18L: {props.quanTinTotal04.total18}</p>
            <p>Amount buckets of 3.6L: {props.quanTinTotal04.total36}</p>
            <p>Amount buckets of 2.5L: {props.quanTinTotal04.total25}</p>
            <p>Amount buckets of 0.5L: {props.quanTinTotal04.total05}</p> */}
          </div>
        </div>
      </div>
      <div>
        <label>Você vai precisar de:</label>
      </div>
      <div className={styles["resultado-tinta"]}>
        <p className={styles["resultado-item"]}>
          {props.qtdTinta01.total18} Latas de 18L
        </p>
        <p className={styles["resultado-item"]}>
          {props.qtdTinta01.total36} Latas de 3.6L
        </p>
        <p className={styles["resultado-item"]}>
          {props.qtdTinta01.total25} Latas de 2.5L
        </p>
        <p className={styles["resultado-item"]}>
          {props.qtdTinta01.total05} Latas de 0.5
        </p>
      </div>
    </div>
  );
};

export default Resultado;
