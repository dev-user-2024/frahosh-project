import { Stack } from "@mui/material";
import React from "react";
import Button from "../../buttons/button.component";
import ZPattern from "../../z-pattern/z-pattern.component";
import ArrowLeft from "../../../assets/icons/arrow-left-white.png";
import pic1 from "../../../assets/image/group 840.png";
import styles from "./section1.style.module.css";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
const Section1 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.sec1_bg}>
      <Box className={styles.sec1}>
        <ZPattern zPatternType={"z-pattern-rtl"}>
          <Stack
            direction={{ md: "column", lg: "row" }}
            spacing={3}
            justifyContent="space-around"
            alignItems="center"
          >
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
            با برنامه‌ریزی فراهوش، موفقیت تو مُشتته!
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
              className='z-pattern-text-content'
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            </Typography>
              <Button>
                ورود به سامانه
                <img src={ArrowLeft} alt="" />
              </Button>
            </Box>
            <Box className="z-pattern-image">
              <img className={styles.img} src={pic1} alt="" />
            </Box>
          </Stack>
        </ZPattern>
      </Box>
    </Box>
  );
};

export default Section1;
