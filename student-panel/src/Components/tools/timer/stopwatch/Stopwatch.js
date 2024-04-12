import React, { useState, useEffect } from "react";
import styles from "./stopwatch.module.css";
import Button from "../../../buttons/button.component";
import { Typography } from "@mui/material";

const Stopwatch = () => {
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTimerTime(Date.now() - timerStart);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, timerStart]);

  const startTimer = () => {
    setTimerOn(true);
    setTimerStart(Date.now() - timerTime);
  };

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTimerStart(0);
    setTimerTime(0);
  };

  let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <div className={styles.Stopwatch}>
      <div className={styles.Stopwatchdisplay}>
        <Typography fontSize={45} fontWeight={600} color="text.secondary">
          {hours} : {minutes} : {seconds} : {centiseconds}
        </Typography>
      </div>
      <div className={styles.buttons}>
        {!timerOn && timerTime === 0 && (
          <Button buttonType="startquiz" onClick={startTimer}>
            ▶️ شروع
          </Button>
        )}
        {timerOn && (
          <Button buttonType="stop" onClick={stopTimer}>
            وایسا
          </Button>
        )}
        {!timerOn && timerTime > 0 && (
          <Button buttonType="startquiz" onClick={startTimer}>
            ➡️ ادامه
          </Button>
        )}
        {!timerOn && timerTime > 0 && (
          <Button buttonType="disable" onClick={resetTimer}>
            ↪️ شروع مجدد
          </Button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
