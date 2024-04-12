import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/css';
import 'swiper/css/pagination';

// import { element } from 'prop-types';
import { Typography } from '@mui/material';
import styles from './list.style.module.css';

function List() {
  const [coin, setCoin] = useState([
    3, 3, -1, 3, 3, -2,
  ]);
  const changIcon = (num) => {
    if (num > 0) {
      return (
        <div className={styles.addIcon}>
          <AddIcon />
        </div>
      );
    }
    if (num < 0) {
      return (
        <div className={styles.removIcon}>
          <RemoveIcon />
        </div>

      );
    }
  };
  return (
    <Stack>
      <div className="w-full">
        <div className={styles.slider_div1}>
          <h4>
            جزئیات
          </h4>
          <div>
            <Swiper
              className={styles.slider}
              direction="vertical"
            >
              {
                            coin.map((element) => (
                              <SwiperSlide key={"${i}"} className={styles.Slide}>
                                <div className="flex flex-col justify-between items-start h-full w-full">
                                    <div className="flex flex-row align-middle items-start w-full gap-6 justify-between ">
                                        <div className="flex flex-row items-center justify-between align-middle">
                                            <Typography sx={{color: element >0? "#11AA63":"#D50F00" , display:"flex-row", lineHeight:"240%"}}>
                                            {changIcon(element)}
                                            <p className={styles.numberFracoins}> <span>{Math.abs(element)}</span> فراکوین</p>
                                            </Typography>
                                        </div>
                                        <p className={styles.date_time}>ساعت ۲۳:۱۵</p>
                                        <p className={styles.date_time}>۱۵ مرداد ۱۴۰۱</p>
                                    </div>
                                    <div>
                                        <p className={styles.explain}>شرح: ارسال کد دعوت به دوست و فعالسازی موفق</p>
                                 </div>
                                 </div>
                              </SwiperSlide>
                            ))
                        }
            </Swiper>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.slider_div2}>
          <h4>
            تبدیل فراکوین
          </h4>
          <div>
            <Swiper
              className={styles.slider}
              direction="vertical"
            >
              <SwiperSlide className={styles.slider_2}>
                <div className="flex flex-row justify-between align-middle w-full">
                  <p className={styles.titleSlider2}>مشاوره آنلاین</p>
                  <ArrowForwardIcon className={styles.forwardIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slider_2}>
                <div className="flex flex-row justify-between align-middle w-full">
                  <p className={styles.titleSlider2}>مشاوره آنلاین</p>
                  <ArrowForwardIcon className={styles.forwardIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slider_2}>
                <div className="flex flex-row justify-between align-middle w-full">
                  <p className={styles.titleSlider2}>مشاوره آنلاین</p>
                  <ArrowForwardIcon className={styles.forwardIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slider_2}>
                <div className="flex flex-row justify-between align-middle w-full">
                  <p className={styles.titleSlider2}>مشاوره آنلاین</p>
                  <ArrowForwardIcon className={styles.forwardIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slider_2}>
                <div className="flex flex-row justify-between align-middle w-full">
                  <p className={styles.titleSlider2}>مشاوره آنلاین</p>
                  <ArrowForwardIcon className={styles.forwardIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slider_2}>
                <div className="flex flex-row justify-between align-middle w-full">
                  <p className={styles.titleSlider2}>مشاوره آنلاین</p>
                  <ArrowForwardIcon className={styles.forwardIcon} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default List;
