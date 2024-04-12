import React from "react";
import styles from "./ourServicesCard.module.css";

const OurServicesCard = ({ imgSrc, title, theme, color }) => {
  return (
    <div className={styles.ourServices}>
      <div className={styles.ourServices_content}>
        <img src={imgSrc} alt={title} />
        <p
          style={{
            background: color,   
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default OurServicesCard;
