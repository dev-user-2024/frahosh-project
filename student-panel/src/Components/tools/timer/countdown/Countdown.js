import React, { useState } from "react";
import styles from "./countdown.module.css";
import Button from "../../../buttons/button.component";
import { Typography } from "@mui/material";

function Countdown() {
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = () => {
    setTimerOn(true);
    setTimerStart(timerTime);
    const interval = setInterval(() => {
      setTimerTime((prevTime) => {
        const newTime = prevTime - 10;
        if (newTime >= 0) {
          return newTime;
        } else {
          clearInterval(interval);
          setTimerOn(false);
          alert("وقت تمووووووومه 🙂");
          return 0;
        }
      });
    }, 10);
    setTimerInterval(interval);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setTimerOn(false);
  };

  const resetTimer = () => {
    if (!timerOn) {
      setTimerTime(timerStart);
    }
  };

  const adjustTimer = (input) => {
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        setTimerTime(timerTime + 3600000);
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        setTimerTime(timerTime - 3600000);
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        setTimerTime(timerTime + 60000);
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        setTimerTime(timerTime - 60000);
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        setTimerTime(timerTime + 1000);
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        setTimerTime(timerTime - 1000);
      }
    }
  };

  let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

  return (
    <div className={styles.Countdown}>
      <div className={styles.Countdownlabel}>
        <Typography fontSize={24} fontWeight={600} color="text.secondary">
          <span style={{ margin: "0 20px" }}>ثانیه</span> :
          <span style={{ margin: "0 20px" }}>دقیقه</span> :
          <span style={{ margin: "0 20px" }}>ساعت</span>
        </Typography>
      </div>
      <div className={styles.Countdowndisplay}>
        <button onClick={() => adjustTimer("incHours")}>⬆️</button>
        <button onClick={() => adjustTimer("incMinutes")}>⬆️</button>
        <button onClick={() => adjustTimer("incSeconds")}>⬆️</button>

        <div className={styles.Countdowntime}>
          <Typography fontSize={50} fontWeight={600} color="text.secondary">
            {hours} : {minutes} : {seconds}
          </Typography>
        </div>

        <button onClick={() => adjustTimer("decHours")}>⬇️</button>
        <button onClick={() => adjustTimer("decMinutes")}>⬇️</button>
        <button onClick={() => adjustTimer("decSeconds")}>⬇️</button>
      </div>
      <div className={styles.buttons}>
        {!timerOn && (timerStart === 0 || timerTime === timerStart) && (
          <Button buttonType="startquiz" onClick={startTimer}>
            ▶️ شروع
          </Button>
        )}
        {timerOn && timerTime >= 1000 && (
          <Button buttonType="stop" onClick={stopTimer}>
            وایسا
          </Button>
        )}
        {!timerOn &&
          timerStart !== 0 &&
          timerStart !== timerTime &&
          timerTime !== 0 && (
            <Button buttonType="startquiz" onClick={startTimer}>
              ➡️ ادامه
            </Button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          timerStart !== timerTime &&
          timerStart > 0 && (
            <Button buttonType="disable" onClick={resetTimer}>
              ↪️ شروع مجدد
            </Button>
          )}
      </div>
    </div>
  );
}

export default Countdown;
