import styles from "./section3.module.css";
import Button from "../../buttons/button.component";
import ArrowLeftWhite from "../../../assets/icons/arrow-left-white.png";

const PodcastSection1 = () => {
  return (
    <div className={styles.Section1}>
      <div className={styles.container}></div>
      <p>
        کامل ترین بانک تست<br></br>
        با بیش از 3 میلیون تست متفاوت<br></br>
        با پاسخ های تحلیلی و تشریحی 
      </p>
      <Button buttonType="btnbackwhite" type="button">
        ورود به سامانه
      </Button>
    </div>
  );
};

export default PodcastSection1;
