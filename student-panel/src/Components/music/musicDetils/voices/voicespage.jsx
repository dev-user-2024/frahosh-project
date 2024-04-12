import React, { Component } from "react";
import styles from "./voicespage.module.css";
import Recommended from "./recommended/recommended";
import Player from "./player/player";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./slider.css";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../../../confing/confing";
import { useParams } from "react-router-dom";
function VoicePage() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${serverApi}sounds/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        // setList(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Box p={2} className={styles.container}>
      <Box mb={3} sx={{ width: "100%" }}>
        {loading && <LinearProgress />}
      </Box>
      <div className={styles.topsec}>
        <div className={styles.right}>
          <Player />
        </div>
        <div className={styles.left}>
          <Typography
            color={theme.palette.primary.main}
            className={styles.title}
            mb={2}
            fontWeight={600}
          >
            از همین آلبوم
          </Typography>{" "}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            mousewheel={true}
            breakpoints={{
              // when window width is >= 200px
              200: {
                slidesPerView: 1.2,
                spaceBetween: 0,
              },
              // when window width is >= 500px
              500: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1050: {
                slidesPerView: 6,
                spaceBetween: 0,
                direction: "vertical",
              },
            }}
          >
            <SwiperSlide>
              <Recommended />
            </SwiperSlide>
            <SwiperSlide>
              <Recommended />
            </SwiperSlide>
            <SwiperSlide>
              <Recommended />
            </SwiperSlide>
            <SwiperSlide>
              <Recommended />
            </SwiperSlide>
            <SwiperSlide>
              <Recommended />
            </SwiperSlide>
            <SwiperSlide>
              <Recommended />
            </SwiperSlide>
            <SwiperSlide>
              <Recommended />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.discreption}>
        <Typography
          my={2}
          textAlign="left"
          color={theme.palette.primary.main}
          variant="h6"
          fontWeight={700}
        >
          توضیحات
        </Typography>
        <div className={styles.box}>
          <p className={styles.textlow}>مریم نادریان- مدیر مدرسه</p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
    </Box>
  );
}

export default VoicePage;
