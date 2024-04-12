import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Link } from "react-router-dom";
const ConsultantList = ({ list }) => {
  return (
    <div>
      <Box mt={2} height={200}>
        <Swiper slidesPerView={6} spaceBetween={20} className="mySwiper">
          {list.map((i, index) => (
            <SwiperSlide key={index}>
             <Link to={`${i.id}`}>
             <Box
             px={2}
             textAlign="center"
             display="flex"
             flexDirection="column"
             alignItems="center"
           >
             <div style={{ borderRadius: "50%" , width:"70px" , height:"70px"}}>
               <img
                 alt="profilephoto"
                 src={i.avatar}
                 width="70px"
                 height="70px"
                 style={{ borderRadius: "50%" }}
               />
             </div>
             <Typography sx={{ my: 2 }}>
               {i.Fname} {i.Lname}
             </Typography>
           </Box>
             </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default ConsultantList;
