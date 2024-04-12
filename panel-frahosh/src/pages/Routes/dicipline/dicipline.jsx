import React from "react";
import styles from "./dicipline.module.css";
import space_man from "../../../assests/image/space-man.png";
import rabbit from "../../../assests/image/rabbit.png";

const Disipline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.stars}>
          <p className={styles.counter}>تعداد: 5 مورد</p>
          <div className={styles.images}>
            <img src={space_man} alt="مرد فضایی" />
            <img src={rabbit} alt="خرگوش" />
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.row1}>
          <div className={styles.item}>
            <div className={styles.grade}>
              <span>0.5 نمره</span>
              <p>تاخیر در حضور</p>
            </div>
            <div>
              <p className={styles.textlow}>عنوان:</p>
            </div>
          </div>
          <div className={styles.item}>
            <p>1401/07/22</p>
            <p className={styles.textlow}>تاریخ:</p>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.item}>
            <p className={styles.discription}>
              ده دقیقه تاخیر در ورود به کلاس زبان انگلیسی
            </p>
            <p className={styles.textlow}>شرح:</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.row1}>
          <div className={styles.item}>
            <div className={styles.grade}>
              <span>0.5 نمره</span>
              <p>تاخیر در حضور</p>
            </div>
            <div>
              <p className={styles.textlow}>عنوان:</p>
            </div>
          </div>
          <div className={styles.item}>
            <p>1401/07/22</p>
            <p className={styles.textlow}>تاریخ:</p>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.item}>
            <p className={styles.discription}>
              ده دقیقه تاخیر در ورود به کلاس زبان انگلیسی
            </p>
            <p className={styles.textlow}>شرح:</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.row1}>
          <div className={styles.item}>
            <div className={styles.grade}>
              <span>0.5 نمره</span>
              <p>تاخیر در حضور</p>
            </div>
            <div>
              <p className={styles.textlow}>عنوان:</p>
            </div>
          </div>
          <div className={styles.item}>
            <p>1401/07/22</p>
            <p className={styles.textlow}>تاریخ:</p>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.item}>
            <p className={styles.discription}>
              ده دقیقه تاخیر در ورود به کلاس زبان انگلیسی
            </p>
            <p className={styles.textlow}>شرح:</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.row1}>
          <div className={styles.item}>
            <div className={styles.grade}>
              <span>0.5 نمره</span>
              <p>تاخیر در حضور</p>
            </div>
            <div>
              <p className={styles.textlow}>عنوان:</p>
            </div>
          </div>
          <div className={styles.item}>
            <p>1401/07/22</p>
            <p className={styles.textlow}>تاریخ:</p>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.item}>
            <p className={styles.discription}>
              ده دقیقه تاخیر در ورود به کلاس زبان انگلیسی
            </p>
            <p className={styles.textlow}>شرح:</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.row1}>
          <div className={styles.item}>
            <div className={styles.grade}>
              <span>0.5 نمره</span>
              <p>تاخیر در حضور</p>
            </div>
            <div>
              <p className={styles.textlow}>عنوان:</p>
            </div>
          </div>
          <div className={styles.item}>
            <p>1401/07/22</p>
            <p className={styles.textlow}>تاریخ:</p>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.item}>
            <p className={styles.discription}>
              ده دقیقه تاخیر در ورود به کلاس زبان انگلیسی
            </p>
            <p className={styles.textlow}>شرح:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disipline;
