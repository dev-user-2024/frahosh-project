import React, { useContext } from "react";
import styles from "./input.module.css";
import { calculatorcontext } from "../../../../pages/tools/calculator/calculatorcontext";
function Input() {
  const { userInput } = useContext(calculatorcontext);
  return <input className={styles.monitor} type="text" defaultValue={userInput} />;
}

export default Input;
