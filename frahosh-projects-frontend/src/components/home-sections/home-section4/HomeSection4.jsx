import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/images/aboutImg1.jpg";
import img2 from "../../../assets/images/littleAboutUs4.png";
import img3 from "../../../assets/images/aboutImg3.jpg";
import img4 from "../../../assets/images/littleAboutUs5.png";
import img5 from "../../../assets/images/aboutImg5.jpg";

import styles from "./HomeSection4.module.css";
import { useTranslation } from "react-i18next";

const HomeSection4 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`${styles.homeSection4} ${
        i18n.language === "fa" && styles.rtl
      }`}
    >
      <div
        className={`${styles.homeSection4_Content} ${
          i18n.language === "fa" && styles.homeSection4_Content2
        }`}
      >
        <div
          className={`${styles.homeSection4_Content_image} ${
            i18n.language === "fa" && styles.homeSection4_Content_image2
          }`}
        >
          {/* <img src={img1} alt="" /> */}
          <span>
            <p>50+</p>
            <p>{t("home.aboutUs.teamMembers")}</p>
          </span>
          <span>
            <p>6</p>
            <p>{t("home.aboutUs.experience")}</p>
          </span>
        </div>

        <div className={styles.homeSection4_Content_text}>
          <h2 className={`${i18n.language === "fa" && styles.rtl}`}>
            {t("home.aboutUs.title")}
          </h2>

          <p className={`${i18n.language === "fa" && styles.rtl}`}>
            {t("home.aboutUs.content")}
          </p>
        </div>
      </div>

      <div className={styles.HomeSection4_slider}>
        <Swiper
         
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className={`${styles.my_Swiper} mySwiper`}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <img src={img1} alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_slide}>
            <img src={img2} alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_slide}>
            <img src={img3} alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_slide}>
            <img src={img4} alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_slide}>
            <img src={img5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSection4;
