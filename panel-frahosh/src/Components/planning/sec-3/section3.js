import { Typography } from "@mui/material";
import React from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./section3.styles.module.css";
import Button from "../../buttons/button.component";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Section3 = () => {
    return ( 
        <div className={styles.bg_sec}>
            <div className="flex flex-col items-end  p-5">
            <Button>
            <AddOutlinedIcon />
                <Typography> دلنوشته جدید</Typography>
            </Button>
            <div className="  w-full mt-6">
            <Swiper className={styles.slider}
                            direction={"vertical"}>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}> 
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}> 
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.Slide}>
            <div className={styles.card}>
                <Typography> 20 مرداد 1401</Typography>
                <ArrowBackOutlinedIcon />             
            </div>
            </SwiperSlide>
            </Swiper>
            </div>
            </div>
        </div>
     );
}
 
export default Section3;