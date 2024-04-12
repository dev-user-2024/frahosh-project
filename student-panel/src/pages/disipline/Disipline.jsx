import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./dicipline.module.css";

const Disipline = () => {
  return (
    <div>
      <Box className={styles.header_box}></Box>
      <Box
        mt={2}
        p={{xs:1,md:2}}
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          color: "text.secondary",
        }}
        display='flex'
        flexDirection={{xs:"column", md:"row"}}
        justifyContent='space-between'
      >
      <Box >
      <Box display='flex'>
      <Typography color="#6C6C6C">عنوان : </Typography>
      <Typography fontWeight={600} sx={{ml:2}}>تاخیر در حضور</Typography>
      <Typography  fontWeight={600} sx={{ml:2}} color='#D40F00'>0.5 نمره</Typography>
      </Box>
      <Box display='flex'  mt={2}>
      <Typography  fontWeight={600} color="#6C6C6C">شرح : </Typography>
      <Typography  fontWeight={600} sx={{ml:2}}>ده دقیقه تاخیر در ورود به کلاس زبان انگلیسی</Typography>
      </Box>
      </Box>
      <Box>
      <Box display='flex' mt={2}>
      <Typography color="#6C6C6C">تاریخ : </Typography>
      <Typography  fontWeight={600} sx={{ml:2}}>22/10/1402</Typography>
      </Box>
      </Box>
      </Box>
      <Box
      mt={2}
      p={{xs:1,md:2}}
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        color: "text.secondary",
      }}
      display='flex'
      flexDirection={{xs:"column", md:"row"}}
      justifyContent='space-between'

    >
    <Box >
    <Box display='flex'>
    <Typography color="#6C6C6C">عنوان : </Typography>
    <Typography fontWeight={600} sx={{ml:2}}>تاخیر در حضور</Typography>
    <Typography  fontWeight={600} sx={{ml:2}} color='#D40F00'>0.5 نمره</Typography>
    </Box>
    <Box display='flex' mt={2}>
    <Typography  fontWeight={600} color="#6C6C6C">شرح : </Typography>
    <Typography  fontWeight={600} sx={{ml:2}}>ده دقیقه تاخیر در ورود به کلاس زبان انگلیسی</Typography>
    </Box>
    </Box>
    <Box>
    <Box display='flex' mt={2}>
    <Typography color="#6C6C6C">تاریخ : </Typography>
    <Typography  fontWeight={600} sx={{ml:2}}>22/10/1402</Typography>
    </Box>
    </Box>
    </Box>
    </div>
  );
};

export default Disipline;
