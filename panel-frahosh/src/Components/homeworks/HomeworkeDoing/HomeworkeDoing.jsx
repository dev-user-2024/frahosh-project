import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { serverApi , token } from "../../../confing/confing";
import axios from "axios";
import { element } from "prop-types";
const HomeworkeDoing = () => {
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
        console.log(data)
        setTaskInfo(data[0])
        setQuestionLength(data.length);
        const ShowData = []
        for(let i=0 ; i< data.length ; i++){
          ShowData.push(data[i])
        }
        console.log(ShowData)
        setQuestionData(ShowData)
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
        <Box display={"flex"} alignItems="center">
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#1D9BF0",
            }}
            mr={1}
          ></Box>
          <Typography>وضعیت:</Typography>
          <Typography color="#1D9BF0">در حال انجام</Typography>
        </Box>
        <Typography>مهلت ارسال: {taskInfo["deadline"]}</Typography>
        <Typography>نمره: {taskInfo["grade"]}</Typography>
        <Typography>تعداد: {questionLength}</Typography>
      </Box>
      <Box>
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
          <Typography mb={3}>شماره 1</Typography>
          <Typography mb={3}>
           {element.description}
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
        <Box mt={2} textAlign="center">
          <Button
            variant="outlined"
            sx={{ color: "#1D9BF0", borderColor: "#1D9BF0", width: "300px" }}
          >
            ویرایش پاسخ
          </Button>
        </Box>
              </div>
            )
          })
        }
      </Box>
    </Box>
  );
};

export default HomeworkeDoing;
