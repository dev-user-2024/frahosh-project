import {
  Box,
  Stack,
  Select,
  FormControl,
  MenuItem,
 Button,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import CheckBox from "./CheckBox";
import styles from "./dashboard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useTheme } from "@mui/material";

export default function MySchedule() {
  const dailySchedule = [
    { id: 1, description: "اتمام تمرین‌های ریاضی", completed: true },
  ];
  const weekSchedule = [
    { id: 2, description: "رسم نمودارهای کلاس دوشنبه", completed: false },
  ];
  const monthSchedule = [
    { id: 3, description: "تمرین روخوانی فارسی", completed: false },
  ];
  const [addSchedule, setAddSchedule] = useState(false);
  const [scheduleList, setScheduleList] = useState(dailySchedule);
  const [newschedule, setNewSchedule] = useState();
  const theme = useTheme();

  const handleScheduleTypeChange = (event) => {
    if (event.target.value === 1) {
      setScheduleList([...dailySchedule]);
    } else if (event.target.value === 2) {
      setScheduleList([...weekSchedule]);
    } else {
      setScheduleList([...monthSchedule]);
    }
    addSchedule && setAddSchedule(false);
  };

  function addScheduleHandler() {
    setAddSchedule(true);
  }
  function addUserScheduleInput(event) {
    setNewSchedule(event.target.value);
  }
  function DeleteNewSchedule() {
    setAddSchedule(false);
  }
  function SaveNewSchedule() {
    console.log("save");
    console.log(newschedule);
    setScheduleList([
      ...scheduleList,
      { id: scheduleList.length, description: newschedule, completed: false },
    ]);
    setAddSchedule(false);
  }
  function checkedSchedule(event) {
    const index = scheduleList.findIndex((item) => item.id == event.target.id);
    scheduleList[index] = {
      ...scheduleList[index],
      completed: event.target.checked,
    };
    setScheduleList([...scheduleList]);
  }

  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "400px",
        overflow: "auto",
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.grey.light : "#FFFFFF",
      }}
    >
      <Stack direction={{xs:"column" , md:"row"}} justifyContent="space-between" textAlign='left'>
        <Typography
        variant='h5' component="p" sx={{
        fontFamily: "Rokh-Bold",
        mb:1,
        color: theme.palette.mode === "dark" ? "#fff" : "#1D9BF0"
      }}
      >
      کارهای من
      </Typography>
        <FormControl>
          <select
            labelId=""
            defaultValue={1}
            onChange={handleScheduleTypeChange}
           className="input-style"
          >
            <option value={1}>روزانه</option>
            <option value={2}>هفتگی</option>
            <option value={3}>ماهیانه</option>
          </select>
        </FormControl>
       <Box mt={{xs:2,md:0}}>
       <Button variant="contained" onClick={addScheduleHandler} >
       + جدید
     </Button>
       </Box>
      </Stack>
      <Stack spacing={2} mb={2} direction="column" mt={2}>
        {scheduleList.map((item, index) => (
          <Stack
            key={index}
            spacing={2}
            alignItems="center"
            mb={2}
            direction="row"
            mt={2}
          >
            <CheckBox
              defaultChecked={item.completed}
              id={`${item.id}`}
              onChange={checkedSchedule}
            />
            <Box
              sx={{
                boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
                width: "100%",
                padding: "30px 20px",
                color:theme.palette.mode === "dark" ? "#fff" : "000"
              }}
              className={item.completed && styles.donedText}
            >
              {item.description}
            </Box>
          </Stack>
        ))}
      </Stack>
      {addSchedule && (
        <Stack spacing={2} alignItems="center" mb={2} direction="row">
          <CheckBox disabled />
          <Box
            sx={{
              boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
              width: "100%",
              padding: "30px 20px",
              display: "flex",
            }}
          >
            <input
              style={{ border: "none", background: "none", width: "100%" }}
              onChange={addUserScheduleInput}
            />
            <IconButton onClick={DeleteNewSchedule}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={SaveNewSchedule}>
              <SaveAltIcon />
            </IconButton>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
