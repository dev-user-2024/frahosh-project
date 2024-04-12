import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { serverApi , token } from "../../../confing/confing";
import axios from "axios";
import { element } from "prop-types";
const HomeworkDone = () => {
  const {id} = useParams();
  const [taskInfo , setTaskInfo] = useState({});
  const [questionLength , setQuestionLength] = useState(0);
  const [questionData , setQuestionData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}getTasksOfSubject/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        // console.log(data)
        setTaskInfo(data[0])
        // console.log(taskInfo)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}submissionByTask/10`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data.length);
        setQuestionLength(data.length);
        const ShowData = []
        for(let i=0 ; i< data.length ; i++){
          ShowData.push(data[i])
        }
        console.log(ShowData)
        setQuestionData(ShowData)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div key={element.id}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)"
        }}
      >
        <Box display={"flex"} alignItems='center'>
        <Box
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#11AA63",
        }}
        mr={1}
      ></Box>
          <Typography>وضعیت:</Typography>
          <Typography color="#11AA63">انجام شده </Typography>
        </Box>
        <Typography>مهلت ارسال: {taskInfo["deadline"]}</Typography>
        <Typography>نمره: {taskInfo["grade"]}</Typography>
        <Typography>تعداد: {questionLength}</Typography>
      </Box>
      {
        questionData.map(element => {
          return(
            <div key={element.id}>
            <Box
        mt={2}
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Typography mb={3}>شماره {element.id}</Typography>
        <Typography mb={3}>
        {element.question}
        </Typography>
        <Typography mb={3}>پاسخ دانش آموز</Typography>
        <Typography mb={3}>
        {element["answer"]}
        </Typography>
        <Typography mb={3}>پاسخ صحیح</Typography>
        <Typography mb={3}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع.
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mt={5} >
      <Typography mr={2}>فایل های مرتبط</Typography>
      <input
        style={{
          border: "1px solid #828282",
          borderRadius: "8px",
          padding: "5px",
          marginTop: "5px",
          color:"#1D9BF0",
          direction:"ltr"
        }}
        name="curentPass"
        id="curentPass"
        value="answer.pdf"
        readOnly
      />
    </Box>
            </div>
          )
        })
      }
    </div>
  );
};

export default HomeworkDone;
