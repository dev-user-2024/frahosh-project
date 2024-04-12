import React from "react";
import { Box, Typography, Breadcrumbs, Grid } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useParams } from "react-router-dom";
import styles from "./reservationTimePiker.module.css";

import reservationImg from "../../assests/image/rezerv.png";
import ReservationTimePiker from "../../Components/consultant/reservationTimePiker";

const ConsultantReservation = () => {
    const {date} = useParams()
  const breadcrumbs = [
    <Typography>مشاوره</Typography>,
    <Typography sx={{ color: "#040C1A" }}>مشاور علی حسینی</Typography>,
    <Typography sx={{ color: "#040C1A" }}>رزرو مشاور</Typography>,
  ];
  const raserveableTime = [
    { id: 1, time: "۸:۳۰-۹:۱۵" },
    { id: 2, time: "۹:۱۵-۱۰:۰۰" },
    { id: 3, time: "۱۱:۰۰-۱۲:۰۰" },
    { id: 4, time: "۱۰:۳۰-۱۱:۰۰" },
  ];
  console.log(new Date(date))

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
                mt={2}
                padding="1rem 1rem"
                height={200}
                display='flex'
                alignItems='center'
                sx={{
                backgroundImage: `url(${reservationImg})`,
                color: "#fff",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            >
            {new Intl.DateTimeFormat("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(date))}
            </Box>
            <Grid container spacing={2} mt={2}>
                <Grid item sx={12} md={6}>
                <Box
                    p={2}
                    my={2}
                    sx={{
                    backgroundColor: "background.paper",
                    boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                    color: "text.secondary",
                    }}
                    textAlign="center"
                >
                    <Typography color="text.primary" fontWeight={600}>
                    ساعت های قابل رزرو صبح
                    </Typography>
                    <Box  className={styles.reserveabletimeContaner} mt={2}>
                    {raserveableTime.map((item , index) => (
                        <Box key={index} className={styles.reserveabletime}>
                        <Typography>{item.time}</Typography>
                        </Box>
                    ))}
                    </Box>
                    <Typography color="text.primary" fontWeight={600}>
                    ساعت های قابل رزرو عصر
                </Typography>
                <Box className={styles.reserveabletimeContaner} mt={2}>
                    {raserveableTime.map((item,index) => (
                    <Box key={index} className={styles.reserveabletime}>
                        <Typography>{item.time}</Typography>
                    </Box>
                    ))}
                </Box>
                </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                <Box
                p={2}
                my={2}
                sx={{
                    backgroundColor: "background.paper",
                    boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                    color: "text.secondary",
                }}
                textAlign="center"
                >
               <ReservationTimePiker/>
                </Box>
      </Grid>
      </Grid>
    </div>
  );
};

export default ConsultantReservation;
