import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import pic1 from "../../assests/image/07 1.png";
import pic2 from "../../assests/image/Group 798.png";
const ExamPaper1 = ({ info, type }) => {
  return (
    <div>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            height="100%"
            sx={{
              backgroundColor: "background.paper",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: "text.secondary",
            }}
          >
            <Typography>عنوان:{info["title"]}</Typography>
            <Typography>نمره‌:‌{info["score"]}</Typography>
            <Typography>
              تاریخ‌:{" "}
              {info.exam_date &&
                new Intl.DateTimeFormat("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(info.exam_date))}
            </Typography>
            <Typography>
              زمان شروع :{" "}
              {`${new Date(info.start_time).getMinutes()}: ${new Date(
                info.start_time
              ).getHours()}`}
            </Typography>
            <Typography>تعداد سوالات :‌{info["question_limit"]}</Typography>
            <Typography>زمان کل آزمون : {info["total_time"]} دقیقه</Typography>
            <Typography>
              نمره منفی: {info.negative_marking === 0 ? "ندارد" : "دارد"}{" "}
            </Typography>
            <Typography>نمره کل : {info["total_score"]}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              width="100%"
              height={350}
              alt=""
              src={type === 1 ? pic1 : pic2}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExamPaper1;
