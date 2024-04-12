import styles from "./Counseling-third-sec.module.css";
import Firstpic from "../../../assets/image/counseling sec3.png";
import Stack from "@mui/material/Stack";
import ZPattern from "../../z-pattern/z-pattern.component";
import Button from "../../buttons/button.component";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Counselingthirdsec = () => {
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
            <img alt="" src={Firstpic} />
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
              className="z-pattern-text-title"
            >
              مشاوره برای تمام سطوح تحصیلی
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
          </Box>
        </Stack>
      </ZPattern>
    </Box>
  );
};

export default Counselingthirdsec;
