import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./style.css";

const TopStudents = () => {
    return (
        <div>
        <Box mt={4} height={200} >
        <Typography
          sx={{ mb: 2 }}
          variant="h6"
          color="text.primary"
          fontWeight={700}
        >
          دانش آموزان برتر
        </Typography>
        <Swiper
          slidesPerView={6}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
            <SwiperSlide>
            <Box
            px={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: "blue" ,mb:2 }}>N</Avatar>
              <Typography sx={{mb:2}}>علیرضا قربانی</Typography>
              <Typography>نفر اول مسابقات استانی حفظ قرآن </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
        </div>
    );
};

export default TopStudents;