import React, { useContext } from "react";
import { calculatorcontext } from "../../../pages/Routes/tools/calculator/calculatorcontext";
import styles from "./buttons/button.module.css";

function AnsButton({ name }) {
  const { setUserInput, stack, setStack } = useContext(calculatorcontext);
  const buttonClick = () => {
    setUserInput(name);
    setStack(stack.concat(name));
  };
  return <button className={styles.buttons} onClick={buttonClick}>{name}</button>;
}

export default AnsButton;
