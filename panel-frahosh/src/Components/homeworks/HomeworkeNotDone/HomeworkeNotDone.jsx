import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { serverApi , token } from "../../../confing/confing";
import axios from "axios";

const HomeworkeNotDone = () => {
  const {id} = useParams();
  const [taskInfo , setTaskInfo] = useState({});
  const [question , setQuestion] = useState();
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
    return (
        <Box mb={2}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box display={"flex"} alignItems='center'>
            <Box
            sx={{width:"10px", height : '10px' , borderRadius:"50%" , backgroundColor:"#6C6C6C"}}
            mr={1}
            ></Box>
          <Typography>وضعیت:</Typography>
          <Typography color="#6C6C6C">انجام نشده</Typography>
        </Box>
        <Typography>مهلت ارسال: {taskInfo["deadline"]}</Typography>
        <Typography>نمره: {taskInfo["grade"]}</Typography>
        <Typography>تعداد: 1</Typography>
      </Box>
      <Box>
        <Box
          mt={2}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            padding: "20px",
          }}
        >
          <Typography mb={3}>شماره 1</Typography>
          <Typography mb={3}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع.
          </Typography>
        </Box>
        <Box
          mt={2}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            padding: "20px",
            border: "0.5px solid #828282",
          }}
        >
          <Typography mb={3}>پاسخ دانش آموز</Typography>
          <Typography mb={3} color="#6C6C6C">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع.
          </Typography>
        </Box>
        <Box mt={2} textAlign='center'>
        <Button  variant="outlined" sx={{color:"#1D9BF0", borderColor:"#1D9BF0" , width:"300px"}}>ثبت موقت</Button>
        </Box>
      </Box>
      
    </Box>
    );
};

export default HomeworkeNotDone;