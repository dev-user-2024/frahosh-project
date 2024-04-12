import { Box, Typography, Grid, LinearProgress } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
const TestDone = () => {
  const [list, setList] = useState([]);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLogin(true);
        const { data: list1 } = await axios.get(`${serverApi}done_exams`, {
          headers: { authorization: `Bearer ${token}` },
        });
        if(list1.length > 0){
          setList(list1);
          }
        setLogin(false);
      } catch (err) {
        console.log(err);
        setLogin(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Box my={2}>
      <Typography variant="h6" fontWeight={700} color="text.primary">
        آزمون های انجام شده{" "}
      </Typography>
      <Box mt={3} sx={{ width: "100%" }}>
        {login && <LinearProgress />}
      </Box>
      <Grid container spacing={{ xs: 1, md: 2 }} mt={3}>
        {list.map((i, index) => (
          <Grid item xs={12} key={index}>
            <Box
              display="flex"
              p={2}
              justifyContent="space-between"
              sx={{
                backgroundColor: "background.paper",
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                color: "text.secondary",
              }}
            >
              <Typography>
                {new Intl.DateTimeFormat("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(i.exam_date))}
              </Typography>
              <Typography>{i.title}</Typography>
              <Link to={`/testDone/${i.id}`}>
                <Typography
                  display="flex"
                  alignItems="center"
                  color={"text.secondary"}
                >
                  مشاهده
                  <ArrowBack />
                </Typography>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestDone;
