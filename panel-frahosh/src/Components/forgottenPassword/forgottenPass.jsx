import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import forgottenPassImg from "../../assests/image/forgetpass.svg";
import styles from "./forgotenPassword.module.css";
import forgottenLogo from "../../assests/image/Group 786.svg";
import Button from "../buttons/button.component";
import axios from "axios";
import { serverApi } from "../../confing/confing";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function TitleTypography(props) {
 
  return (
    <Typography
      component="p"
      sx={{
        fontFamily: "Rokh-Bold",
        color: "#1D9BF0",
        mb: 2,
        fontSize: "1.13rem",
      }}
      {...props}
    />
  );
}
export default function ForgottenPass() {
  const navigate = useNavigate();
  const sendCode = async () => {
    try {
      const mobile = document.getElementById("mobile").value;
      if (mobile) {
        console.log({ mobile:mobile})
        const data = await axios.post(
          `${serverApi}v1/user-auth/forgot-password`,
          {mobile:mobile}
        );
        console.log(data);
        toast.success("کد برای شما ارسال شد");
        navigate("/reset-pass" , {state : mobile});
      } else {
        toast.error("لطفا شماره موبایل را وارد کنید");
      }
    } catch (err) {
      console.log(err);
      toast.error("شماره موبایل وارد شده صحیح نیست");
    }
  };
  return (
    <>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        m="2.5rem 0 4rem 0"
      >
        <img src={forgottenLogo} />
      </Box>
      <Grid
        container
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box width="100%">
            <TitleTypography>فراموشی رمز</TitleTypography>
          </Box>
          <Box width="100%">
            <Typography mb="1rem">رمزت رو فراموش کردی؟</Typography>
            <Typography mb="2rem">
              شماره موبایلت رو وارد کن تا کد اعتبارسنجی برات ارسال بشه و بتونی
              رمز جدید تعریف کنی.
            </Typography>
          </Box>
          <Box className={styles.Box}>
            <form className={styles.forgottenForm}>
              <label htmlFor="fname">شماره موبایل </label>
              <input type="text" id="mobile" name="fname" />
            </form>
            <Button
              buttonType="forgottenBtn"
              onClick={() => {
                sendCode();
              }}
            >
              ارسال کد اعتبارسنجی
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={forgottenPassImg} />
        </Grid>
      </Grid>
    </>
  );
}
