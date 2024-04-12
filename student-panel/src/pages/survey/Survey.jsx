import React from "react";
import { Box, Typography, Grid, LinearProgress } from "@mui/material";
import styles from "./servey.module.css";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { serverApi, token } from "../../confing/confing";
import axios from "axios";
const Survey = () => {
  const [list, setList] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLogin(true);
        const { data } = await axios.get(`${serverApi}pools`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setList(data);
        setLogin(false);
      } catch (err) {
        console.log(err);
        setLogin(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Box className={styles.header_box} display="flex" alignItems="center">
        <Typography color="#fff" fontWeight={700} sx={{ pl: 4 }}>
          تعداد نظر سنجی های تکمیل نشده : {list.length} مورد
        </Typography>
      </Box>

      <Box my={3} sx={{ width: "100%" }}>
        {login && <LinearProgress />}
      </Box>
      <Grid container spacing={2} mt={3}>
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
                {" "}
                {i.created_at && new Intl.DateTimeFormat("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(i.created_at))}
              </Typography>
              <Typography>{i.title}</Typography>
              <Link to={`${i.id}`}>
                <Typography
                  display="flex"
                  alignItems="center"
                  color="text.primary"
                >
                  <ArrowBack />
                </Typography>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Survey;
