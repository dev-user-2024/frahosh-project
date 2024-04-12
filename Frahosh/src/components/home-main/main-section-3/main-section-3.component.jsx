import React from "react";
import Button from "../../buttons/button.component";
import { Link } from "react-router-dom";
import MainSection4Pic from "../../../assets/image/Group 71.png";
import mobilePic from "../../../assets/image/Group 415.png";
import styles from "./main-section-3.module.css";
import { ReactComponent as DownloadIcon1 } from "../../../assets/icons/Vector.svg";
import { ReactComponent as DownloadIcon2 } from "../../../assets/icons/Vector 2.svg";
import ZPattern from "../../z-pattern/z-pattern.component";
import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material";


const MainSection3 = () => {

  const theme = useTheme();

  return (
    <box className={styles.home_section_3}>
      <box className={styles.section_3}>
        <ZPattern className={styles.section_3_1} zPatternType="zPatternLtr">
          <Stack
            direction={{ md: "column", lg: "row" }}
            spacing={2}
            justifyContent={{ md: "center", lg: "space-between" }}
            alignItems="center"
          >
            <Box className={styles.section_3_img}>
              <img className={styles.pic} src={MainSection4Pic} alt="" />
            </Box>
            <Box className={styles.section_3_right}>
              <Box className={styles.right_context}>
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
                  className={styles.section_3_title}
                >
                  برگزاری جلسات آنلاین، در بیگ بلو باتن
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
                  className={styles.section_3_text}
                >
                  بیگ بلو باتن یک پلتفرم برگزاری کلاس آنلاین در مدرسه فراهوش
                  هست. مدارس و دانش آموزان می‌تونن از این پلتفرم برای اموزش
                  مجازی و کلاس انلاین استفاده کنن. استفاده از این سامانه کلاس
                  آنلاین به راحتی سایر سامانه هاست و همچنین برای استفاده از اون،
                  پشتیبانی مدرسه فراهوش در هر لحظه همراه شماست. این سامانه
                  امکانات بخصوصی داره که برگزاری کلاس انلاین رو هم برای همه
                  راحت‌تر می‌کنه.
                </Typography>
                <Link className={styles.section_3_btn} to="/big-blue-button">
                  <Button>ورود به سامانه</Button>
                </Link>
              </Box>
            </Box>
          </Stack>
        </ZPattern>
      </box>
      <Box className={styles.section_3_2desktop}>
        <Box className={styles.main_section_3_2_bgimg}>
          <Box className={styles.bg_section_3_2}>
            <Box className={styles.section3_2_context}>
              <h3 className={styles.section_3_2_title}>
                با اپلیکیشن فراهوش، دنیای آموزش در دستان تو!
              </h3>
              <p className={styles.section_3_2_text}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              </p>
              <Link className={styles.main_section_3_link} to="/test">
                <Button buttonType="mainSectionDownloadBtn" type="button">
                  <DownloadIcon1 className={styles.btn_icon1} />
                  دانلود نسخه اندروید
                </Button>
              </Link>
            </Box>
            <Box className={styles.section4_2_mobpic}>
              <img src={mobilePic} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.section_3_2_mobile}>
        <Box className={styles.section3_2_mobtitle}>
          <p>با اپلیکیشن فراهوش، دنیای آموزش در دستان تو!</p>
        </Box>
        <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "IRANSansX",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
            fontSize: "18px",
            lineHeight: "50px",
          }}
          className={styles.section3_2_mobtext}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </Typography>
        <Link className={styles.main_section_3_link} to="/test">
          <Button buttonType="mobMainSectionDownloadBtn" type="button">
            <DownloadIcon2 className={styles.btn_icon2} />
            دانلود نسخه اندروید
          </Button>
        </Link>
        <Box className={styles.section3_2mobpic}>
          <img src={mobilePic}></img>
        </Box>
      </Box>
    </box>
  );
};

export default MainSection3;
