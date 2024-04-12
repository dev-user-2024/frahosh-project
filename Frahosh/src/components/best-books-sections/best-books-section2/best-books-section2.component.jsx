import styles from "./best-books-section2.styles.module.css";
import Guest1 from "../../../assets/image/guest1.png";
import Guest2 from "../../../assets/image/guest2.png";
import Host1 from "../../../assets/image/host1.png";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { serverApi } from "../../../confing/confing"
import axios from "axios";
import { useParams } from "react-router-dom";

const BestBooksSection2 = () => {
  const theme = useTheme();
  const [list,setList] = useState([])
  const{id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}mySweetPodcast/getGuests/${id}`);
        console.log("p", data);
        setList(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.bestBooksSection2Container}>
      <div className={styles.bestBooksSection2Guests}>
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
          مهمانان ما
        </Typography>
        <div className={styles.bestBooksSection2GuestsInfo}>
          {/* <Person name="محمدحسین حسن‌زاده" imgSrc={Guest1} />
                    <Person name="محمدحسین حسن‌زاده" imgSrc={Guest2} /> */}
          {
            list.map((i,index)=> (
              <div>
              <img width={100} name="محمدحسین حسن‌زاده" src={i.image} alt="مهمان دوم" />
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.bestBooksSection2Host}>
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
          میزبان
        </Typography>
        <div className={styles.bestBooksSection2HostInfo}>
          <img name="محمدحسین حسن‌زاده" src={Host1} alt="میزبان اول" />
        </div>
      </div>
    </div>
  );
};

export default BestBooksSection2;
