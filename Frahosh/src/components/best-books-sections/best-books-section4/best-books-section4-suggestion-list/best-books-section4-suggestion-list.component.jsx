import BestBooksSection4Suggestion from "../best-books-section4-suggestion/best-books-section4-suggestion.component";
import styles from "./best-books-section4-suggestion-list.styles.module.css";
import img1 from "../../../../assets/image/best-book-sug.png";

//slider import
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Navigation, Pagination, A11y } from "swiper";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

const BestBooksSection4SuggestionList = () => {

    const theme = useTheme();

  const suggestionList = [
    {
      id: 1,
      name: "محمد علی‌پور",
      degree: "رتبه یک ریاضی",
      imgSrc: img1,
    },
    {
      id: 2,
      name: "محمد علی‌پور",
      degree: "رتبه یک ریاضی",
      imgSrc: img1,
    },
    {
      id: 2,
      name: "محمد علی‌پور",
      degree: "رتبه یک ریاضی",
      imgSrc: img1,
    },
    {
      id: 2,
      name: "محمد علی‌پور",
      degree: "رتبه یک ریاضی",
      imgSrc: img1,
    },
  ];

  return (
    <div className={styles.bestBooksSection4Suggestion}>
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
          پیشنهاد ما
        </Typography>

      <div className={styles.bestBooksSection4SuggestionSection}>
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, Pagination, A11y, FreeMode]}
            freeMode={true}
            grabCursor={true}
            className="mySwiper"
            breakpoints={{
              0: {
                direction: "horizontal",
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                direction: "horizontal",
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                direction: "vertical",
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <BestBooksSection4Suggestion
                id={suggestionList[0].id}
                name={suggestionList[0].name}
                degree={suggestionList[0].degree}
                imgSrc={suggestionList[0].imgSrc}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BestBooksSection4Suggestion
                id={suggestionList[0].id}
                name={suggestionList[0].name}
                degree={suggestionList[0].degree}
                imgSrc={suggestionList[0].imgSrc}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BestBooksSection4Suggestion
                id={suggestionList[0].id}
                name={suggestionList[0].name}
                degree={suggestionList[0].degree}
                imgSrc={suggestionList[0].imgSrc}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestBooksSection4SuggestionList;
