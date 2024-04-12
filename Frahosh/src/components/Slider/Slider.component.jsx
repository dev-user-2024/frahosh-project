import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic1 from "../../assets/image/Group 468.png";
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './slider.css'

const SLIDER = ({ children, buttonType, ...otherProps }) => {
        console.log(children)
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            breakpoints={{
                300 : {
                    width:300,
                    slidesPerView: 1.6,
                    spaceBetween: 10,

                },
                400: {
                    width:400,
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                650: {
                    width:650,
                    slidesPerView: 3.6,
                    spaceBetween: 30,
                },
                1050: {
                    width : 1050,
                    slidesPerView: 4.6,
                    spaceBetween: 20,
                }}}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
            <SwiperSlide> <div className='slider-item'><img src={pic1} alt="" /></div></SwiperSlide>
        </Swiper>
    );
}

export default SLIDER;