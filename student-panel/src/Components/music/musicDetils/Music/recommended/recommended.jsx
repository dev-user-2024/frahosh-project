import { Link } from "react-router-dom";
import styles from "./recommended.module.css";
import { ReactComponent as Play } from "../../../../../assests/icons/Play.svg";
import Sarbolandan from "../../../../../assests/image/sarbedaran.png";
import React from "react";

function Tabs() {
  return (
    <div className={styles.container}>
      <div className={styles.othersessions}>
        <Link to="/music/5">
          <div className={styles.imagetitle}>
            <div className={styles.imagecover}>
              <img src={Sarbolandan} alt="music-cover" />
              <Play className={styles.play} />
            </div>
            <div className={styles.texts}>
            <p>فردایی روشن-محمد رضایی</p>
            <p className={styles.textlow}>آلبوم سربلندان</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Tabs;
