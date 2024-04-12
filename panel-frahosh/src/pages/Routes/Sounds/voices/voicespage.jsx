import React, { Component } from "react";
import styles from "./voicespage.module.css";
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
      <div className={styles.discreption}>
        <h3 className={styles.title}>توضیحات</h3>
            <div className={styles.box}>
              <p className={styles.textlow}>مریم نادریان- مدیر مدرسه</p>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </div>
      </div>
    </div>
  );
}

export default Musicpage;
