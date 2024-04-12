import {
  Box,
  Stack,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  IconButton,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import TitleTypography from "../about/title";
import Button from "../buttons/button.component";
import CheckBox from "./CheckBox";
import styles from "./dashboard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export default function MySchedule() {
  const dailySchedule = [
    { id: "1", description: "اتمام تمرین‌های ریاضی", completed: true },
  ];
  const weekSchedule = [
    { id: "1", description: "رسم نمودارهای کلاس دوشنبه", completed: false },
  ];
  const monthSchedule = [
    { id: "1", description: "تمرین روخوانی فارسی", completed: false },
  ];
  const [addSchedule, setAddSchedule] = useState(false);
  const [scheduleList, setScheduleList] = useState(dailySchedule);
  const [newschedule, setNewSchedule] = useState();
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
        backgroundColor: "background.paper",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <TitleTypography>برنامه من</TitleTypography>
        <FormControl size="small" sx={{ width: "17%", mb: 1 }}>
          <Select
            labelId=""
            id=""
            defaultValue={1}
            onChange={handleScheduleTypeChange}
          >
            <MenuItem value={1}>روزانه</MenuItem>
            <MenuItem value={2}>هفتگی</MenuItem>
            <MenuItem value={3}>ماهیانه</MenuItem>
          </Select>
        </FormControl>
        <Button buttonType="addDashboardSchedule" onClick={addScheduleHandler}>
          + جدید
        </Button>
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
              id={item.id}
              onChange={checkedSchedule}
            />
            <Box
              sx={{
                boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
                width: "100%",
                padding: "30px 20px",
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
