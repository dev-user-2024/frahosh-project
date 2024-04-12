import { Typography, Box } from "@mui/material";
import React from "react";
import Button from "../../buttons/button.component";
import styles from "./section4.style.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as DownloadIcon2 } from "../../../assets/icons/Vector.svg";
import { useTheme } from "@mui/material";

const Section4 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.bg_sec4}>
      <Box className={styles.sec4}>
        <Typography
          sx={{
            fontFamily: "Rokh-Bold",
            fontSize: { xs: "12px", md: "27px" },
            lineHeight: " 291.5%",
            width: { xs: "100%", md: "669px" },
            color: "#FAFF02",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          همین حالا
        </Typography>
        <Typography
          sx={{
            fontFamily: "Rokh-Bold",
            fontSize: { xs: "9px", md: "27px" },
            lineHeight: " 291.5%",
            width: { xs: "100%", md: "669px" },
            color: "#FAFF02",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          اپلیکیشن فراهوش رو نصب کن و از امکانات بی‌شمارش لذت ببر
        </Typography>
        <Box className={styles.desktop_btn}>
          <Link className={styles.main_section_3_link} to="/test">
            <Button buttonType="mainSectionDownloadBtn">
              <DownloadIcon2 className={styles.btn_icon2} />
              دانلود نسخه اندروید
            </Button>
          </Link>
        </Box>
        <Box className={styles.mob_btn}>
          <Link className={styles.main_section_3_link} to="/test">
            <Button buttonType="mobMainSectionDownloadBtn">
              <DownloadIcon2 className={styles.btn_icon2} />
              دانلود نسخه اندروید
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
