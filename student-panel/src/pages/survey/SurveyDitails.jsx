import React from "react";
import { Box, Button, LinearProgress, List, Typography } from "@mui/material";
import styles from "./servey.module.css";
import { useEffect, useState } from "react";
import { serverApi, token } from "../../confing/confing";
import axios from "axios";
import { useParams } from "react-router-dom";
import SurveyQuestion from "../../Components/survey/SurveyQuestion";

const SurveyDitails = () => {
  const [info, setInfo] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [Loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await axios.get(`${serverApi}pools/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setLoading(false);
        setInfo(data.data);
        setQuestionList(data.data.questions);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Box
        className={styles.header_box2}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography color="#fff" fontWeight={700} sx={{ pl: 4, mb: 2 }}>
          عنوان : {info.title}
        </Typography>
        <Typography color="#fff" fontWeight={700} sx={{ pl: 4, mb: 2 }}>
          تاریخ ایجاد :{" "}
          {info.created_at &&
            new Intl.DateTimeFormat("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(info.created_at))}
        </Typography>
        <Typography color="#fff" fontWeight={700} sx={{ pl: 4, mb: 2 }}>
          مهلت انجام:{" "}
          {info.end_date &&
            new Intl.DateTimeFormat("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(info.end_date))}
        </Typography>
        <Typography color="#fff" fontWeight={700} sx={{ pl: 4, mb: 2 }}>
          تعداد سوالات : {questionList.length}
        </Typography>
      </Box>
      <Box my={3} sx={{ width: "100%" }}>
        {Loading && <LinearProgress />}
      </Box>
      <Box mt={3}>
        {questionList.map((i, index) => (
          <Box key={index} mb={2}>
            <SurveyQuestion qus={i} index={index + 1} />
          </Box>
        ))}
      </Box>
      <Box mt={4} display='flex' justifyContent='center'>
      <Button sx={{width:150}} variant="contained">ذخیره</Button>
      <Button sx={{ml:2 , width:150}} variant="outlined">انصراف</Button>
      </Box>
    </div>
  );
};

export default SurveyDitails;
