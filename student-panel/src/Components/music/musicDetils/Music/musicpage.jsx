import React from "react";
import styles from "./musicpage.module.css";
import Comment from "./comments/best-books-section4-comment-list/best-books-section4-comment-list.component";
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
function Musicpage() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const {id}= useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${serverApi}music/${id}`, {
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
    <Box p={2}>
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
          </Typography>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            mousewheel={true}
            breakpoints={{
              // when window width is >= 200px

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
      <Comment />
    </Box>
  );
}

export default Musicpage;
