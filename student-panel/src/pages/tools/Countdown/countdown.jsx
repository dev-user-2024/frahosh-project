import spinnerImg from "./spinner.gif"
import background from "../../../assests/image/countdownimg.png"
import { useState, useEffect, useRef } from "react"
import styles from './countdown.module.css'
import moment from 'moment-jalaali';
import { Typography } from "@mui/material";

export default function App() {
  const spinnerRef = useRef(null)
  const countdownRef = useRef(null)
  const yearRef = useRef(null)
  const daysRef = useRef(null)
  const hoursRef = useRef(null)
  const minutesRef = useRef(null)
  const secondsRef = useRef(null)

  {/* Adicionar valor ao contador */}
  const addValue = (value) => value < 10 ? "0" + value : value

  {/* Contagem regressiva de ano novo */}
  const Countdown = () => {
    const currentTime = new Date()
    const currentYear = currentTime.getFullYear()
    const newYearTime =  new Date(`April 25 ${currentYear + 1} 00:00:00`)
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    daysRef.current.textContent = addValue(days)
    hoursRef.current.textContent = addValue(hours)
    minutesRef.current.textContent = addValue(minutes)
    secondsRef.current.textContent = addValue(seconds)
  }
  useEffect(()=>{
    const timer = setInterval(Countdown, 1000)
    return ()=> clearInterval(timer)
    }, [])


  {/* Exibir contador */}
  const countdownDisplay = () => {
    spinnerRef.current.remove()
    countdownRef.current.style.display = "flex"
  }
  useEffect(() => {
    setTimeout(countdownDisplay, 1000)
  }, [])
  {}
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const getCurrentDate = () => {
      const jalaliDate =  moment().format('jYYYY/jM/jD');
      setCurrentDate(jalaliDate);
    };

    getCurrentDate();
  }, []);
  
  return (
    <div className={styles.mainm}>
      <section className={styles.container}>
        <main ref={countdownRef} className={styles.countdown}>
          <div className={styles.timeday}>
            <h2 ref={daysRef}></h2>
            <p className={styles.pr}>روز</p>
          </div>{/* End time */}
          <div className={styles.time}>
            <h2 ref={hoursRef}></h2>
            <p className={styles.p}>ساعت</p>
          </div>{/* End time */}
          <div className={styles.time}>
            <h2 ref={minutesRef}></h2>
            <p className={styles.p}>دقیقه</p>
          </div>{/* End time */}
          <div className={styles.time}>
            <h2 ref={secondsRef}></h2>
            <p className={styles.p}>ثانیه</p>
          </div>{/* End time */}
        </main>{/* End countdown */}
        <figure ref={spinnerRef} className={styles.spinner}>
          <img src={spinnerImg} alt="Spinner gif" />
        </figure>{/* End spinner */}
      </section>{/* End container */}
      <div className={styles.inputdiv}>
        <div><Typography fontSize={16}  fontWeight={500} color="text.secondary">تاریخ امروز</Typography><input className={styles.input} type="text" value={currentDate} name="phone" disabled /></div>
        <div><Typography fontSize={16}  fontWeight={500} color="text.secondary">تاریخ کنکور</Typography><input ref={yearRef} className={styles.input} type="text" value="14 تیر 1403" name="phone" disabled /></div>
        </div>
      <div className={styles.imgbig}><img src={background} alt="تا کنکور" /></div>
    </div>
  )
}
