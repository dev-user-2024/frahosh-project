import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
const ClassBook = () => {
    const [list, setList] = useState([]);
    const [login, setLogin] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLogin(true);
            const { data} = await axios.get(`${serverApi}classbook`, {
              headers: { authorization: `Bearer ${token}` },
            });
            console.log(data)
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
      <Box display="flex" alignItems="center" mr={1}>
        <Typography
          textAlign="left"
          color="text.primary"
          fontWeight={700}
          sx={{ mr: 2 }}
        >
          تاریخ
        </Typography>
        <DatePicker
          render={
            <InputIcon
              className="input-style"
              style={{ width: "200px", backgroundColor: "#fff" }}
            />
          }
          value={new Date()}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        />
      </Box>

      <Box mt={2} p={2}>
        <Typography color="text.secondary">ریاضی :20</Typography>
        <Box
          px={2}
          py={3}
          mt={1}
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
            color: "text.secondary",
          }}
        >
        <Typography variant="caption">توضیحات</Typography>
          <Typography sx={{mt:2}}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </Typography>
        </Box>
      </Box>
      <Box mt={2} p={2}>
      <Typography color="text.secondary">زبان : 15</Typography>
      <Box
        px={2}
        py={3}
        mt={1}
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          color: "text.secondary",
        }}
      >
      <Typography variant="caption">توضیحات</Typography>
        <Typography sx={{mt:2}}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </Typography>
      </Box>
    </Box>
    </div>
  );
};

export default ClassBook;
