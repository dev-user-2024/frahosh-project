import React, { useState, useEffect } from "react";
import styles from "./calculator.module.css";
import usePrevious from "../../../../hooks/usePrevious";
import useIsMount from "../../../../hooks/useIsMount";
import { calculatorcontext } from "./calculatorcontext";
import Input from "../../../../Components/tools/calculator/input/Input";
import {
  Button,
  ClearButton,
  DeleteButton,
  BackButton,
  ForwardButton,
  RadButton,
  DegButton,
} from "../../../../Components/tools/calculator/buttons/Buttons";
import AnsButton from "../../../../Components/tools/calculator/AnsButton";
import Operator from "../../../../Components/tools/calculator/operator/Operator";
import EqualButton from "../../../../Components/tools/calculator/equal-button/EqualButton";
import * as Icons from "../../../../Components/tools/calculator/icons";

function App() {
  const [userInput, setUserInput] = useState("");
  const [stack, setStack] = useState([]);
  const [removed, setRemoved] = useState([]);
  const prevInput = usePrevious(userInput);
  const isMount = useIsMount();

  function getDifference(str1, str2) {
    var i = 0;
    var j = 0;
    var diff = "";

    while (j < str2.length) {
      if (str1[i] !== str2[j] || i === str1.length) diff += str2[j];
      else i++;
      j++;
    }
    return diff;
  }

  useEffect(() => {
    if (isMount) console.log("First Render");
    else {
      stack.push(getDifference(prevInput, userInput));
    }
  }, [userInput]);

  return (
    <calculatorcontext.Provider
      value={{ userInput, setUserInput, stack, setStack, removed, setRemoved }}
    >
      <div className={styles.App}>
        <div className={`${styles.calculator} ${styles.row}`}>
          <div>
            <div className={styles.monitor}>
              <Input />
            </div>
            <div className={styles.row}>
              <div className={styles.section1}>
                <div className={styles.col}>
                <div>
                    <EqualButton name={<Icons.Equal />} />
                  </div>
                  <div>
                    <Operator name={<Icons.Divide />} type="divide" />
                  </div>
                  <div>
                    <Operator name={<Icons.Multiplication />} type="mul" />
                  </div>
                  <div>
                    <Operator name={<Icons.Minus />} type="plus" />
                  </div>
                  <div>
                    <Operator name={<Icons.Plus />} type="plus" />
                  </div>
                </div>
                <div className={styles.col}>
                <div className={styles.delete}>
                    <DeleteButton name={<Icons.Backspace />} />
                  </div>
                  <div>
                    <Button name="9" className={styles.number} />
                  </div>
                  <div>
                    <Button name="6" className={styles.number} />
                  </div>
                  <div>
                    <Button name="3" className={styles.number} />
                  </div>
                  <div>
                    <Button name="." />
                  </div>
                </div>
                <div className={styles.col}>
                <div>
                    <ClearButton name="C" className={styles.c} />
                  </div>
                  <div>
                    <Button name="8" className={styles.number} />
                  </div>
                  <div>
                    <Button name="5" className={styles.number} />
                  </div>
                  <div>
                    <Button name="2" className={styles.number} />
                  </div>
                  <div>
                    <Button name="0" className={styles.number} />
                  </div>
                </div>
                <div className={styles.col}>
                <div>
                    <AnsButton name="Ans" />
                  </div>
                  <div>
                    <Button name="7" className={styles.number} />
                  </div>
                  <div>
                    <Button name="4" className={styles.number} />
                  </div>
                  <div>
                    <Button name="1" className={styles.number} />
                  </div>
                  <div>
                    <Button name="%" />
                  </div>
                </div>
              </div>
              <div className={styles.section2}>
                <div className={styles.col}>
                <div>
                    <ForwardButton name={<Icons.Next />} />
                  </div>
                  <div>
                    <Button name="e" />
                  </div>
                  <div>
                    <Button name={<Icons.SquareRoot />} type="sqrt" />
                  </div>
                  <div>
                    <Button name={<Icons.NthRoot />} type="nthrt" />
                  </div>
                  <div>
                    <Button name={<Icons.TenPowerX />} type="tenpowerx" />
                  </div>
                </div>
                <div className={styles.col}>
                <div>
                    <BackButton name={<Icons.Back />} />
                  </div>
                  <div>
                    <Button name="," />
                  </div>
                  <div>
                    <Button name={<Icons.XDegreeSquare />} type="degreesqr" />
                  </div>
                  <div>
                    <Button name={<Icons.XPowerN />} type="xpowern" />
                  </div>
                  <div>
                    <Button name="tan" type="func" />
                  </div>
                </div>
                <div className={styles.col}>
                <div>
                    <DegButton name="Deg" />
                  </div>
                  <div>
                    <Button name="(" />
                  </div>
                  <div>
                    <Button name="log" type="func" />
                  </div>
                  <div>
                    <Button name={<Icons.CubeRoot />} type="cbrt" />
                  </div>
                  <div>
                    <Button name="cos" type="func" />
                  </div>
                </div>
                <div className={styles.col}>
                <div>
                    <RadButton name="Rad" />
                  </div>
                  <div>
                    <Button name=")" />
                  </div>
                  <div>
                    <Button name={<Icons.Pi />} type="pi" />
                  </div>
                  <div>
                    <Button name={<Icons.XDegreeCube />} type="degreecube" />
                  </div>
                  <div>
                    <Button name="sin" type="func" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </calculatorcontext.Provider>
  );
}

export default App;
