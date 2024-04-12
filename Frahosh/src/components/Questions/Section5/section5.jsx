import styles from "./section5.module.css";
import picleft from "../../../assets/image/question-sec5l.png";
import picmid from "../../../assets/image/question-sec5m.png";
import picright from "../../../assets/image/question-sec5r.png";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
const Questionsec5 = () => {
  const theme = useTheme();
  return (
    <div className={styles.sectionsContainer}>
      <div className={styles.container}>
        <div className={styles.box}>
          <img alt="" className={styles.imagedit} src={picleft} />
          <Link to=''>
          <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
          className={styles.text}
        >
        ورود به صفحه بانک تست
        </Typography>
          </Link>
        </div>
        <img alt="" className={styles.imagedit} src={picmid} />
        <div className={styles.box}>
          <img alt="" className={styles.imagedit} src={picright} />
         <Link to=''>
         <Typography
         sx={{
           color: theme.palette.mode === "dark" ? "#fff" : "#000",
         }}
         className={styles.text}
       >
         ورود به صفحه بانک سوال
       </Typography>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Questionsec5;
