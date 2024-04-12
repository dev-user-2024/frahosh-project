import React from "react";
import MainSection1Img from "../../../assets/image/Group 69.png";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import styles from "./main-section-1.module.css";
import Button from "../../buttons/button.component";
import ZPattern from "../../z-pattern/z-pattern.component";
import MainSection2Pic from "../../../assets/image/Frame 10.png";
import MainSection2PicMob from "../../../assets/image/Frame 10-mob.png";
import { useTheme } from "@mui/material";

const MainSection1 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.home_section1}>
      <Box className={styles.home_section_1}>
        <ZPattern zPatternType="zPatternLtr">
          <Stack
            direction={{ md: "column", lg: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className={styles.section_1_img}>
              <img className={styles.pic} src={MainSection1Img} alt="" />
            </Box>
            <Box className={styles.section_1_right}>
              <Box className={styles.right_context}>
                <Typography
                  variant="h4"
                  mx={2}
                  sx={{
                    fontWeight: "600",
                    fontFamily: "Rokh-Bold",
                    direction: "rtl",
                    color:
                    theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
                  }}
                  className={styles.section_1_title}
                >
                  تصمیم‌گیری برات سخته؟ همین الان وارد سامانه مشاوره شو!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "500",
                    fontFamily: "IRANSansX",
                    direction: "rtl",
                    fontSize: "18px",
                    lineHeight: "50px",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  }}
                  className={styles.section_1_text}
                >
                  یکی از مهم‌ترین مراحل زندگی آدم‌ها، تصمیم‌گیری برای انتخاب
                  رشته و شغل آینده اونهاست. اما نگران نباش؛ در مدرسه فراهوش
                  می‌تونی از طریق سامانه و اپلیکیشن فراهوش، با حرفه‌ای ترین
                  مشاوران درسی و خانواده در تماس باشی. اونها با تست‌های
                  استعدادیابی و جلسات مختلف، کمک می‌کنن تا مسیری رو که مال خودته
                  پیدا کنی. این مشاورها راه فراز و نشیب تحصیل رو برای دانش
                  آموزان هموارتر می‌کنن، و تلاش می‌کنن تا تو بتونی با آرامش و
                  اطمینان بیشتری پیش بری. منتظر چی هستی؟ وارد سامانه شو!
                </Typography>

                <Link className={styles.section_1_btn} to="/Counseling">
                  <Button>ورود به سامانه</Button>
                </Link>
              </Box>
            </Box>
          </Stack>
        </ZPattern>
      </Box>
      <Box className={styles.main_spacePic}>
        <img className={styles.spacePic} src={MainSection2Pic} alt="" />
      </Box>
      <Box className={styles.main_spacePic_mob}>
        <img className={styles.spacePic_mob} src={MainSection2PicMob} alt="" />
      </Box>
    </Box>
  );
};

export default MainSection1;
