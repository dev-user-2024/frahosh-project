import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { serverApi, token } from "../../confing/confing";
import axios from "axios";
import { useEffect, useState } from "react";
import { FileUploadOutlined } from "@mui/icons-material";
const HomeworkNoteDone = () => {
  const { id } = useParams();
  const [taskInfo, setTaskInfo] = useState({});
  const [question, setQuestion] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${serverApi}getTasksOfSubject/${id}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        console.log(data);
        setTaskInfo(data[0]);
        const { data: data2 } = await axios.get(
          `${serverApi}submissionByTask/${id}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        console.log(data2);
        // console.log(taskInfo)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
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
        <Box display={"flex"} alignItems="center">
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#6C6C6C",
            }}
            mr={1}
          ></Box>
          <Typography>وضعیت:</Typography>
          <Typography color="#6C6C6C">انجام نشده</Typography>
        </Box>
        <Typography>مهلت ارسال : </Typography>
        <Typography>نمره : 19 </Typography>
        <Typography>تعداد : 1</Typography>
      </Box>
      <Box>
        <Box
          mt={2}
          p={2}
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
            color: "text.secondary",
          }}
        >
          <Typography>شماره 1</Typography>
          <Typography sx={{ mt: 4 }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع.
          </Typography>
        </Box>
        <Box mt={3}>
          <textarea
            placeholder="پاسخ دانش اموز"
            style={{ width: "100%", height: "150px", resize: "none" }}
          />
        </Box>
        <Box mt={3} textAlign="center">
          <Button variant="outlined" sx={{ width: "200px" }}>
            ثبت موقت
          </Button>
        </Box>
      </Box>
          <Box mt={4} display='flex' justifyContent='space-between' alignItems='center'>
          <Box mt={5} mb={2} display="flex" justifyContent="space-between" alignItems='center'>
          <Typography sx={{mr : 2}}>فایل های مرتبط</Typography>
          <label htmlFor="upload_file">
            <input type="file" id="upload_file" style={{ display: "none" }} />
            <span
              style={{
                padding: "8px 20px 8px 20px",
                backgroundColor: "#1D9BF0",
                color: "#fff",
                borderRadius: "10px",
                display:"flex",
                alignItems:"center"
              }}
            >
              <FileUploadOutlined />
              آپلود فایل
            </span>
          </label>
        </Box>
        <Box>
        <Button sx={{width:"200px"}} variant="contained">ثبت نهایی</Button>
        </Box>
          </Box>

    </div>
  );
};

export default HomeworkNoteDone;
