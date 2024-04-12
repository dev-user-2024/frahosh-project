import styles from "./podcast-section3.module.css";
import Person2 from "../../../assets/image/podcast-(1).png";
import Person3 from "../../../assets/image/podcast-(2).png";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "../../Slider/slider.css";
import "swiper/css/navigation";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { serverApi } from "../../../confing/confing";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PodcastSection3 = () => {
  const theme = useTheme();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${serverApi}mySweetPodcast/getMostPopular`
        );
        // console.log("podcast",data.data);
        setList(data.data);
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
        محبوب ترین پادکست ها
      </Typography>
      <div className={styles.box}>
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            200: {
              slidesPerView: 2,
              spaceBetween: 110,
            },
            // when window width is >= 768px
            650: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {list.map((i, index) => (
            <SwiperSlide key={index}>
             <Link to={`/podcast/${i.id}`}>
             <div className="slider-item">
             <img src={i.image} className={styles.img} alt="person" />
             <Typography
               sx={{
                 color: theme.palette.mode === "dark" ? "#fff" : "#000",
                 width: "100%",
               }}
             >
               {i.Fname_Lname}
             </Typography>
           </div>
             </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PodcastSection3;
