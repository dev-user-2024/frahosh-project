import React from "react";
import Date from "./date";
import { Box, Button, Stack, Typography } from "@mui/material";
import ScheduleCheckBox from "./scheduleCheckBox";
import { useState } from "react";
import Chart from "./Chart";
import styles from "./scheduleProducer.module.css";

const FrahoshProgram = () => {
  const consulationScheduleList = [
    { id: 0, description: " تمرین ریاضی", check: false },
    { id: 1, description: "رسم نمودارهای کلاس دوشنبه", check: false },
    { id: 2, description: "تمرین روخوانی فارسی", check: false },
  ];
  const [schedules, setschedules] = useState(consulationScheduleList);
  const [status, setStatus] = useState(false);
  const checkedSchedule = (event) => {
    console.log(event.target.id);
    schedules[event.target.id] = {
      ...schedules[event.target.id],
      check: event.target.checked,
    };
    setschedules([...schedules]);
  };
  return (
    <Box p={2}>
      <Date />
      <Box mt={3}>
        <Typography variant="h6" fontWeight={700} color="text.primary">
          برنامه روز 16 مرداد
        </Typography>
        {schedules.map((item) => (
          <Stack spacing={2} alignItems="center" mb={2} direction="row">
            <ScheduleCheckBox
              defaultChecked={item.check}
              id={item.id}
              onChange={checkedSchedule}
            />
            <Box
              sx={{
                boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
                width: "100%",
                padding: "30px 20px",
              }}
              className={item.check && styles.donedText}
            >
              {item.description}
            </Box>
          </Stack>
        ))}
        {!status && (
          <Box mt={3} display="flex" justifyContent="space-between">
            <Typography variant="h6" fontWeight={700} color="text.primary">
              دلایل عدم تحقق
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setStatus(!status);
              }}
            >
              اضافه کردن دلیل جدید
            </Button>
          </Box>
        )}
        {status && (
          <Box mt={3}>
            <Chart />
            <Box>
              <Typography variant="h6" fontWeight={700} color="text.primary">
                توصیه مشاور
              </Typography>
              <Box
                p={2}
                sx={{
                  backgroundColor: "background.paper",
                  boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                  color: "text.secondary",
                }}
              >
                <Typography>
                  با آرزوی سلامتی شما برای جبران برنامه انجام نشده، نمودار درس
                  جدید و درس قبلی را باهم رسم کرده و جلسه بعدی به معلم ریاضی
                  تحویل دهید.
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FrahoshProgram;
