import styles from "./podcast-section2.module.css";
import Person1 from "../../../assets/image/Rectangle 60.png";
import Person2 from "../../../assets/image/Rectangle 60 (1).png";
import Person3 from "../../../assets/image/Rectangle 60 (2).png";
import Person4 from "../../../assets/image/Rectangle 60 (3).png";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "../../Slider/slider.css";
import "swiper/css/navigation";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { serverApi } from "../../../confing/confing"
import { useEffect, useState } from "react"
import axios from "axios";

const PodcastSection2 = () => {
  const theme = useTheme();
  const [list,setList] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}mySweetPodcast/getGuests/1`);
        // console.log("p", data);
        setList([])
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Box className={styles.container}>
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
      <Box className={styles.box}>
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            200: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            400: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <Box className="slider-item">
              <img src={Person1} alt="person" />
              <p>میترا حسنی</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box className="slider-item">
              <img src={Person2} alt="person" />
              <p>رضا اکبری</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box className="slider-item">
              <img src={Person3} alt="person" />
              <p>محمد حسنی</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box className="slider-item">
              <img src={Person4} alt="person" />
              <p>محمد خلجی</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box className="slider-item">
              <img src={Person2} alt="person" />
              <p>امیر حسن محمدی</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box className="slider-item">
              <img src={Person3} alt="person" />
              <p>میترا حسنی</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Box className="slider-item">
              <img src={Person4} alt="person" />
              <p>میترا حسنی</p>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default PodcastSection2;
