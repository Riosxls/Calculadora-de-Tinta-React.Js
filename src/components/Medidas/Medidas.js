import React, { useState } from "react";
import MedidasItem from "./MedidasItem";
import styles from "./Medidas.module.css";

const Medidas = (props) => {
  const [parede01, setParede01] = useState("");
  const [parede02, setParede02] = useState("");
  const [parede03, setParede03] = useState("");
  const [parede04, setParede04] = useState("");
  const [esquadrias01, setEsquadrias01] = useState("");
  const [esquadrias02, setEsquadrias02] = useState("");
  const [esquadrias03, setEsquadrias03] = useState("");
  const [esquadrias04, setEsquadrias04] = useState("");

  const buckets = (amount) => {
    if (amount >= 90) {
      return calc18(amount);
    } else if (amount >= 18 && amount < 90) {
      return calc36(amount);
    } else if (amount >= 12.5 && amount < 18) {
      return calc25(amount);
    } else {
      const total05 = calc05(amount);

      return {
        total18: 0,
        total36: 0,
        total25: 0,
        total05: total05,
      };
    }
  };

  const amountRest = (bucket, amount) => {
    const amountBucket = Math.floor(amount / bucket);
    let rest = (amount % bucket).toFixed(2);
    return { amount: amountBucket, rest: rest };
  };

  const calc05 = (amount) => {
    const temp = amountRest(2.5, amount);
    let total = 0;
    if (temp.rest > 0) {
      total = temp.amount + 1;
    } else {
      total = temp.amount;
    }

    return total;
  };

  const calc25 = (amount) => {
    let temp = amountRest(12.5, amount);
    const total25 = temp.amount;
    let total05 = 0;
    if (temp.rest > 0) {
      total05 = calc05(temp.rest);
    }

    return { total18: 0, total36: 0, total25: total25, total05: total05 };
  };

  const calc36 = (amount) => {
    let temp = amountRest(18.0, amount);
    const total36 = temp.amount;
    let total25 = 0;
    let total05 = 0;
    if (temp.rest >= 12.5 && temp.rest < 18.0) {
      temp = calc25(temp.rest);
      total25 = temp.total25;
      total05 = temp.total05;
    } else {
      total05 = calc05(temp.rest);
    }

    return { total18: 0, total36: total36, total25: total25, total05: total05 };
  };

  const calc18 = (amount) => {
    let temp = amountRest(90, amount);
    const total18 = temp.amount;
    let total36 = 0;
    let total25 = 0;
    let total05 = 0;
    if (temp.rest >= 18.0 && temp.rest < 90) {
      temp = calc36(temp.rest);
      total36 = temp.total36;
      total25 = temp.total25;
      total05 = temp.total05;
    } else if (temp.rest >= 12.5 && temp.rest < 18.0) {
      temp = calc25(temp.rest);
      total25 = temp.total25;
      total05 = temp.total05;
    } else {
      total05 = calc05(temp.rest);
    }
    return {
      total18: total18,
      total36: total36,
      total25: total25,
      total05: total05,
    };
  };

  const calcAreaTintaHandler = () => {
    const areaTotal01 = parede01 - esquadrias01;
    const areaTotal02 = parede02 - esquadrias02;
    const areaTotal03 = parede03 - esquadrias03;
    const areaTotal04 = parede04 - esquadrias04;
    props.areaParede01(areaTotal01);
    props.areaParede02(areaTotal02);
    props.areaParede03(areaTotal03);
    props.areaParede04(areaTotal04);

    let total =
      parseFloat(areaTotal01) +
      parseFloat(areaTotal02) +
      parseFloat(areaTotal03) +
      parseFloat(areaTotal04);

    total = buckets(total);
    props.quanTinTemp01(total);

    // let amount1 = parseFloat(areaTotal01);
    // amount1 = buckets(amount1);
    // props.quanTinTemp01(amount1);

    // let amount2 = parseFloat(areaTotal02);
    // amount2 = buckets(amount2);
    // props.quanTinTemp02(amount2);

    // let amount3 = parseFloat(areaTotal03);
    // amount3 = buckets(amount3);
    // props.quanTinTemp03(amount3);

    // let amount4 = parseFloat(areaTotal04);
    // amount4 = buckets(amount4);
    // props.quanTinTemp04(amount4);
  };

  return (
    <div>
    <div className="medidas">
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
        <button
          onClick={calcAreaTintaHandler}
          form="medidas-form"
          type="submit"
        >
          Exibir Resultados
        </button>
      </div>
    </div>
    </div>
  );
};

export default Medidas;
