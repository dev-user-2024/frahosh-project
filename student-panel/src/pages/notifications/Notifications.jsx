import { Box, Typography } from "@mui/material";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <Box
      mb={4}
        p={2}
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          color: "text.secondary",
          borderLeft:"5px solid #1D9BF0"
        }}
      >
        <Typography color="#6C6C6C" sx={{ mb: 3 }}>
          مدیر مدرسه : &nbsp;&nbsp; مریم مرادی &nbsp;&nbsp; 22مرداد 1402
        </Typography>
        <Typography sx={{ mb: 3 }}>
          عنوان: ثبت‌نام مسابقات استانی شطرنج
        </Typography>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </Typography>
      </Box>
      <Box
      mb={4}
        p={2}
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          color: "text.secondary",
          borderLeft:"5px solid #1D9BF0"
        }}
      >
        <Typography color="#6C6C6C" sx={{ mb: 3 }}>
          مدیر مدرسه : &nbsp;&nbsp; مریم مرادی &nbsp;&nbsp; 22مرداد 1402
        </Typography>
        <Typography sx={{ mb: 3 }}>
          عنوان: ثبت‌نام مسابقات استانی شطرنج
        </Typography>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </Typography>
      </Box>
    </div>
  );
};

export default Notifications;
