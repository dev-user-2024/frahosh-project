import React from "react";
import { Box, Typography, Button } from "@mui/material";
import img1 from "../../assests/image/Pose 09 1.png";
import img2 from "../../assests/image/01 4.png";

const TelegramBot = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight='75vh'
      mt={2}
    >
      <Box display="flex">
        <img alt="" src={img1} />
        <img alt="" src={img2} />
      </Box>
      <Typography fontWeight={600}>
        می‌تونی سوالاتت رو از راه تلگرام بپرسی و پاسخت رو از ربات فراهوش بگیری
      </Typography>
      <Button
        sx={{ mr: "5px", backgroundColor: "#1D9BF0",mt:"20px" }}
        variant="contained"
      >
        ورود به ربات تلگرام
      </Button>
    </Box>
  );
};

export default TelegramBot;
