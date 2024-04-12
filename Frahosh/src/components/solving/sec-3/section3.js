import { Typography } from "@mui/material";
import React from "react";
import pic1 from "../../../assets/image/Group 896.png";
import styles from "./section3.style.module.css";
import {useTheme} from "@mui/material";
const Section3 = () => {

    const theme = useTheme()
  return (
    <div className={styles.bg_sec3}>
      <div className={styles.sec3}>
        <Typography
        variant="h4"
        mx={2}
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
        }}
          className='z-pattern-text-title'
        >
          ما کنارتیم...
        </Typography>
        <img src={pic1} alt="" className={styles.pic} />
      </div>
    </div>
  );
};

export default Section3;
