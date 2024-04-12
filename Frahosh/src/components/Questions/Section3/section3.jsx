import styles from "./section3.module.css";
import Firstpic from "../../../assets/image/question-sec3.png";
import Stack from "@mui/material/Stack";
import ZPattern from "../../z-pattern/z-pattern.component";
import Button from "../../buttons/button.component";
import ArrowLeftWhite from "../../../assets/icons/arrow-left-white.png";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";

const Questionsec3 = () => {
  const theme = useTheme();
  return (
    <div className={styles.sectionsContainer}>
      <ZPattern zPatternType="zPatternRtl">
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <div className="z-pattern-image">
            <img className={styles.imagedit} src={Firstpic} alt="pic" />
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
              className="z-pattern-text-title"
            >
              چرا نمونه سوالات فراهوش؟
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
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            </Typography>

            <Button buttonType="btnLoginBgBlue" type="button">
              ورود به سامانه
              <img src={ArrowLeftWhite} alt="" />
            </Button>
          </div>
        </Stack>
      </ZPattern>
    </div>
  );
};

export default Questionsec3;
