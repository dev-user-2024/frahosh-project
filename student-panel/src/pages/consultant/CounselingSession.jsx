import React from "react";
import { Box, Typography, Breadcrumbs, Grid, Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const CounselingSession = () => {
  const breadcrumbs = [
    <Typography>مشاوره</Typography>,
    <Typography sx={{ color: "#040C1A" }}>مشاور علی حسینی</Typography>,
    <Typography sx={{ color: "#040C1A" }}>جلسه مشاوره</Typography>,
  ];
  return (
    <div>
      <Box>
        <Breadcrumbs
          separator={<NavigateBeforeIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box 
      px={2}
      py={4}
      mt={2}
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        color: "text.secondary",
      }}
      >
      <Grid container spacing={2}>
      <Grid item xs={12} md={6} display='flex'>
      <Typography color='text.primary'>تاریخ : </Typography>
      <Typography sx={{ml:3}}>15 شهریور 1402</Typography>
      </Grid>
      <Grid item xs={12} md={6} display='flex'>
      <Typography color='text.primary'>نوع ارتباط: </Typography>
      <Typography sx={{ml:3}}>تصویری</Typography>
      </Grid>
      <Grid item xs={12} md={6} display='flex'>
      <Typography color='text.primary'>ساعت</Typography>
      <Typography sx={{ml:3}}>4 عصر</Typography>
      </Grid>
      <Grid item xs={12} md={6} display='flex'>
      <Typography color='text.primary'>نام مشاور </Typography>
      <Typography sx={{ml:3}}>علی حسینی</Typography>
      </Grid>
      <Grid item xs={12} md={6} display='flex'>
      <Typography color='text.primary'>مدت زمان :</Typography>
      <Typography sx={{ml:3}}>15 دقیقه</Typography>
      </Grid>
      <Grid item xs={12} md={6} display='flex'>
      <Typography color='text.primary'>هزینه پرداخت شده : </Typography>
      <Typography sx={{ml:3}}>125 هزار تومن</Typography>
      </Grid>
      </Grid>
      </Box>
      <Box mt={4} textAlign='center'>
      <Button variant="contained">شروع مشاوره تصویری</Button>
      </Box>
    </div>
  );
};

export default CounselingSession;
