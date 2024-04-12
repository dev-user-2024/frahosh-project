
import React from 'react'
import OurServicesCard from "../../UI/ourServicesCard/OurServicesCard"

import {
    AngularDevelopment,
    ArtificialIntelligence,
    GraphicDesign,
    Mobiledevelopment,
    ReactDevelopment,
    SEOIcon,
    UXUIDesign,
    WebDevelopment,
} from "../../../assets/icons"


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useTranslation } from "react-i18next";

import styles from "./homeSection2.module.css"

const HomeSection2 = () => {
    const { t, i18n } = useTranslation();
    const cards = t('home.services.items', { returnObjects: true });
    const slides = t('home.clients.slides', { returnObjects: true });

    return (
        <div className={styles.homeSection2}>
            <div className={`${styles.homeSection2_who_we_are} ${i18n.language === 'fa' && styles.rtl}`}>
                <h1>
                    {t('home.introduction.title')}
                </h1>
                <p>
                    {t('home.introduction.content')}
                </p>
            </div>

            <div className={styles.homeSection2_our_services}>

                <h3>{t('home.services.title')}</h3>

                <p>
                    {t('home.services.subTitle')}
                </p>

                <div className={styles.homeSection2_our_services_cards}>
                    {
                        cards.map(item => (
                            <OurServicesCard imgSrc={item.imgSrc} title={item.title} color={item.color} />
                        ))
                    }
                </div>

            </div>


            <div className={styles.homeSection2_our_happy_clients}>
                <h3>{t('home.clients.title')}</h3>

                <div className={styles.homeSection2_our_happy_clients_slider}>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay,]}
                        className={`${styles.my_Swiper} mySwiper`}
                        breakpoints={{
                          
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                            },
                            768: {
                              slidesPerView: 3.3,
                              spaceBetween: 40,
                            },
                            1000: {
                                slidesPerView: 4.4,
                                spaceBetween: 40,
                              },
                              
                          }}
                    >
                        {
                            slides.map(item => <SwiperSlide className={styles.swiper_slide}>{item.name}</SwiperSlide>)
                        }
                        
                    </Swiper>
                </div>
                <div className={styles.homeSection2_our_happy_clients_slider}>
                <Swiper
                slidesPerView={2}
                breakpoints={{     
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3.3,
                      spaceBetween: 40,
                    },
                    1000: {
                        slidesPerView: 4.4,
                        spaceBetween: 40,
                      },
                      
                  }}
                    spaceBetween={30}
                    centeredSlides={false}
                    dir='rtl'
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay,]}
                    className={`${styles.my_Swiper} mySwiper`}
                >
                    {
                        slides.map(item => <SwiperSlide className={styles.swiper_slide}>{item.name}</SwiperSlide>)
                    }
                    
                </Swiper>
            </div>
            
            </div>
        
        </div>
    )
}

export default HomeSection2