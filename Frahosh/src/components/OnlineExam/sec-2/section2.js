import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import pic1 from "../../../assets/image/Mask group.png";
import pic2 from "../../../assets/image/Mask group (1).png";
import pic3 from "../../../assets/image/Mask group (2).png";
import pic4 from "../../../assets/image/Mask group (3).png";
import styles from "./section2.style.module.css";
import { useTheme } from "@mui/material";

const Section2 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.sec2_bg}>
      <Box className={styles.sec2}>
      <Typography
      variant="h4"
      mx={2}
      sx={{
        fontWeight: "600",
        fontFamily: "Rokh-Bold",
        color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
        direction: "rtl",
        m:"20px"
      }}
      className="z-pattern-text-title"
    >
    ویژگی‌های ‌آزمون‌ آنلاین فراهوش
    </Typography>
        <Grid container justifyContent='center'>
          <Grid ml={3}>
            <Box className={styles.card_item4}>
              <img src={pic4} alt="" />
              <Typography
                sx={{
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  width: "242px",
                  height: "26px",
                  lineHeight: " 26px",
                  fontWeight: " 600",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                }}
              >
                ارائه آزمون‌های تستی و تشریحی
              </Typography>
            </Box>
          </Grid>
          <Grid ml={3}>
            <Box className={styles.card_item3}>
              <img src={pic3} alt="" />
              <Typography
                sx={{
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  width: "242px",
                  height: "26px",
                  lineHeight: " 26px",
                  fontWeight: " 600",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                }}
              >
                تحلیل و بررسی نتایج آزمون
              </Typography>
            </Box>
          </Grid>
          <Grid ml={3}>
            <Box className={styles.card_item2}>
              <img src={pic2} alt="" />
              <Typography
                sx={{
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  width: "242px",
                  height: "26px",
                  lineHeight: " 26px",
                  fontWeight: " 600",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                }}
              >
                ارائه کارنامه‌های تحلیلی متفاوت
              </Typography>
            </Box>
          </Grid>
          <Grid ml={3}>
            <Box className={styles.card_item1}>
              <img src={pic1} alt="" />
              <Typography
                sx={{
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  width: "242px",
                  height: "26px",
                  lineHeight: " 26px",
                  fontWeight: " 600",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                }}
              >
                ارائه راهکارهای موثر پس از آزمون
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Section2;
