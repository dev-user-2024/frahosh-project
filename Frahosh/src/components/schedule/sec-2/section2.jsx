import { Grid } from "@mui/material";
import React from "react";
import pic1 from "../../../assets/image/Rectangle 234.png";
import pic2 from "../../../assets/image/Rectangle 233.png";
import pic3 from "../../../assets/image/Rectangle 232.png";
import styles from "./section2.styles.module.css";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";

const Section2 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.bg_sec2}>
      <Box className={styles.sec2}>
        <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
          }}
          mb={5}
          className="z-pattern-text-title"
        >
          انواع برنامه‌های درسی فراهوش
        </Typography>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid
            xs={12}
            sm={6}
            md={4}
            justifyContent="center"
            alignItems="center"
            margin={{ xs: "2%", md: "0" }}
          >
            <Box className={styles.box3}>
              <img className={styles.img} src={pic1} alt="" />
              <Box className={styles.box_text}>
                <Typography
                  sx={{
                    fontFamily: "Rokh-Bold",
                    fontSize: {lg:"18px" , xs:"14px"},
                    textAlign: "center",
                    width: "198px",
                    height: "52px",
                    color: "#1D9BF0",
                    fontWeight: "600",
                    mt:"10px"
                  }}
                >
                  برنامه شخصی دانش‌آموز
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            justifyContent="center"
            alignItems="center"
            margin={{ xs: "2%", md: "0" }}
          >
            <Box className={styles.box2}>
              <img className={styles.img} src={pic2} alt="" />
              <Box className={styles.box_text}>
                <Typography
                  sx={{
                    fontFamily: "Rokh-Bold",
                    fontSize: {lg:"18px" , xs:"14px"},
                    textAlign: "center",
                    width: "198px",
                    height: "52px",
                    color: "#040C1A",
                    fontWeight: "600",
                    mt:"10px"
                  }}
                >
                  برنامه پیشنهادی مشاوران فراهوش
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            justifyContent="center"
            alignItems="center"
            margin={{ xs: "2%", md: "0" }}
          >
            <Box className={styles.box1}>
              <img className={styles.img} src={pic3} alt="" />
              <Box className={styles.box_text}>
                <Typography
                  sx={{
                    fontFamily: "Rokh-Bold",
                    fontSize: {lg:"18px" , xs:"14px"},
                    textAlign: "center",
                    width: "198px",
                    height: "52px",
                    color: "#1D9BF0",
                    fontWeight: "600",
                    mt:"10px"
                  }}
                >
                  برنامه پیشنهادی هوش‌مصنوعی فراهوش
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Section2;
