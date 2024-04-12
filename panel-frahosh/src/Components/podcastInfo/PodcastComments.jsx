import React from "react";
import {
  Box,
  Grid,
  Typography,
  Rating,
  Stack,
  Button
} from "@mui/material";

const PodcastComments = () => {
  return (
    <Box mt={2}>
      <Grid container spacing={1} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5}>
          <Typography variant="h6" color="#1D9BF0" fontWeight={600}>
            نظرات و امتیاز ها
          </Typography>
          <Box mt={1} borderRadius={8} p={2} sx={{ backgroundColor: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="caption" color="#6C6C6C">
                سحر مرادی
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography mr={1} variant="caption">
                  4.6
                </Typography>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </Box>
            </Box>
            <Typography mt={1} variant="caption">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </Typography>
          </Box>
          <Box mt={1} borderRadius={8} p={2} sx={{ backgroundColor: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="caption" color="#6C6C6C">
                سحر مرادی
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography mr={1} variant="caption">
                  4.6
                </Typography>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </Box>
            </Box>
            <Typography mt={1} variant="caption">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color="#1D9BF0" fontWeight={600}>
              لطفا امتیاز و نظرت رو ثبت کن
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </Box>
          </Box>
          <Box mt={1}>
            <textarea
              style={{
                width: "100%",
                height: "250px",
                border: "1px solid #000",
                borderRadius: "20px",
                padding: "10px",
              }}
            />
            <Button variant="contained" fullWidth sx={{backgroundColor:"#1D9BF0"}}>ثبت</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PodcastComments;
