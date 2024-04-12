import ZPattern from "../../z-pattern/z-pattern.component";
import { Typography, Box, Stack } from "@mui/material";
import Button from "../../buttons/button.component";
import { Link } from "react-router-dom";
import styles from "./main-section-2.module.css";
import MainSection2Pic from "../../../assets/image/Group 505.png";
import MainSection2PicMob from "../../../assets/image/Group 505 (1).png";
import schoolboy from "../../../assets/image/school-boy.png";
import { useTheme } from "@mui/material";
const MainSection2 = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box className={styles.home_section_2}>
        <ZPattern zPatternType="Rtl">
          <Stack
            direction={{ md: "column", lg: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Box className={styles.section_2_img}>
                <img className={styles.pic} src={schoolboy} alt="schoolboy" />
              </Box>
            </Box>
            <Box className={styles.main_section_left}>
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
                    className={styles.section2_title}
                  >
                    سامانه مدرسه فراهوش، مجهزترین مدرسه‌ی مجازی
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
                    className={styles.section2_text}
                  >
                    در سامانه مدیریت یادگیری فراهوش، خدمات جامعی مثل مشاوره و
                    پشتیبانی تحصیلی، برنامه‌ریزی درسی، سامانه آموزش مجازی و کلاس
                    آنلاین، سامانه ازمون انلاین، ابزارهای کمک آموزشی و امکانات
                    دیگه وجود داره. فراهوش با ارائه این خدمات در تلاشه تا سطح
                    کیفی آموزش رو در مدارس کشور بالا ببره. اینها فقط بخشی از
                    امکانات مدرسه فراهوش هست که در قالب اپلیکیشن و سامانه مدرسه
                    فراهوش ارائه شده و قابل استفاده برای دانش آموزان و مدارسه.
                    برای استفاده از خدمات کافیه تا وارد صفحه طرح رایگان بشید.
                    این طرح به طور خاص برای مدارس در نظر گرفته شده و با پشتیبانی
                    قوی مجموعه همراهه. آماده برای امتحان!
                  </Typography>
                </Box>
                <Box className={styles.home_section_2_link}>
                  <Link to="/School">
                    <Button>ورود به سامانه</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Stack>
        </ZPattern>
      </Box>
      <Box className={styles.section_2_pic}>
        <img className={styles.pic1} src={MainSection2Pic} alt="" />
      </Box>
      <Box className={styles.section_2_pic_mob}>
        <img className={styles.pic1_mob} src={MainSection2PicMob} alt="" />
      </Box>
    </Box>
  );
};

export default MainSection2;
