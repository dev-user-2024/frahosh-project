import React from "react";
import styles from "./space.module.css";
import Earth from "../../../assets/image/space/earth.png";
function Space() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.webs}>
            <div className={styles.planets}>
                <img src={Earth} alt="زمین" />

            </div>
            <div className={styles.divinfo}><p>اینجا زمین است</p></div>
        </div>
      </div>
    </div>
  );
}

export default Space;
