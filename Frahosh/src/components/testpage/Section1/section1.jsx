import styles from "./section1.module.css";
import Firstpic from "../../../assets/image/testpage-sec1.png";
import Stack from "@mui/material/Stack";
import ZPattern from "../../z-pattern/z-pattern.component";
import Button from "../../buttons/button.component";
import ArrowLeftWhite from "../../../assets/icons/arrow-left-white.png";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
const Questionsec1 = () => {
    const theme = useTheme();

  return (
    <Box className={styles.sectionsContainer}>
      <ZPattern zPatternType="zPatternLtr">
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="space-around"
          alignItems="center"
        >
          <Box className="z-pattern-image">
            <img className={styles.imagedit} alt="" src={Firstpic} />
          </Box>
          <Box className="z-pattern-text">
            <Typography
            variant="h4"
            mx={2}
            sx={{
              fontWeight: "600",
              fontFamily: "Rokh-Bold",
              color:
              theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
              direction: "rtl",
              width:"100%"
            }}
            className="z-pattern-text-title"
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
            className="z-pattern-text-content"
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

            <Button buttonType="btnLoginBgBlue" type="button">
              <img src={ArrowLeftWhite} alt="" />
              ورود به سامانه
            </Button>
          </Box>
        </Stack>
      </ZPattern>
    </Box>
  );
};

export default Questionsec1;
