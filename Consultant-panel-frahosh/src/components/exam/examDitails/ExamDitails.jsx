import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { ModeEditOutlineOutlined, DeleteOutline } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const ExamDitails = () => {
  const theme = useTheme();

  return (
    <Box >
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                عنوان آزمون :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                پایه:
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                نوع آزمون:
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                کد آزمون :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                شماره کلاس :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                تعداد سوال:
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                مقطع :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                زمان برگزاری:
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
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
                  color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
                }}
                fontWeight={600}
                mr={1}
              >
                جمع بارم :{" "}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
                }}
              >
                20
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" mt={2}>
        <Button
          variant="outlined"
          sx={{
            color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
            borderColor: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
          }}
        >
          <ModeEditOutlineOutlined />
          ویرایش آزمون
        </Button>
        <Button  sx={{
          color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
          borderColor: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
          ml:2
        }} variant="outlined" >
          <DeleteOutline />
          حذف آزمون
        </Button>
      </Box>
      <Box mt={2}>
        <Box
          mt={2}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',
            boxShadow: " 3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          }}
          p={3}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#000"}}>سوال 1 از 5</Typography>
            <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#000"}}>زمان پاسخگویی : 10 دقیقه</Typography>
            <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#000"}}>بارم : 2</Typography>
          </Box>
          <Typography mt={4}  sx={{color:theme.palette.mode === "dark" ? "#93CFF9" : "#095385"}} textAlign="left">
            1-لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </Typography>
        </Box>
        <Box
        mt={2}
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',
          boxShadow: " 3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        p={3}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#000"}}>سوال 1 از 5</Typography>
          <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#000"}}>زمان پاسخگویی : 10 دقیقه</Typography>
          <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#000"}}>بارم : 2</Typography>
        </Box>
        <Typography mt={4}  sx={{color:theme.palette.mode === "dark" ? "#93CFF9" : "#095385"}} textAlign="left">
          1-لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default ExamDitails;
