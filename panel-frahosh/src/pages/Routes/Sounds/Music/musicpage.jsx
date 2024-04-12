import React, { Component } from "react";
import styles from "./musicpage.module.css";
import Comment from "./comments/best-books-section4-comment-list/best-books-section4-comment-list.component";
import Recommended from "./recommended/recommended";
import Player from "./player/player";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './slider.css'

function Musicpage() {
  return (
    <div className={styles.container}>
      <div className={styles.topsec}>
        <div className={styles.right}>
          <Player />
        </div>
        <div className={styles.left}>
          <h4 className={styles.title}>از همین آلبوم</h4>
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
                direction: 'vertical',
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
    </div>
  );
}

export default Musicpage;
