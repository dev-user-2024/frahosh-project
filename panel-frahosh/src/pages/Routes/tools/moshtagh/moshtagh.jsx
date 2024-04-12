import React, { useState } from "react";
import styles from "./moshtagh.module.css";
import * as math from "mathjs";
import img from "../../../../assests/image/moshtaghimg.png";
import Button from "../../../../Components/buttons/button.component";
import {ReactComponent as Backdel} from "../../../../assests/image/svg/backdel.svg"

function App() {
  const [inputExpression, setInputExpression] = useState("");
  const [derivative, setDerivative] = useState("");
  const [showClearButton, setShowClearButton] = useState(false); // New state for Clear button

  const calculateDerivative = () => {
    try {
      const derivativeResult = math.derivative(inputExpression, "x").toString();
      setDerivative(derivativeResult);
      setShowClearButton(true); // Show Clear button after calculation
    } catch (error) {
      setDerivative("Invalid expression");
      setShowClearButton(false); // Hide Clear button in case of invalid expression
    }
  };

  const clearInput = () => {
    setInputExpression("");
    setDerivative("");
    setShowClearButton(false); // Hide Clear button after clearing
  };

  const handleInputChange = (e) => {
    setInputExpression(e.target.value);
    setDerivative("");
    setShowClearButton(false); // Hide Clear button when input changes
  };

  const handleBackspaceClick = () => {
    setInputExpression(inputExpression.slice(0, -1));
  };

  return (
    <div className={styles.App}>
      <div className={styles.calculator}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="صورت را وارد کنید"
            value={inputExpression}
            onChange={handleInputChange}
          />
          {inputExpression && (
            <button
              className={styles.backspaceButton}
              onClick={handleBackspaceClick}
            >
               <Backdel />
            </button>
          )}
        </div>
        <Button buttonType="long" onClick={calculateDerivative}>
          محاسبه مشتق
        </Button>
        <div className={styles.result}>
          {derivative && (
            <div className={styles.result}>
              <input
                type="text"
                value={derivative}
                disabled
              />
            </div>
          )}
        </div>
        {showClearButton && (
          <Button buttonType="stop" onClick={clearInput}>
            پاک کردن
          </Button>
        )}
      </div>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default App;
