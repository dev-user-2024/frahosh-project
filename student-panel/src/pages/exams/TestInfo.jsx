import { Box, Typography, Grid, LinearProgress, Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
import { useParams } from "react-router-dom";
const TestInfo = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLogin(true)
        const { data } = await axios.get(`${serverApi}exam/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setInfo(data);
        setLogin(false)
      } catch (err) {
        console.log(err);
        setLogin(false)
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <Typography variant="h6" fontWeight={700} sx={{ color: "text.primary" }}>
        اطلاعات آزمون
      </Typography>
      <Box mt={3} sx={{ width: "100%" }}>
        {login && <LinearProgress />}
      </Box>
      {info.id && (
        <Grid
          container
          my={2}
          p={2}
          justifyContent="space-between"
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
            color: "text.secondary",
          }}
        >
          <Grid mb={4} xs={12} md={6} item>
            <Typography>عنوان : {info.title}</Typography>
          </Grid>
          <Grid mb={4} xs={12} md={6} item>
            <Typography>زمان کل آزمون : {info.total_time}</Typography>
          </Grid>
          <Grid mb={4} xs={12} md={6} item>
            <Typography>
              تاریخ :{" "}
              {new Intl.DateTimeFormat("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(info.exam_date))}
            </Typography>
          </Grid>
          <Grid mb={4} xs={12} md={6} item>
            <Typography>
              محدودیت زمانی هر سوال : متفاوت به تیتر هر سوال دقت شود
            </Typography>
          </Grid>
          <Grid mb={4} xs={12} md={6} item>
            <Typography>
              زمان شروع :{" "}
              {`${new Date(info.start_time).getMinutes()}: ${new Date(
                info.start_time
              ).getHours()}`}
            </Typography>
          </Grid>
          <Grid mb={4} xs={12} md={6} item>
            <Typography>
              نمره منفی : {info.negative_marking ? "دارد" : "ندارد"}
            </Typography>
          </Grid>
          <Grid mb={4} xs={12} md={6} item>
            <Typography>تعداد سوالات : {info.question_limit} عدد</Typography>
          </Grid>
          <Grid mb={4} xs={12} md={6} item>
            <Typography>نمره کل : {info.total_score}</Typography>
          </Grid>
        </Grid>
      )}
      <Box mt={3} textAlign='center'>
      <Button variant="contained" sx={{width:"250px"}}>شروع آزمون</Button>
      </Box>
    </Box>
  );
};

export default TestInfo;
