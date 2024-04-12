import React, {useEffect ,useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Copyurl from "./share-copyurl/copyurl";
import Like from "./like-button/like";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./gallery.css";
import styles from "./gallery.module.css";
import Child from "../../assests/image/child.png";
import axios from "axios";
import { serverApi , token } from "../../confing/confing";
import { useParams } from "react-router-dom";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { Box, LinearProgress } from "@mui/material";
export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
          const { data } = await axios.get(`${serverApi}galleries/${id}`, {
            headers: { authorization: `Bearer ${token}` },
          });
          console.log(data);
          // setList(data);
        
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="gallery-slidebar">
    <Box mb={3} sx={{ width: "100%" }}>
        {loading && <LinearProgress />}
      </Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        pagination={true}
        modules={[Pagination, FreeMode, Thumbs]}
        className="mySwiper2"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.bar}>
        <div className={styles.row}>
          <div className={styles.left}>
            <Copyurl />
          </div>
          <div className={styles.right}>
            <Like className={styles.like} />
            <div className={styles.images}>
              <img src={Child} alt="دانش آموز" />
              <img src={Child} alt="دانش آموز" />
              <img src={Child} alt="دانش آموز" />
              <img src={Child} alt="دانش آموز" />
            </div>
            <p>+ 52 نفر دیگر این تصویر را پسندیدند</p>
          </div>
        </div>
      </div>
      <div style={{ height: "150px", marginBottom: "50px" }}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          height={200}
        >
          <SwiperSlide>
            <img
              height={200}
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt=""
              height="150px"
              src="https://swiperjs.com/demos/images/nature-10.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
