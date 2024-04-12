import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import img from "../../assests/image/forgetpass.png"

const ForgetPass = () => {
  return (
    <Box mt={1} p={1}>
      <Typography variant="h6" color="#1D9BF0" fontWeight={600}>
        حساب کاربری
      </Typography>
      <Grid container my={3} spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} lg={5}>
          <Box mb={3}>
            <label htmlFor="curentPass">رمز عبور فعلی</label>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
              }}
              name="curentPass"
              id="curentPass"
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="password">رمز عبور جدید</label>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
              }}
              name="password"
              id="password"
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="repeatPassword"> تکرار رمز عبور جدید</label>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
              }}
              name="repeatPassword"
              id="repeatPassword"
            />
          </Box>
          <Box mb={2} display='flex'>
          <Button sx={{mr:"5px" , backgroundColor:"#1D9BF0"}} variant="contained" fullWidth>ذخیره تغییرات</Button>
          <Button sx={{border:"1px solid #1D9BF0" , color:"#1D9BF0"}} variant="outlined" fullWidth>انصراف</Button>
          </Box>
        </Grid>
        <Grid item display={{xs:"none" , sm:"block"}} sm={6} lg={5}>
        <img alt="img" src={img} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgetPass;
