import { useState, useRef, useEffect } from "react";
import Button from "../../../Components/buttons/button.component";
import styles from "./percentage.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import {Typography} from "@mui/material";
import { useTheme } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
    legend: {
      position: 'right',
    },
  }
}

export default function App() {
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [trui, setTrui] = useState("");
  const [falsi, setFalsi] = useState("");
  const [white, setWhite] = useState("");
  const [all, setAll] = useState("");
  const [truepercent, setTruepercent] = useState("");
  const [falsepercent, setFalsepercent] = useState("");
  const [whitepercent, setWhitepercent] = useState("");
  const [isShown, setIsShown] = useState(false);
  const checkbox = useRef();
  const [chartData, setChartData] = useState({
    labels: ["درست", "غلط", "سفید"],
    datasets: [
      {
        label: 'داده‌ها',
        data: [truepercent, falsepercent, whitepercent],
        backgroundColor: [
          "#37be7f",
          "#df3e33",
          "#DDD",
        ],
        borderColor: [
          "#37be7f",
          "#df3e33",
          "#DDD",
        ],
        borderWidth: 1,
      },
    ],
  });
  useEffect(() => {
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [truepercent, falsepercent, whitepercent],
        },
      ],
    });
  }, [truepercent, falsepercent, whitepercent]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShown(true);
    if (checkbox.current.checked) {
      setMessage(
        ((Number(trui) * 3 - Number(falsi)) /
          ((Number(trui) + Number(falsi) + Number(white)) * 3)) *
          100
      );
      setAll(Number(trui) + Number(falsi) + Number(white));
      setTruepercent(
        (Number(trui) / (Number(trui) + Number(falsi) + Number(white))) * 100
      );
      setFalsepercent(
        (Number(falsi) / (Number(trui) + Number(falsi) + Number(white))) * 100
      );
      setWhitepercent(
        (Number(white) / (Number(trui) + Number(falsi) + Number(white))) * 100
      );
    } else {
      setMessage(
        (Number(trui) / (Number(trui) + Number(falsi) + Number(white))) * 100
      );
      setAll(Number(trui) + Number(falsi) + Number(white));
      setTruepercent(
        (Number(trui) / (Number(trui) + Number(falsi) + Number(white))) * 100
      );
      setFalsepercent(
        (Number(falsi) / (Number(trui) + Number(falsi) + Number(white))) * 100
      );
      setWhitepercent(
        (Number(white) / (Number(trui) + Number(falsi) + Number(white))) * 100 
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectiontop}>
        <div className={styles.inputs}>
          <div>
          <Typography fontSize={14} fontWeight={600} color="text.secondary">تعداد پاسخ های درست</Typography>
            <input
              className={styles.input}
              value={trui}
              type="number"
              name="true"
              onChange={(e) => setTrui(e.target.value)}
              required
            />
          </div>
          <div>
          <Typography fontSize={14} fontWeight={600} color="text.secondary">تعداد پاسخ های غلط</Typography>
            <input
              className={styles.input}
              value={falsi}
              type="number"
              name="false"
              onChange={(e) => setFalsi(e.target.value)}
              required
            />
          </div>
          <div>
          <Typography fontSize={14} fontWeight={600} color="text.secondary">تعداد پاسخ های سفید</Typography>
            <input
              className={styles.input}
              type="number"
              name="white"
              onChange={(e) => setWhite(e.target.value)}
              required
            />
          </div>
          <div className={styles.checkboxdiv}>
            <input
              className={styles.check}
              type="checkbox"
              name="js"
              ref={checkbox}
            />
             <Typography fontSize={14} fontWeight={600} color="text.secondary">آزمون دارای نمره منفی بوده است.</Typography>
          </div>
        </div>
        <Button buttonType="startquiz" type="submit" onClick={handleClick}>
          محاسبه کن
        </Button>
      </div>
      {isShown && (
        <div>
          {" "}
          <div className={styles.sectiontwo}>
            <div className={styles.inputs}>
              <div>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">درصد(نمره خام)</Typography>
                <input
                  className={styles.input}
                  value={(message).toFixed(2)}
                  type="number"
                  name="true"
                  disabled
                />
              </div>
              <div>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">تعداد کل سوالات</Typography>
                <input
                  className={styles.input}
                  value={all}
                  type="number"
                  name="all"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className={styles.sectionthree}>
            <div className={styles.inputsi}>
              <div>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">درست</Typography>
                <input
                  className={styles.input}
                  value={(truepercent).toFixed(2)}
                  type="number"
                  name="true"
                  disabled
                />
              </div>
              <div>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">غلط</Typography>
                <input
                  className={styles.input}
                  value={(falsepercent).toFixed(2)}
                  type="number"
                  name="false"
                  disabled
                />
              </div>
              <div>
              <Typography fontSize={14} fontWeight={600} color="text.secondary">سفید</Typography>
                <input
                  className={styles.input}
                  value={(whitepercent).toFixed(2)}
                  type="number"
                  name="white"
                  disabled
                />
              </div>
            </div>
            <div className={styles.chartdiv}>
            <div  className={styles.chart}><Pie options={options} data={chartData} style={{width:"350px" , height:"350px"}} /></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
