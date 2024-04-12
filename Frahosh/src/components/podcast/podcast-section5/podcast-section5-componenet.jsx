import styles from "./podcast-section5.module.css";
import Person2 from "../../../assets/image/podcast-hami2.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "../../Slider/slider.css";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { serverApi } from "../../../confing/confing";
import { useEffect, useState } from "react";
import axios from "axios";

const PodcastSection5 = () => {
  const theme = useTheme();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data} = await axios.get(`${serverApi}supporter`);
        console.log("s",data.data);
        setList(data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
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
        حامیان قبلی ما
      </Typography>{" "}
      <div className={styles.layer}>
        <div className={styles.box}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            breakpoints={{
              // when window width is >= 640px
              200: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              650: {
                slidesPerView: 3.6,
                spaceBetween: 30,
              },
              1050: {
                slidesPerView: 4.6,
                spaceBetween: 30,
              },
            }}
          >
            {
            list.map((i,index)=> (
                <SwiperSlide key={index}>
                <div className="slider-item" style={{padding:"15px"}}>
                <img src={i.logo} className={styles.logo} alt="person" />
                <Typography 
                sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                   width:"100%",
                   textAlign:"right"
                  }}
                >
                {i.name}
                </Typography>
                </div>
            </SwiperSlide>
            ))
        }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection5;
