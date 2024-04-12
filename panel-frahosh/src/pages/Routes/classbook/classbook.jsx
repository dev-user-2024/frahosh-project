import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import styles from "./classbook.module.css";

const Classbook = () => {
  const persianToday = utils("fa").getToday();

  const [selectedDay, setSelectedDay] = useState(persianToday);

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="تاریخ امروز"
      value={
        selectedDay
          ? `✅ ${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`
          : ""
      }
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

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h6 className={styles.h6}>تاریخ</h6>
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          renderInput={renderCustomInput} // render a custom input
          colorPrimary="#1d9bf0"
          calendarClassName="custom-calendar"
          calendarTodayClassName="custom-today-day"
          shouldHighlightWeekends
          locale="fa"
        />
      </div>

        <div className={styles.rows}>
          <h3 className={styles.titels}>ریاضی: 19</h3>
          <div className={styles.box}>
            <p className={styles.textlow}>توضیحات</p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
        <div className={styles.rows}>
          <h3 className={styles.titels}>هندسه: 18</h3>
          <div className={styles.box}>
            <p className={styles.textlow}>توضیحات</p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
              از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
              طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
        <div className={styles.rows}>
          <h3 className={styles.titels}>عربی: 14</h3>
          <div className={styles.box}>
            <p className={styles.textlow}>توضیحات</p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
      </div>
  );
};

export default Classbook;
