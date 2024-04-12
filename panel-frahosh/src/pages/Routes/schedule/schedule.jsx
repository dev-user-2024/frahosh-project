import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import space_man from "../../../assests/image/spaceman-happy.png";
import rabbit from "../../../assests/image/pink-happy.png";
import styles from "./schedule.module.css";
import moment from "jalali-moment";

const Schedule = () => {
  const persianToday = utils("fa").getToday();

  const [selectedDay, setSelectedDay] = useState(persianToday);

  const formatInputValue = () => {
    if (!selectedDay) return "";

    let month = selectedDay.month.toString().padStart(2, "0");
    let formatedDate = `${month}/${selectedDay.year}`;

    return formatedDate;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.stars}>
          <p className={styles.counter}>امروز: دوشنبه، 9 آبان 1401</p>
          <div className={styles.images}>
            <img src={rabbit} alt="خرگوش" />
            <img src={space_man} alt="مرد فضایی" />
          </div>
        </div>
      </div>
      <div className={styles.rowtable}>
        <table>
          <tr>
            <th>روز/ساعت</th>
            <th>8 - 9:15</th>
            <th>9:30 - 11</th>
            <th>11:15 - 12</th>
            <th>12 - 13:30</th>
          </tr>
          <tr>
            <td>شنبه</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
          </tr>
          <tr>
            <td>یکشنبه</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
          </tr>
          <tr>
            <td>دوشنبه</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
          </tr>
          <tr>
            <td>سه شنبه</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
          </tr>
          <tr>
            <td>چهارشنبه</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
            <td>ریاضی</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
