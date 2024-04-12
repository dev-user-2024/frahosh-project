import React from "react";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";

const SettingPage = () => {
  return (
    <Box mt={1} p={1}>
      <Box mt={1}>
        <Typography variant="h6" color="#1D9BF0" fontWeight={600}>
          صدا و اعلان
        </Typography>
        <FormControl sx={{ my: "20px" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              sx={{ mr: { md: "50px" } }}
              value="female"
              control={<Radio />}
              label="دریافت اعلان دسکتاپ"
            />
            <FormControlLabel
              sx={{ mr: { md: "50px" } }}
              value="male"
              control={<Radio />}
              label="دریافت اعلان‌ها به صورت ایمیل"
            />
          </RadioGroup>
        </FormControl>
        <hr />
      </Box>
      <Box mt={2}>
        <Typography variant="h6" color="#1D9BF0" fontWeight={600}>
          تعیین حالت نمایش
        </Typography>
        <FormControl sx={{ my: "20px" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              sx={{ mr: { md: "50px" } }}
              value="female"
              control={<Radio />}
              label="حالت روز"
            />
            <FormControlLabel
              sx={{ mr: { md: "50px" } }}
              value="male"
              control={<Radio />}
              label="حالت شب"
            />
          </RadioGroup>
        </FormControl>
        <hr />
      </Box>
      <Box mt={2}>
      <Typography variant="h6" color="#1D9BF0" fontWeight={600}>
        حساب کاربری
      </Typography>

      <Typography sx={{ my: "20px" }}>
      <Link to='/forget-password'>تغییر رمز عبور</Link>
      <KeyboardArrowLeftOutlined/>
      </Typography>
    </Box>
    </Box>
  );
};

export default SettingPage;
