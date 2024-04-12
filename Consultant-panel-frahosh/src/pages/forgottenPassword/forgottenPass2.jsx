import { Box, Grid, Typography , Button } from "@mui/material";
import React from "react";
import forgottenPassImg from "../../assests/image/forgetpass.svg";
import styles from "./forgotenPassword.module.css";
import forgottenLogo from "../../assests/image/Group 786.svg";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { serverApi } from "../../confing/confing";
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
export default function ForgottenPass2() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const changePass = async () => {
    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("password_confirmation").value;
    try {
      setLoading(true);
      if (otp.length === 6) {
        if (pass1 && pass2) {
          if (pass1 === pass2) {
            console.log({
              password: pass1,
              password_confirmation: pass2,
              token: otp,
            })
            const data = await axios.post(
              `${serverApi}v1/user-auth/reset-password`,
              {
                password: pass1,
                password_confirmation: pass2,
                token: otp,
              }
            );
            console.log(data);
          } else {
            toast.error("رمز عبور و تکرار رمز عبور باهم مقایرت دارد");
          }
        } else {
          toast.error("لطفا مقادیر رو به درستی وارد کنید");
        }
      } else {
        toast.error("کد ارسال شده باید 6 رقم باشد");
      }
      setLoading(false);
      toast.success("رمز عبور با موفقیت تغییر کرد");
    } catch (error) {
      console.log(error);
      toast.error("خطایی رخ داده است مجددا تلاش کنید");
      setLoading(false);
    }
  };

  return (
    <Box px={3} minHeight='100vh'>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        m="2.5rem 0 4rem 0"
      >
        <img alt="" src={forgottenLogo} />
      </Box>
      <Grid
        container
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box width="100%">
            <TitleTypography>رمز جدید</TitleTypography>
          </Box>
          <Box width="100%">
            <Typography mb="1rem">
              کد اعتبارسنجی که به موبایلت پیامک شده رو اینجا وارد کن.
            </Typography>
            <Box mt={2} pt={1} display="flex" justifyContent="left">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span> &nbsp;&nbsp; </span>}
                containerStyle={{ direction: "ltr" }}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      border: "1px solid #000",
                      width: "40px",
                      height: "40px",
                      borderRadius: "5px",
                      textAlign: "center",
                    }}
                  />
                )}
              />
            </Box>
          </Box>
          <Box className={styles.Box}>
            <form className={styles.forgottenForm}>
              <Box>
                <label htmlFor="password">رمز جدید</label>
                <input type="password" id="password" name="password" />
              </Box>
              <Box>
                <label htmlFor="password_confirmation">تکرار رمز جدید</label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                />
              </Box>
            </form>
            <Button
             variant="contained"
              onClick={() => {
                changePass();
              }}
            >
              {loading ? "منتظر بمانید" : "تغییر رمز"}
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={forgottenPassImg} />
        </Grid>
      </Grid>
    </Box>
  );
}
