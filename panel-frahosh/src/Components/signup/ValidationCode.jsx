import React from "react";
import { Stack } from "@mui/system";
import style from "./signout2.module.css";
import gmailBtnPic from "../../assests/icons/image8-2.png";
import yahooBtnPic from "../../assests/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import pic1 from "../../assests/image/Group 549.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser , checkToken } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import OtpInput from "react-otp-input";
import {toast } from 'react-toastify';
const ValidationCode = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const { state } = useLocation();
  const dispatch=useDispatch()
  const auth=useSelector((state)=>state.auth);
  const navigate = useNavigate()

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
 
    if(auth.registerStatus === 'success'){
     setIsTimerActive(true)
     setTimer(120)
    }
    
}, [auth.registerStatus])

useEffect(() => {
    if(auth.token){
      navigate('/')
    }  
}, [auth.token])

const sendToken = () => {
    if(otp.length ===6){
        console.log(true)
        dispatch(checkToken(otp))
    }else{
        toast.info("کد وراد شده باید 6 رقمی باشد")
    }
}
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
                <Typography fontSize="small">{state.phoneNumber}</Typography>
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
                  onClick={()=>{ dispatch(registerUser(state))}}
                >
                  ارسال دوباره
                </Button>
                <Button  fullWidth variant="contained" onClick={()=>{sendToken()}}>
                {auth.registerStatus === "pending" ? "منتظر بمانید" : "تایید" }
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

export default ValidationCode;
