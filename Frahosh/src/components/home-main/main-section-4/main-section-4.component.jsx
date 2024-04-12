import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Button from "../../buttons/button.component";
import MainSection5Img from "../../../assets/image/Group 382.png";
import styles from "./main-section-4.module.css";
import ZPattern from "../../z-pattern/z-pattern.component";
import { useTheme } from "@mui/material";


const MainSection4 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.home_section_5}>
      <Box className={styles.section_5}>
        <ZPattern zPatternType="Rtl">
          <Stack
            direction={{ md: "column", lg: "row" }}
            spacing={2}
            justifyContent={{ md: "center", lg: "space-between" }}
            alignItems="center"
          >
            <Box className={styles.section_5_img}>
              <img className={styles.pic} src={MainSection5Img} alt="" />
            </Box>
            <Box className={styles.section5_left}>
              <Box>
                <Box>
                  <Typography
                  variant="h4"
                  mx={2}
                  sx={{
                    fontWeight: "600",
                    fontFamily: "Rokh-Bold",
                    color:
                    theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
                    direction: "rtl",
                  }}
                  className={styles.section5_title}>
                    حل سوالات درسی، در سامانه حل سوال فراهوش
                  </Typography>
                  <Typography
                  sx={{
                    fontWeight: "500",
                    fontFamily: "IRANSansX",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    direction: "rtl",
                    fontSize: "18px",
                    lineHeight: "50px",
                  }}
                  className={styles.section5_text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت.
                  </Typography>
                </Box>
                <Link className={styles.main_section_5_btn} to="/Solving">
                  <Button>ورود به سامانه</Button>
                </Link>
              </Box>
            </Box>
          </Stack>
        </ZPattern>
      </Box>
    </Box>
  );
};

export default MainSection4;
