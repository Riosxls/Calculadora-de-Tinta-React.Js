import React, { useState } from "react";
import styles from "./DropdownMedidas.module.css";
import DropdownItem from "./DropdownItem";

const DropdownMedidas = (props) => {

  function AlturaMtHandler(e) {
    e.preventDefault()
    console.log(metros);
  }

  return (
    <div>
      <div className={styles.dropdown}>
        <label className={styles["dropdown-text"]}>Altura:</label>
        <DropdownItem onAltura={mt => metros = mt} />
      </div>
      <div className={styles.dropdown}>
        <label className={styles["dropdown-text"]}>Comprimento:</label>
        <DropdownItem />
      </div>
      <button onClick={AlturaMtHandler}>Test</button>
    </div>
  );
};

export default DropdownMedidas;
