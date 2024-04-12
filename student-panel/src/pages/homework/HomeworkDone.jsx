import { Box,  Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { serverApi , token } from "../../confing/confing";
import axios from "axios";
import { useEffect , useState} from "react";
const HomeworkDone = () => {
    const {id} = useParams();
    const [taskInfo , setTaskInfo] = useState({});
    const [question , setQuestion] = useState();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`${serverApi}getTasksOfSubject/${id}`, {
              headers: { authorization: `Bearer ${token}` },
            });
            console.log(data)
            setTaskInfo(data[0])
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
              backgroundColor: "#11AA63",
            }}
            mr={1}
          ></Box>
          <Typography>وضعیت:</Typography>
          <Typography color="#11AA63">انجام شده</Typography>
        </Box>
        <Typography>مهلت ارسال : </Typography>
        <Typography>نمره : 19 </Typography>
        <Typography>تعداد : 1</Typography>
      </Box>
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
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع.
        </Typography>
        <Typography sx={{ mt: 4 }}>پاسخ دانش اموز</Typography>
        <Typography sx={{ mt: 4 }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع.
        </Typography>
        <Typography sx={{ mt: 4 }}>پاسخ صحیح</Typography>
        <Typography sx={{ mt: 4 }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع.
        </Typography>
        <Box mt={10} display="flex" alignItems="center" >
        <Typography variant="caption" mr={4}>
          {" "}
          فایل های مرتبط
        </Typography>
        <input
          className="input-style"
          disabled
          value="1.pdf"
          style={{ width: "200px" }}
        />
      </Box>
      </Box>

    </div>
  );
};

export default HomeworkDone;
