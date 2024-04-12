import React from "react";
import { Box, Typography, Grid, Stack} from "@mui/material";
import schoolImg from "../../assests/image/aboutH.svg";
import TopStudents from "../../Components/about/TopStudents";
import SchoolIntroduction from "../../Components/about/schoolIntroduction";
import SchoolLocation from "../../Components/about/schoolLocation";
import SchoolGallery from "../../Components/about/schoolGallery";
import SchoolVideo from "../../Components/about/schoolVideo";
const Aboutus = () => {
  return (
    <div>
      <Box
        width="100%"
        sx={{
          background: " linear-gradient(167.98deg, #1D9BF0, #0E80CC )",
        }}
      >
        <Grid container mt={2} spacing={2} p={3}>
          <Grid item xs={5} md={3}>
            <Stack alignItems="center" justifyContent="center" gap={2}>
              <img src={schoolImg} alt="schoolImg" />
              <Typography sx={{ color: "#fff" }}>مدرسه فراهوش</Typography>
            </Stack>
          </Grid>
          <Grid container item xs={7} md={9}>
            <Grid
              item
              xs={12}
              md={6}
              mb={{ xs: 2, md: 0 }}
              gap={{ xs: 2, md: 5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "#fff", fontFamily: "Rokh-Bold" }}
                variant="subtitle1"
              >
                سال تاسیس:<span>1401</span>
              </Typography>
              <Typography
                sx={{ color: "#fff", fontFamily: "Rokh-Bold" }}
                variant="subtitle1"
              >
                نوع:<span>غیر انتفاعی</span>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              gap={{ xs: 2, md: 5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "#fff", fontFamily: "Rokh-Bold" }}
                variant="subtitle1"
              >
                تعداد کلاس:<span>10</span>
              </Typography>
              <Typography
                sx={{ color: "#fff", fontFamily: "Rokh-Bold" }}
                variant="subtitle1"
              >
                آزمون هوشمند:<span>دارد</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
     <TopStudents/>
     <Grid
     container
     mt={5}
     spacing={2.5}
   >
     <Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
       <SchoolIntroduction
         schoolName={"مدرسه دانش"}
         schoolDescription={
           "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتر"
         }
       />
     </Grid>
     <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
       <SchoolLocation />
     </Grid>
     <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
       <SchoolGallery />
     </Grid>
     <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
       <SchoolVideo />
     </Grid>
   </Grid>
    </div>
  );
};

export default Aboutus;
