import { Typography } from "@mui/material";
import React from "react";
import pic1 from "../../../assets/image/shutterstock_565376299.jpg";
import styles from "./section1.styles.module.css";
import { useTheme } from "@mui/material";
const Section1 = ({info}) => {

  const theme = useTheme();

  return (
    <div className={styles.sec_bg}>
      <div className={styles.sec}>
        <img className={styles.img} alt="" src={pic1} />
        <Typography
        variant="h4"
        mx={2}
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
          marginTop:"30px"
        }}
        className="z-pattern-text-title"
      >
      {info.title_blog}
      </Typography>{" "}
        <div className={styles.borders_bg}>
          <Typography
            sx={{
              fontFamily: "IRANSansX",
              fontSize: { md: "14px" },
              lineHeight: "235%",
              width: "108px",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",

            }}
          >
          {new Intl.DateTimeFormat('fa-IR' , {year:"numeric",month:"long" ,day:"numeric"}).format(new Date(info.created_at))}
          </Typography>
          <div className={styles.border1}></div>
          <Typography
            sx={{
              fontFamily: "IRANSansX",
              fontSize: { md: "14px" },
              lineHeight: "235%",
              width: "119px",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
            }}
          >
            نویسنده: {info.writer_id}
          </Typography>
          <div className={styles.border2}></div>
        </div>
        <Typography
          sx={{
            fontFamily: "IRANSansX",
            fontSize: { md: "18px" },
            lineHeight: "50px",
            width: { md: "100%", xs: "80%", marginTop: "2rem" },
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
         {
          info.content_blog
         }
        </Typography>
      </div>
    </div>
  );
};

export default Section1;
