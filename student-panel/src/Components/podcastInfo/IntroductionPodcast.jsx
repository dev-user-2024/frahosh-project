import React from "react";
import { Box, Grid, Typography, Rating, Stack, Avatar } from "@mui/material";
import podcastImg from "../../assests/image/Ellipse 107.png";
import banner from "../../assests/image/podcastBanner.png";
import PlayerPodcast from "./player/PlayerPodcast";

const IntroductionPodcast = () => {
  return (
    <Box sx={{
      color: "text.secondary",
    }}>
      <Grid direction={{xs:"column-reverse" , md:"row"}} mt={1} container spacing={1}>
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" color="text.primary" fontWeight={600}>
              رتبه برتر
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography mr={1} variant="caption">
                4.6 از 156 نفر
              </Typography>
              <Stack spacing={1}>
                <Rating
                  readOnly
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                />
              </Stack>
            </Box>
          </Box>
          <Typography mt={1}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </Typography>
          <Box mt={1}>
            <Typography variant="h5" color="text.primary" fontWeight={600}>
              مهمانان برتر
            </Typography>
            <Grid mt={1} container spacing={1}>
              <Grid item xs={6} md={3} textAlign="center">
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    height: "100px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  p={1}
                >
                  <Avatar
                    sx={{ textAlign: "center" }}
                    alt="Cindy Baker"
                    src={podcastImg}
                  />
                  <Typography variant="caption">
                    محمد علیزاده رتبه دو ریاضی
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center">
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    height: "100px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  p={1}
                >
                  <Avatar
                    sx={{ textAlign: "center" }}
                    alt="Cindy Baker"
                    src={podcastImg}
                  />
                  <Typography variant="caption">
                    محمد علیزاده رتبه دو ریاضی
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} height={{xs:"500px", md:"auto"}} overflow='hidden'>
          <Box width="100%" overflow='hidden' >
            <img width="100%" alt="banner" src={banner}  />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <PlayerPodcast />
      </Box>
      <Box mt={2}>
        <Typography variant="h6" color="text.primary" fontWeight={600}>
          خلاصه{" "}
        </Typography>
        <Typography  textAlign='justify' variant="caption">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </Typography>
      </Box>
    </Box>
  );
};

export default IntroductionPodcast;
