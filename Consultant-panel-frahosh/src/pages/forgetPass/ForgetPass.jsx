import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import img from "../../assests/image/forgetpass.png";
import { useTheme } from "@mui/material";

const ForgetPass = () => {
  const theme = useTheme();
  return (
    <Box
      mt={1}
      p={1}
      sx={{
        color: "text.secondary",
      }}
    >
      <Typography variant="h6" color="text.primary" fontWeight={600}>
        حساب کاربری
      </Typography>
      <Grid container my={3} spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} lg={5}>
          <Box mb={3}>
            <Typography variant="p" color="text.primary" fontWeight={500}>
              رمز عبور فعلی
            </Typography>
            <input
              className="input-style"
              style={{
                marginTop: "5px",
              }}
              name="curentPass"
              id="curentPass"
            />
          </Box>
          <Box mb={3}>
            <Typography variant="p" color="text.primary" fontWeight={500}>
              رمز عبور جدید
            </Typography>
            <input
              className="input-style"
              style={{
                marginTop: "5px",
              }}
              name="password"
              id="password"
            />
          </Box>
          <Box mb={3}>
            <Typography variant="p" color="text.primary" fontWeight={500}>
              تکرار رمز عبور جدید
            </Typography>
            <input
              className="input-style"
              style={{
                marginTop: "5px",
              }}
              name="repeatPassword"
              id="repeatPassword"
            />
          </Box>
          <Box display="flex" alignItems="center" mt={6}>
            <Button
              sx={{
                display: "flex",
                height: "48px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
              variant="contained"
              fullWidth
            >
              ذخیره تغییرات
            </Button>
            <Button
              sx={{
                display: "flex",
                height: "48px",
                borderRadius: "10px",
                fontSize: "16px",
                color: theme.palette.mode === "dark" ? "#fff" : "#095385",
                border: "2px solid #095385",
                borderColor: theme.palette.mode === "dark" ? "#fff" : "#095385",
                ml: 3,
              }}
              variant=""
              fullWidth
            >
              انصراف
            </Button>
          </Box>
        </Grid>
        <Grid item display={{ xs: "none", sm: "block" }} sm={6} lg={5}>
          <img alt="img" src={img} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgetPass;
