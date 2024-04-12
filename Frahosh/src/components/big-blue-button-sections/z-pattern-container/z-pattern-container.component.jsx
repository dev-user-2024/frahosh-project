import ZPattern from "../../z-pattern/z-pattern.component";
import ArrowLeftWhite from "../../../assets/icons/arrow-left-white.png";
import Button from "../../buttons/button.component";
import BigBlueButtonLaptop from "../../../assets/image/big-blue-button-laptop.png";
import BigBlueButtonPhone from "../../../assets/image/big-blue-button-phone.png";
import styles from "./z-pattern-container.styles.module.css";
import Stack from "@mui/material/Stack";
import { Typography, Box } from "@mui/material";
import {useTheme} from "@mui/material";

const BigBluseButtonZPatternContainer = () => {
  const theme = useTheme();

  return (
    <div className={styles.zPatternContainer}>
      <ZPattern zPatternType="zPatternLtr">
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="z-pattern-image">
            <img src={BigBlueButtonLaptop} alt="" />
          </div>
          <div className="z-pattern-text">
            <Typography
              variant="h4"
              mx={2}
              sx={{
                fontWeight: "600",
                fontFamily: "Rokh-Bold",
                color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
                direction: "rtl",
              }}
              className="z-pattern-text"
            >
              سامانه بیگ بلو باتن
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
              className="z-pattern-content"
            >
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
          </div>
        </Stack>
      </ZPattern>

      <ZPattern zPatternType="zPatternRtl">
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="z-pattern-image">
            {/* <BigBlueButtonPhone className="big-blue-button-phone-img" /> */}
            <img src={BigBlueButtonPhone} alt="" />
          </div>
          <div className="z-pattern-text">
            <Typography
            variant="h4"
            mx={2}
            sx={{
              fontWeight: "600",
              fontFamily: "Rokh-Bold",
              color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
              direction: "rtl",
              width:"100%"
            }}
            className="z-pattern-text"
          >
          همین حالا جلسه آنلاین تشکیل بده
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
            className="z-pattern-content"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
            جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
          </Typography>

            <Button buttonType="btnLoginBgBlue" type="button">
              ورود به سامانه
            </Button>
          </div>
        </Stack>
      </ZPattern>
    </div>
  );
};

export default BigBluseButtonZPatternContainer;
