import styles from "./best-books-section1.styles.module.css";
import BestBookSection1Pic from "../../../assets/image/best-book-section1-pic.png";
import LikeButtonComponent from "../like-button/like-button.component";
import ListenerCounter from "../listener-counter/listener-counter.component";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const BestBooksSection1 = ({ data }) => {
  const theme = useTheme();

  return (
    <div className={styles.bestBooksSection1Container}>
      <div className={styles.bestBooksSection1Media}>
        <img src={data.image} alt="" />
        <div className={styles.bestBooksSection1PicInfo}>
          <ListenerCounter views={data.views} className={styles.bestBooksSection1PicView} />
          <LikeButtonComponent likes={data.likes} className={styles.bestBooksSection1PicLike}>
            like
          </LikeButtonComponent>
        </div>
      </div>
      <div className={styles.bestBooksSection1Content}>
        <Typography
          variant="h1"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
          }}
          className="z-pattern-text-title"
        >
          {data.Fname_Lname}
        </Typography>
        <Typography
          variant="h6"
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
          {data.date_podcast}
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
          {data.description}
        </Typography>
      </div>
    </div>
  );
};

export default BestBooksSection1;
