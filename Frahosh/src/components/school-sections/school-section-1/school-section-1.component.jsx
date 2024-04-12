import Section1pic1 from "../../../assets/image/Group 446.png";
import Button from "../../buttons/button.component";
import ArrowLeftWhite from "../../../assets/icons/arrow-left-white.png";
import ZPattern from "../../z-pattern/z-pattern.component";
import { Stack } from "@mui/system";
import styles from "./school-section-1.module.css";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
const SchoolSection1 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.section1}>
      <Box className={styles.section1 - 1}>
        <ZPattern zPatternType="zPatternLtr">
          <Stack
            direction={{ md: "column", lg: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className="z-pattern-image">
              <img src={Section1pic1} alt="" />
            </Box>
            <Box className="z-pattern-text">
              <Typography
                variant="h4"
                mx={2}
                sx={{
                  fontWeight: "600",
                  fontFamily: "Rokh-Bold",
                  color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
                  direction: "rtl",
                }}
                className={styles.title}
              >
                سامانه مدرسه فراهوش
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
              className={styles.text}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
              </Typography>

              <Button buttonType="btnLoginBgBlue" type="button">
                <img src={ArrowLeftWhite} alt="" />
                ورود به سامانه
              </Button>
            </Box>
          </Stack>
        </ZPattern>
      </Box>
    </Box>
  );
};

export default SchoolSection1;
