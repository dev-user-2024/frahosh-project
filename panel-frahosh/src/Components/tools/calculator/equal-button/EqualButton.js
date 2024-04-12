import React, { useContext } from "react";
import styles from "./equal-button.module.css";
import styless from "../buttons/button.module.css";
import * as math from "mathjs";
import { calculatorcontext } from "../../../../pages/Routes/tools/calculator/calculatorcontext";

function EqualButton({ name }) {
  const { userInput, setUserInput, stack } = useContext(calculatorcontext);
  const myObject = {
    "√": "sqrt",
    "%": "/100*",
    "𝜋": "pi",
    "÷": "/",
    "×": "*",
  };

  const buttonClick = () => {
    const replaced = [...userInput]
      .map((letter) => {
        if (myObject[letter]) {
          return myObject[letter];
        } else {
          return letter;
        }
      })
      .join("");
    try {
      setUserInput(math.evaluate(replaced));
    } catch (error) {
      setUserInput(math.evaluate(replaced + ")"));
    }
  };

  return (
    <button className={`${styles.equal} ${styless.buttons}`} onClick={buttonClick}>
      {name}
    </button>
  );
}

export default EqualButton;
