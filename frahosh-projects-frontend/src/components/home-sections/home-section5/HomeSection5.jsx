import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./homeSection5.module.css";
import { Navigation } from "swiper";
import img1 from "../../../assets/images/section5Img.jpg";
import { useTranslation } from "react-i18next";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const HomeSection5 = () => {
  const { t, i18n } = useTranslation();
  const items = t("home.customerFeedback.items", { returnObjects: true });
  const swiperParams = {
    navigation: {
      nextEl: ".custom-next-button", // انتخاب المان برای دکمه بعدی
      prevEl: ".custom-prev-button", // انتخاب المان برای دکمه قبلی
    },
  };

  return (
    <div
      className={`${styles.homeSection5} ${
        i18n.language === "fa" && styles.rtl
      }`}
    >
      <div className={styles.homeSection5_title}>
        <h1>{t("home.customerFeedback.title")}</h1>
      </div>
      <div className={styles.homeSection5_slider}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          className={`${styles.my_Swiper} `}
          {...swiperParams}
        >
          {items.map((i, index) => (
            <SwiperSlide className={styles.swiper_slide}>
              <div
                className={`${styles.homeSection5_Content} ${
                  i18n.language === "fa" && styles.rtl
                }`}
              >
                <div className={styles.homeSection5_Content_text}>
                  <h2>{i.customer}</h2>
                  <p>{i.content}</p>
                  <p>{i.date}</p>
                </div>
                <div className={styles.homeSection5_Content_image}>
                  <img width="100%" src={img1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
          className={styles.slide_Button}
          >
            <button className="custom-next-button">
              <ArrowForwardIosIcon />
            </button>
            <button className="custom-prev-button">
              <ArrowBackIosIcon />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSection5;
