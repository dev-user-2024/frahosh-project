import React, { Component } from "react";
import styles from "./countdown.module.css";
import Button from "../../../buttons/button.component";

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime,
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("وقت تمووووووومه 🙂");

      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart,
      });
    }
  };

  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className={styles.Countdown}>
        <div className={styles.Countdownlabel}>ثانیه : دقیقه : ساعت</div>
        <div className={styles.Countdowndisplay}>
          <button onClick={() => this.adjustTimer("incHours")}>⬆️</button>
          <button onClick={() => this.adjustTimer("incMinutes")}>
          ⬆️
          </button>
          <button onClick={() => this.adjustTimer("incSeconds")}>
          ⬆️
          </button>

          <div className={styles.Countdowntime}>
            {hours} : {minutes} : {seconds}
          </div>

          <button onClick={() => this.adjustTimer("decHours")}>⬇️</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>
          ⬇️
          </button>
          <button onClick={() => this.adjustTimer("decSeconds")}>
          ⬇️
          </button>
        </div>
        <div className={styles.buttons}>
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <Button buttonType="startquiz" onClick={this.startTimer}>
                ▶️ شروع
              </Button>
            )}
          {timerOn === true && timerTime >= 1000 && (
            <Button buttonType="stop" onClick={this.stopTimer}>
              وایسا
            </Button>
          )}
          {timerOn === false &&
            timerStart !== 0 &&
            timerStart !== timerTime &&
            timerTime !== 0 && (
              <Button buttonType="startquiz" onClick={this.startTimer}>
                ➡️ ادامه
              </Button>
            )}

          {(timerOn === false || timerTime < 1000) &&
            timerStart !== timerTime &&
            timerStart > 0 && (
              <Button buttonType="disable" onClick={this.resetTimer}>
                ↪️ شروع مجدد
              </Button>
            )}
        </div>
      </div>
    );
  }
}

export default Countdown;
