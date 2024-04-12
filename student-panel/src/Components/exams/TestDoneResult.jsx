import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./test.module.css";
import { serverApi, token } from "../../confing/confing";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import pic1 from "../../assests/image/5872637---- 2.png";
import pic2 from "../../assests/image/Group 485 (1).png";
import pic3 from "../../assests/image/Group 485.png";

const TestDoneResult = () => {
  const [info, setInfo] = useState({});
  const [login, setLogin] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLogin(true);
        const data = await axios.get(`${serverApi}exam/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setLogin(false);
        console.log(data);
        setInfo(data.data);
      } catch (err) {
        console.log(err);
        setLogin(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <Box mt={2} sx={{ width: "100%" }}>
        {login && <LinearProgress />}
      </Box>
      <Box className={styles.bg_testdone_header}>
        <Box mb={5} color="#fff" pl={3} display="flex">
          <Typography fontWeight={600}>آزمون : </Typography>
          <Typography sx={{ ml: 2 }} fontWeight={600}>
            {info.title}
          </Typography>
        </Box>
        <Box mb={5} color="#fff" pl={3} display="flex">
          <Typography fontWeight={600}>تاریخ</Typography>
          <Typography sx={{ ml: 2 }} fontWeight={600}>
            {info.exam_date &&
              new Intl.DateTimeFormat("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(info.exam_date))}
          </Typography>
        </Box>
        <Box mb={5} color="#fff" pl={3} display="flex">
          <Typography fontWeight={600}>نمره : </Typography>
          <Typography sx={{ ml: 2 }} fontWeight={600}>
            {info.total_score}
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2} my={3}>
        <Grid item xs={12} md={4}>
          <Link to={`/testResult/${id}`}>
            <Box className={styles.testChoice_bg1}>
              <img src={pic1} alt="" />
              <Typography fontWeight={700} sx={{ mt: 2 }}>
                برگه امتحان
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to={`/averageChart/${id}`}>
            <Box className={styles.testChoice_bg2}>
              <img src={pic2} alt="" />
              <Typography fontWeight={700} sx={{ mt: 2 }}>
                نمودار میانگین نمرات
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to={`/middelChart/${id}`}>
            <Box className={styles.testChoice_bg3}>
              <img src={pic3} alt="" />
              <Typography fontWeight={700} sx={{ mt: 2 }}>
                نمودار میانه نمرات
              </Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestDoneResult;
