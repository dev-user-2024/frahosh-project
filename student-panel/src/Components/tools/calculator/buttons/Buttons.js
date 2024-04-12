import React, { useContext } from "react";
import styles from "./button.module.css";
import { calculatorcontext } from "../../../../pages/tools/calculator/calculatorcontext";

export function Button({ name, type }) {
  const { userInput, setUserInput } = useContext(calculatorcontext);
  return (
    <button
    className={styles.buttons}
      onClick={() => {
        switch (type) {
          case "func":
            setUserInput(userInput + name + "(");
            break;
          case "pi":
            setUserInput(userInput + "\u{1D70B}");
            break;
          case "sqrt":
            setUserInput(userInput + "√(");
            break;
          case "cbrt":
            setUserInput(userInput + "cbrt(");
            break;
          case "nthrt":
            setUserInput(userInput + "nthRoot(");
            break;
          case "tenpowerx":
            setUserInput(userInput + "10^");
            break;
          case "degreecube":
            setUserInput(userInput + "^3");
            break;
          case "degreesqr":
            setUserInput(userInput + "^2");
            break;
          case "xpowern":
            setUserInput(userInput + "^");
            break;
          default:
            setUserInput(userInput + name);
            break;
        }
      }}
    >
      {" "}
      {name}
    </button>
  );
}

export function ClearButton({ name }) {
  const { setUserInput } = useContext(calculatorcontext);
  return <button className={`${styles.c} ${styles.buttons}`} onClick={() => setUserInput("")}>{name}</button>;
}

export function DeleteButton({ name }) {
  const { userInput, setUserInput } = useContext(calculatorcontext);
  return (
    <button className={styles.buttons} onClick={() => setUserInput(userInput.slice(0, -1))}>{name}</button>
  );
}

export function BackButton({ name }) {
  const { setUserInput, stack, removed } = useContext(calculatorcontext);
  const undo = () => {
    var popped = Array.prototype.pop.call(stack);
    removed.push(popped);
    setUserInput(stack.join(""));
  };
  return <button className={styles.buttons} onClick={undo}>{name}</button>;
}

export function ForwardButton({ name }) {
  const { userInput, setUserInput, removed } = useContext(calculatorcontext);
  const redo = () => {
    if (removed.length === 0 || removed === undefined) {
      setUserInput(userInput);
    } else {
      console.log(removed);
      var reAdded = Array.prototype.pop.call(removed);
      setUserInput(userInput + reAdded);
    }
  };
  return <button className={styles.buttons} onClick={redo}>{name}</button>;
}

export function RadButton({ name }) {
  const buttonClick = () => {
    document.getElementById("rad").style.backgroundColor = "#292929";
    document.getElementById("deg").style.backgroundColor = "#3c3c3e";
  };
  return (
    <button className={styles.buttons} id="rad" onClick={buttonClick}>
      {name}
    </button>
  );
}

export function DegButton({ name }) {
  const buttonClick = () => {
    document.getElementById("deg").style.backgroundColor = "#292929";
    document.getElementById("rad").style.backgroundColor = "#3c3c3e";
  };
  return (
    <button className={styles.buttons} id="deg" onClick={buttonClick}>
      {name}
    </button>
  );
}
