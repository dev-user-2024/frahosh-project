import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
const AzmoonDitails = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        mt={2}
        p={2}
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.light
              : "#FFFFFF",

          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                 زمان کل آزمون :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                آزمون شماره 1
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                نمره کل  :
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                دوم
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                 تاریخ:
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                آنلاین تشریحی
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                محدودیت زمانی هر سوال :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                1431
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                عنوان  :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                3
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                زمان شروع:
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                10
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                نمره منفی :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                دبیرستان
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                نمره :
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                20/2/1402
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Box display="flex">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#040C1A",
                }}
                fontWeight={600}
                mr={1}
              >
                تعداد سوالات  :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                }}
              >
                20
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>


      <Box mt={5}>
        <Box
          mt={2}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey.light
                : "#FFFFFF",
            boxShadow: " 3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          }}
          p={3}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
            >
              سوال 1 از 5
            </Typography>
            <Typography
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
            >
              زمان پاسخگویی : 10 دقیقه
            </Typography>
            <Typography
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
            >
             نمره: 1 از 2
            </Typography>
          </Box>
          <Typography
            mt={4}
            sx={{
              color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
              lineHeight: 4,
            }}
            textAlign="left"
          >
            1-لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </Typography>
          <Typography
            mt={4}
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" ,
            lineHeight: 4,
          }}
            textAlign="left"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AzmoonDitails;
