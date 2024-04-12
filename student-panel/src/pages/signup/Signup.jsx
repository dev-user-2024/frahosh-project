import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import yahoo from "../../assests/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import gmail from "../../assests/icons/image8-2.png";
import { Link } from "react-router-dom";
import pic from "../../assests/image/05 1.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupSchema } from "../../validation/validation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [user,setUser] = useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    if(auth.registerStatus === 'success'){
      navigate("/validation-code" , {state:{...user}})
    }
    
}, [auth.registerStatus])

  const LoginUser = async (values) => {
    setUser(values)
    dispatch(registerUser(values));
  };
  return (
    <Box className="login-box" py={2}>
      <Box
        className="login-box1-bg"
        display="flex"
        textAlign="center"
        width={{ xs: "100%", md: "auto" }}
      >
        <Box
          width={{ xs: "100%", md: "auto" }}
          textAlign="center"
          p={{ xs: 4, md: 5 }}
        >
          <p className="login-title">خوش آمدی</p>
          <Stack
            direction={{ md: "column", lg: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              sx={{
                backgroundColor: "#FFEEEC",
                height: "50px",
                mr: 2,
                mb: 2,
              }}
              fullWidth
            >
              <img
                //   className={style.gmail_btn_pic}
                src={gmail}
                alt=""
                width={20}
              />
              <p className="login-google-box">ورود با گوگل</p>
            </Button>
            <Button
              sx={{
                backgroundColor: "#EEE1FF",
                height: "50px",
                mr: 2,
                mb: 2,
              }}
              fullWidth
            >
              <img
                //   className={style.gmail_btn_pic}
                src={yahoo}
                alt=""
              />
              <p className="login-yahoo-box">ورود با یاهو</p>
            </Button>
          </Stack>
          <Box
            display={{ xs: "none", md: "flex" }}
            className="login-border-section"
          >
            <div className="login-border1"></div>
            <p className="login-border-text">یا</p>
            <div className="login-border2"></div>
          </Box>
          <Formik
            initialValues={{
              mobile: "",
              password: "",
              password_confirmation: "",
              role :"student"
            }}
            validationSchema={signupSchema}
            onSubmit={(values, { resetForm }) => {
              LoginUser(values);
            }}
            enableReinitialize={true}
          >
            {({ values, isSubmitting, errors, setFieldValue, touched }) => (
              <Form>
                <Stack direction="column" textAlign="left">
                  <Box mb={2}>
                    <Field
                      placeholder="شماره همراه"
                      className="login-input-style"
                      name="mobile"
                    />
                    <ErrorMessage
                      name="mobile"
                      render={(msg) => (
                        <div style={{ color: "red" }}>{msg}</div>
                      )}
                    />
                  </Box>
                  <Box mb={2}>
                    <Field
                      placeholder="رمز عبور"
                      className="login-input-style"
                      name="password"
                      type='password'
                    />
                    <ErrorMessage
                      name="password"
                      render={(msg) => (
                        <div style={{ color: "red" }}>{msg}</div>
                      )}
                    />
                  </Box>
                  <Box>
                    <Field
                      placeholder="تکرار رمز عبور"
                      className="login-input-style"
                      name="password_confirmation"
                      type='password'
                    />
                    <ErrorMessage
                      name="password_confirmation"
                      render={(msg) => (
                        <div style={{ color: "red" }}>{msg}</div>
                      )}
                    />
                  </Box>
                </Stack>
                <Stack mt={2} direction={{ xs: "row" }}>
                  <input className="login-check-box" type="checkbox" />
                  <Typography color={{ xs: "#1D9BF0", md: "#fff" }}>
                    مرا به خاطر بسپار
                  </Typography>
                </Stack>
                <div>
                  <Button
                    sx={{ mt: 2, backgroundColor: "#1D9BF0" }}
                    fullWidth
                    variant="contained"
                    type="submit"
                  >
                    {auth.registerStatus === "pending"
                      ? "منتظر بمانید"
                      : "ثبت نام"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="login-border3"></div>
          <Box display="flex" justifyContent="center">
            <p style={{ color: "#fff" }}>حساب کاربری داری؟</p>
            <Link to="/login">
              <p style={{ color: "#1D9BF0" }}>وارد شو</p>
            </Link>
          </Box>
        </Box>
        <Box
          className="login-box2-bg"
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <img alt="" src={pic} style={{ marginRight: "50px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
