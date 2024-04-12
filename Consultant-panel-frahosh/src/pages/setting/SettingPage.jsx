import React from "react";
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material";
const SettingPage = () => {
  const theme = useTheme();
  return (
    <Box mt={1}  p={{xs:1,md:2}} textAlign="left">
      <Box mt={1}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
          }}
        >
          صدا و اعلان
        </Typography>
        <FormControl sx={{ my: "20px" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              sx={{
                mr: { md: "50px" },
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
              value="female"
              control={<Radio />}
              label="دریافت اعلان دسکتاپ"
            />
            <FormControlLabel
              sx={{
                mr: { md: "50px" },
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
              value="male"
              control={<Radio />}
              label="دریافت اعلان‌ها به صورت ایمیل"
            />
          </RadioGroup>
        </FormControl>
        <hr />
      </Box>
      <Box mt={2}>
        <Typography
          variant="h6"
          color="#1D9BF0"
          fontWeight={600}
          sx={{
            color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
          }}
        >
          تعیین حالت نمایش
        </Typography>
        <FormControl sx={{ my: "20px" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              sx={{
                mr: { md: "50px" },
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
              value="female"
              control={<Radio />}
              label="حالت روز"
            />
            <FormControlLabel
              sx={{
                mr: { md: "50px" },
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
              value="male"
              control={<Radio />}
              label="حالت شب"
            />
          </RadioGroup>
        </FormControl>
        <hr />
      </Box>
      <Box mt={2}>
        <Typography
          variant="h6"
          color="#1D9BF0"
          fontWeight={600}
          sx={{
            color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385",
          }}
        >
          حساب کاربری
        </Typography>
        <Link to="./forgotpass">
        <Box display='flex'alignItems='center' sx={{color: theme.palette.mode === "dark" ? "#fff" : "#000"}}>
        <Typography
        sx={{
          my: "20px",
          alignItems:"center"
        }}
      >
        تغییر رمز عبور
      </Typography>
      <KeyboardArrowLeftOutlined  />
        </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default SettingPage;
