import { Fragment } from "react";
import Navigation2 from "../../components/navigation-2/navigation-2.component";
import Careersaccordion from "../../components/careers-accordion/careers-accordion";
import Footer from "../../components/footer/footer";
import styles from "./careers.module.css";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";

const Career = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <Navigation2 />
      <div className={styles.sectionsContainer}>
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
        جای شما در تیم فراهوش خالیست...
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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت
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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت
        </Typography>
      </div>
      <Careersaccordion />
      <Footer />
    </Fragment>
  );
};

export default Career;
