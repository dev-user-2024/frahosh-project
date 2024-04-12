import { Typography , Box } from "@mui/material";
import React from "react";
import styles from "./section1.styles.module.css";
import pic1 from "../../../assets/image/team.jpg";
import { useTheme } from "@mui/material";

const Section1 = () => {

  const theme = useTheme();


  return (
    <Box className={styles.sec_bg}>
      <Box className={styles.sec_1}>
        <img className={styles.img} alt="" src={pic1} />
        <Typography
        variant="h4"
        mx={2}
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
          m:"20px"
        }}
        className="z-pattern-text-title" 
         >
          کمی بیشتر درباره ما بدانید...
        </Typography>
        <Typography
          sx={{
            fontFamily: "IRANSansX",
            fontSize: { md: "18px" },
            lineHeight: "50px",
            width: { md: "1140px", xs: "100%" },
            textAlign: "center",
            marginTop: "2rem",
            fontWeight: "500",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
          }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </Typography>
      </Box>
      <Box>
        <Typography
        variant="h4"
        mx={2}
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
          m:"20px"
        }}
        className="z-pattern-text-title" 
        >
          هدف ما
        </Typography>
        <Typography
        sx={{
          fontFamily: "IRANSansX",
          fontSize: { md: "18px" },
          lineHeight: "50px",
          width: { md: "1140px", xs: "100%" },
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "500",
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          direction: "rtl",
        }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </Typography>
      </Box>
      <Box>
        <Typography
        variant="h4"
        mx={2}
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
          m:"20px"
        }}
        className="z-pattern-text-title" 
        >
          ارزش‌های ما
        </Typography>
        <Typography
        sx={{
          fontFamily: "IRANSansX",
          fontSize: { md: "18px" },
          lineHeight: "50px",
          width: { md: "1140px", xs: "100%" },
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "500",
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          direction: "rtl",
        }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </Typography>
      </Box>
    </Box>
  );
};

export default Section1;
