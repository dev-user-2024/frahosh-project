import React, { useContext } from "react";
import styles from "./operator.module.css";
import styless from "../buttons/button.module.css";
import { calculatorcontext } from "../../../../pages/tools/calculator/calculatorcontext";

function Operator({ name, type }) {
  const { userInput, setUserInput } = useContext(calculatorcontext);
  return (
    <button
      className={`${styles.operator} ${styless.buttons}`}
      onClick={() => {
        switch (type) {
          case "plus":
            setUserInput(userInput + "+");
            break;
          case "minus":
            setUserInput(userInput + "-");
            break;
          case "mul":
            setUserInput(userInput + "×");
            break;
          default:
            setUserInput(userInput + "÷");
            break;
        }
      }}
    >
      {" "}
      {name}
    </button>
  );
}

export default Operator;
