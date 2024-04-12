import { Stack } from "@mui/system";
import pic1 from "../../assests/image/Rectangle 211 (1).png";
import Slider from "../slider/slider";
import styles from "./coinssection1.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import PositiveIcon from "../../assests/icons/Group 258.png"
import Video from "./video/videoSection";

const Coinsection1 = () => {

    return (
        <div>
            <Stack direction={"row"} justifyContent={"center"}
            alignItems={"flex-start"}>
                <Stack>
                    <div className="w-full">
                        <div className={styles.slider_div}>
                            <h4>
                                جزئیات
                            </h4>
                            <div >
                            <Swiper className={styles.slider}
                            direction={"vertical"}>
                                <SwiperSlide className={styles.Slide}>
                                    <div className="flex flex-col justify-between items-start h-full">
                                        <div className="flex flex-row align-middle items-start w-full gap-6 justify-between ">
                                            <div className="flex flex-row items-start align-middle">
                                                <AddIcon />
                                                <p className={styles.numberFracoins}>3 فراکوین</p>
                                            </div>
                                            <p className={styles.date_time}>ساعت ۲۳:۱۵</p>
                                            <p className={styles.date_time}>۱۵ مرداد ۱۴۰۱</p>
                                        </div>
                                        <div>
                                            <p className={styles.explain}>شرح: ارسال کد دعوت به دوست و فعالسازی موفق</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                    <div className="flex flex-col justify-between items-start h-full">
                                        <div className="flex flex-row  items-start w-full align-middle gap-6 justify-between">
                                            <div className="flex flex-row items-start align-middle">
                                                <RemoveIcon />
                                                <p className={styles.numberFracoins}>3 فراکوین</p>
                                            </div>
                                            <p className={styles.date_time}>ساعت ۲۳:۱۵</p>
                                            <p className={styles.date_time}>۱۵ مرداد ۱۴۰۱</p>
                                        </div>
                                        <div> <p className={styles.explain}>شرح: ارسال کد دعوت به دوست و فعالسازی موفق</p></div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                    <div className="flex flex-col justify-between items-start h-full">
                                        <div className="flex flex-row  items-start w-full align-middle gap-6 justify-between">
                                            <div className="flex flex-row items-start align-middle">
                                            <AddIcon />
                                                <p className={styles.numberFracoins}>3 فراکوین</p>
                                            </div>
                                            <p className={styles.date_time}>ساعت ۲۳:۱۵</p>
                                            <p className={styles.date_time}>۱۵ مرداد ۱۴۰۱</p>
                                        </div>
                                        <div> <p className={styles.explain}>شرح: ارسال کد دعوت به دوست و فعالسازی موفق</p></div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                    <div className="flex flex-col justify-between items-start h-full">
                                        <div className="flex flex-row  items-start w-full align-middle gap-6 justify-between">
                                            <div className="flex flex-row items-start align-middle">
                                            <AddIcon />
                                                <p className={styles.numberFracoins}>3 فراکوین</p>
                                            </div>
                                            <p className={styles.date_time}>ساعت ۲۳:۱۵</p>
                                            <p className={styles.date_time}>۱۵ مرداد ۱۴۰۱</p>
                                        </div>
                                        <div> <p className={styles.explain}>شرح: ارسال کد دعوت به دوست و فعالسازی موفق</p></div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.slider_div}>
                            <h4>
                                تبدیل فراکوین
                            </h4>
                            <div>
                            <Swiper className={styles.slider}
      direction={"vertical"}>
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
                <Stack className="mr-10" direction={"column"} justifyContent={"flex-start"} alignContent={"center"}>
                <div className={styles.fracoins_show}>
                <div className="flex flex-row items-center h-full">
                        <div className="w-2/4">
                        <p className="flex items-center justify-center w-full text-white"><span className="text-3xl">12</span> عدد فراکوین  بدست آوردی</p>
                        </div>
                        <div className="flex w-2/4 h-full items-center" > 
                        <img width={253} height={159} alt="" src={pic1}  />
                        </div>
                    </div>
                </div>
                    <div>
                    <Video />
                    </div>
                </Stack>
            </Stack>
        </div>
      );
}

export default Coinsection1;
