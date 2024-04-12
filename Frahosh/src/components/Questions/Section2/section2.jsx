import Podcastbanner from "../../../assets/image/question-sec2.png";
import downbutton from "../../../assets/image/question-sec2m.png";
import styles from "./section2.module.css";

const PodcastSection1 = () => {
  return (
    <div className={styles.Section1}>
      <img
        className={styles.podcastbanner}
        src={Podcastbanner}
        alt="پادکست فراهوش"
      />
      <div className={styles.imagediv}>
        <img className={styles.downbutton} src={downbutton} alt="down-button" />
      </div>
    </div>
  );
};

export default PodcastSection1;
