import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Grid,
  Avatar,
  Stack,
  Rating,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import C1 from "../../assests/image/c1.svg";
import Calendr from "../../Components/caledar/Calenadr";

const ConsultantInfo = () => {
  const breadcrumbs = [
    <Typography>مشاوره</Typography>,
    <Typography sx={{ color: "#040C1A" }}>مشاور علی حسینی</Typography>,
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
      <Grid container mt={2} spacing={4} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            height="100%"
            sx={{
              backgroundColor: "background.paper",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: "text.secondary",
            }}
          >
            <Typography color="text.primary" fontWeight={600}>
              درباره مشاور
            </Typography>
            <Box mt={3} textAlign="center">
              <Avatar
                sx={{ margin: "0 auto", width: "109px", height: "109px" }}
                alt="consulatantphoto"
                src={C1}
              />
              <Stack
                direction="row"
                alignContent="center"
                justifyContent="center"
                mb="2rem"
                mt={2}
              >
                <Typography
                  mr=".9rem"
                  sx={{ color: "#6C6C6C" }}
                  variant="caption"
                >
                  ۴.۶ از ۱۵۴ نفر
                </Typography>
                <Rating mb="2rem" name="read-only" value={3.5} readOnly />
              </Stack>
            </Box>
            <Typography>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            height="100%"
            sx={{
              backgroundColor: "background.paper",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: "text.secondary",
            }}
          >
            <Typography color="text.primary" fontWeight={600}>
              روزهای قابل رزرو
            </Typography>
            <Box mt={2} display="flex" justifyContent="center">
              <Calendr />
            </Box>
            <Stack direction="row" alignItems="center" mt={2} spacing={4}>
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  color: "#6C6C6C",
                  background:
                    " linear-gradient(180deg, #F1A6A0 0%, #FFF2F1 90%)",
                  borderRadius: "0",
                  boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.08)",
                }}
              ></Box>
              <Typography>غیرقابل رزرو</Typography>
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  background: "#fff",
                  borderRadius: "0",
                  boxShadow: "1px 1px 10px 0px rgba(0, 0, 0, 0.2)",
                }}
              ></Box>
              <Typography>قابل رزرو</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid container my={2} spacing={4} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            sx={{
              backgroundColor: "background.paper",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: "text.secondary",
            }}
          >
            <Typography color="text.primary" fontWeight={600}>
              ساعت های مشاور
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              my={3}
            >
              <Typography>8تا 12</Typography>
              {/* <Divider variant="inset" sx={{width: '40%',bgcolor: 'red'}} /> */}
              <Typography>15 تا 18</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            sx={{
              backgroundColor: "background.paper",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: "text.secondary",
            }}
          >
            <Typography color="text.primary" fontWeight={600}>
              شرح هزینه
            </Typography>
            <Typography>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box my={2}>
        <Typography color="text.primary" fontWeight={600}>
          نظرات و امتیاز های
        </Typography>
        <Box
        sx={{
          padding: "0.7rem .9rem",
          border: "1px solid #B6EAFA",
        }}
      >
        <Stack direction="row" justifyContent="space-between" mb="1rem">
          <Typography sx={{ color: "#6C6C6C" }} variant="caption">
            سحر مرادی
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>4.5</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </Box>
        </Stack>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
        </Typography>
      </Box>
      </Box>
     
    </div>
  );
};

export default ConsultantInfo;
