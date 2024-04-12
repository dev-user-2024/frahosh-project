import React from "react";
import { Stack } from "@mui/system";
import style from "./signout2.module.css";
import gmailBtnPic from "../../assests/icons/image8-2.png";
import yahooBtnPic from "../../assests/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import pic1 from "../../assests/image/Group 549.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, checkToken } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import axios from "axios";
import { serverApi } from "../../confing/confing";
const ForgetPassValidation = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // کاهش زمان تایمر هر ثانیه
  useEffect(() => {
    let intervalId;

    if (isTimerActive && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerActive, timer]);

  // بررسی زمان تمام شدن تایمر
  useEffect(() => {
    if (timer === 0) {
      setIsTimerActive(false);
      // انجام اقدامات مربوط به تمام شدن زمان تایمر
    }
  }, [timer]);

  useEffect(() => {
    if (auth.registerStatus === "success") {
      setIsTimerActive(true);
      setTimer(120);
    }
  }, [auth.registerStatus]);

  const sendToken = async() => {
    try{
      if (otp.length === 6) {
        console.log(true);
        const{ data} = await axios.post(`${serverApi}v1/user-auth/check-token-reset`,
           {
              token : otp
           }
           )
           console.log(data)
      } else {
        toast.info("کد وراد شده باید 6 رقمی باشد");
      }
    }catch(err){
      console.log(err)
    }
  };

  const sendCode = async () => {
    try {
      if (state) {
        console.log({ mobile:state})
        const data = await axios.post(
          `${serverApi}v1/user-auth/forgot-password`,
          { mobile:state}
        );
        console.log(data);
        toast.success("کد برای شما ارسال شد");
        // navigate("/change-pass/validation" , {state : mobile});
      } else {
        toast.error("لطفا شماره موبایل را وارد کنید");
      }
    } catch (err) {
      console.log(err);
      toast.error("شماره موبایل وارد شده صحیح نیست");
    }
  };
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          sx={{
            backgroundColor: "#E8F2F9",
            borderRadius: "50px",
            height: "fit-content",
          }}
        >
          <Stack
            direction={{ md: "column", lg: "row" }}
            justifyContent="center"
            alignItems="satrt"
          >
            <Box p={2} textAlign="center" width={400}>
              <Typography fontWeight={800} mb={3}>
                اعتبار سنجی
              </Typography>
              <Typography mb={3}>
                کد 6 رقمی که برات ارسال شده رو وارد کن
              </Typography>
              {isTimerActive && (
                <Typography mt={4} color="#1D9BF0" variant="h4">
                  {timer}
                </Typography>
              )}
              <Box mt={5} pt={1} display="flex" justifyContent="center">
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
              <Box
                display="flex"
                justifyContent="center"
                mt={4}
                sx={{ fontSize: "small" }}
              >
                <Typography fontSize="small">{state}</Typography>
                <Link
                  to="/signup"
                  style={{ fontSize: "small", color: "#1D9BF0" }}
                >
                  &nbsp;&nbsp;اصلاح شماره موبایل
                </Link>
              </Box>
              <Box mt={5}>
                <Button
                  fullWidth
                  variant="outlined"
                  disabled={isTimerActive}
                  sx={{ mb: 2 }}
                  onClick={() => {
                    sendCode()
                  }}
                >
                  ارسال دوباره
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    sendToken();
                  }}
                >
                  تایید
                </Button>
              </Box>
            </Box>

            <Box height="500px" width={400} className={style.section2}>
              <Box className={style.section2_bg} width={400}></Box>
              <img
                src={pic1}
                alt=""
                className={style.section2_pic1}
                style={{ top: 0 }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default ForgetPassValidation;
