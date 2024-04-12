import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import styles from "./reportcard.module.css";

const Classbook = () => {
  const persianToday = utils("fa").getToday();

  const [selectedDay, setSelectedDay] = useState(persianToday);

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="تاریخ امروز"
      value={selectedDay ? `✅ ${selectedDay.year}/${selectedDay.month}` : ""}
      style={{
        textAlign: "right",
        padding: "10px",
        fontSize: "14px",
        border: "0.5px solid #828282",
        borderRadius: "10px",
        color: "#040C1A",
        outline: "none",
        width: "250px",
      }}
      className={styles.mycustominputclass} // a styling class
    />
  );
  const formatInputValue = () => {
    if (!selectedDay) return "";

    let month = selectedDay.month.toString().padStart(2, "0");
    let formatedDate = `${month}/${selectedDay.year}`;

    return formatedDate;
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h6 className={styles.h6}>انتخاب ماه: </h6>
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          renderInput={renderCustomInput} // render a custom input
          colorPrimary="#1d9bf0"
          calendarClassName="custom-calendar"
          calendarTodayClassName="custom-today-day"
          shouldHighlightWeekends
          formatInputText={formatInputValue}
          locale="fa"
        />
      </div>
      <div className={styles.row2}>
        <div className={styles.edd}>
          <p>ریاضی</p>
          <div className={styles.line}></div>
          <p>20</p>
        </div>
        <div className={styles.odd}>
          <p>جغرافیا</p>
          <div className={styles.line}></div>
          <p>19</p>
        </div>
        <div className={styles.edd}>
          <p>ریاضی</p>
          <div className={styles.line}></div>
          <p>20</p>
        </div>
        <div className={styles.odd}>
          <p>جغرافیا</p>
          <div className={styles.line}></div>
          <p>19</p>
        </div>
        <div className={styles.edd}>
          <p>ریاضی</p>
          <div className={styles.line}></div>
          <p>20</p>
        </div>
        <div className={styles.odd}>
          <p>جغرافیا</p>
          <div className={styles.line}></div>
          <p>19</p>
        </div>
      </div>
    </div>
  );
};

export default Classbook;
