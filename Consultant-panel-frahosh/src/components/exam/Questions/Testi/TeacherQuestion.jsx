import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import camera from "../../../../assests/image/icon/camera.png";
import video from "../../../../assests/image/icon/video-play.png";
import FormAddQus from "./FormAddQus";
import { useContext } from "react";
import { examContext } from "../../../../context/examContext";

const TeacherQuestion = ({setStep}) => {
  const {pattern} = useContext(examContext)

  return (
    <div>
      <Grid container spacing={2} p={{ xs: 1, md: 2 }}>
      {
        pattern.type ==1 && <Grid item xs={12} md={6} lg={3}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="هر سوال محدودیت زمانی دارد"
          />
        </FormGroup>
      </Grid>
      }
        <Grid item xs={12} md={6} lg={3}>
          <label htmlFor="upload_file">
            <span
              style={{
                border: "1px solid #6c98b6",
                padding: "6px 8px",
                borderRadius: "5px",
                color: "#6c98b6",
                display: "flex",
                alignItems: "center",
                width: "fit-content",
              }}
            >
              <img width={20} alt="" src={camera} />
              اضافه کردن عکس به آزمون
            </span>
          </label>
          <input type="file" id="upload_file" style={{ display: "none" }} />
        </Grid>
        {
          pattern.type ==1 && <Grid item xs={12} md={6} lg={3}>
          <label htmlFor="upload_file">
            <span
              style={{
                border: "1px solid #6c98b6",
                padding: "6px 8px",
                borderRadius: "5px",
                color: "#6c98b6",
                display: "flex",
                alignItems: "center",
                width: "fit-content",
              }}
            >
              <img width={20} alt="" src={video} />
              اضافه کردن ویدیو به آزمون
            </span>
          </label>
          <input type="file" id="upload_file" style={{ display: "none" }} />
        </Grid>
        }
      </Grid>
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        p={{ xs: 1, md: 2 }}
      >
        <Typography fontWeight={700}>لیست سوالات</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={1}
        p={2}
        sx={{ backgroundColor: "#095385", color: "#fff" }}
      >
        <Typography>تعداد سوالات انتخاب شده : 5</Typography>
        <Typography>جمع بارم : 6</Typography>
      </Box>
      <Box mt={5} px={2}>
      <FormAddQus/>
      </Box>
    </div>
  );
};

export default TeacherQuestion;
