import bannerleft from "../../../assets/image/testpage-sec2left.png";
import bannerright from "../../../assets/image/testpage-sec2right.png";
import tick from "../../../assets/image/tick.svg";
import styles from "./section2.module.css";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Testpagesec2 = () => {
  const theme = useTheme();
  return (
    <div className={styles.Section1}>
      <div className={styles.secright}>
        <img className={styles.banner} src={bannerright} alt="پادکست فراهوش" />
      </div>
      <div className={styles.secmid}>
        <div className={styles.textdiv}>
          <img className={styles.tick} src={tick} alt="tick" />
          <Typography
            sx={{
              fontWeight: "500",
              fontFamily: "IRANSansX",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              direction: "rtl",
              fontSize: "15px",
              lineHeight: "80px",
            }}
            className="z-pattern-text-content"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </Typography>
        </div>
        <div className={styles.textdiv}>
          <img className={styles.tick} src={tick} alt="tick" />
          <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "IRANSansX",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
            fontSize: "15px",
            lineHeight: "80px",
          }}
          className="z-pattern-text-content"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده
        </Typography>
        </div>
        <div className={styles.textdiv}>
          <img className={styles.tick} src={tick} alt="tick" />
          <Typography
            sx={{
              fontWeight: "500",
              fontFamily: "IRANSansX",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              direction: "rtl",
              fontSize: "15px",
              lineHeight: "80px",
            }}
            className="z-pattern-text-content"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </Typography>
        </div>
        <div className={styles.textdiv}>
          <img className={styles.tick} src={tick} alt="tick" />
          <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "IRANSansX",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
            fontSize: "15px",
            lineHeight: "80px",
          }}
          className="z-pattern-text-content"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده
        </Typography>
        </div>
        <div className={styles.textdiv}>
          <img className={styles.tick} src={tick} alt="tick" />
          <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "IRANSansX",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
            fontSize: "15px",
            lineHeight: "80px",
          }}
          className="z-pattern-text-content"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده
        </Typography>
        </div>
        <div className={styles.textdiv}>
          <img className={styles.tick} src={tick} alt="tick" />
          <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "IRANSansX",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
            fontSize: "15px",
            lineHeight: "80px",
          }}
          className="z-pattern-text-content"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده
        </Typography>
        </div>
      </div>
      <div className={styles.secleft}>
        <img className={styles.banner} src={bannerleft} alt="پادکست فراهوش" />
      </div>
    </div>
  );
};
export default Testpagesec2;
