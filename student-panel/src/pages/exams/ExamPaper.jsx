import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { serverApi, token } from "../../confing/confing";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ExamPaper1 from "../../Components/exams/ExamPaper1";
import ExamPaper2 from "../../Components/exams/ExamPaper2";
const ExamPaper = () => {
  const [info, setInfo] = useState({});
  const [type, setType] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${serverApi}exam/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data.data);
        setInfo(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Typography variant="h6" fontWeight={700} sx={{ color: "text.primary" }}>
        آزمون های انجام شده{" "}
      </Typography>
      <Box mt={2}>
        <Typography>
          سوالات امتحان و جواب‌هایی که دادی و نمره هر سوال رو به راحتی ببین و
          بررسی کن.
        </Typography>
      </Box>
      <ExamPaper1 info={info} type={type} />
      <Box mt={6}>
        <Button
          variant="contained"
          sx={{ width: "200px" }}
          onClick={() => {
            setType(2);
          }}
        >
          مشاهده برگه امتحان
        </Button>
      </Box>
      {
        type === 2 && <ExamPaper2/>
      }
    </div>
  );
};

export default ExamPaper;
