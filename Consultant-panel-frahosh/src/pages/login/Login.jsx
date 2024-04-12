import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import yahoo from "../../assests/image/icon/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import gmail from "../../assests/image/icon/image8-2.png";
import "./style.css";
import { Link } from "react-router-dom";
import pic from "../../assests/image/05 1.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "../../validation/validation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) {
      navigate("/");
    }
  }, [auth]);

  const LoginUser = async (values) => {
    dispatch(loginUser(values));
    // let SendData = { mobile, password };
    // console.log(values);
    // const data = await axios.post(
    //   `${serverApi}v1/user-auth/user-login`,
    //   values
    // );
    // console.log(data);
  };
  return (
    <Box className="login-box">
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
            initialValues={{ mobile: "", password: "" }}
            validationSchema={LoginSchema}
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
                  <Box>
                    <Field
                      placeholder="رمز عبور"
                      className="login-input-style"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
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
                      : "ورود"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <div>
            <Link to="/forgottenpassword">
              <p style={{ color: "#1D9BF0" }}>رمزت رو فراموش کردی؟</p>
            </Link>
          </div>
          <div className="login-border3"></div>
          <Box display="flex" justifyContent="center">
            <p style={{ color: "#fff" }}>حساب کاربری نداری؟</p>
            <Link to="/signup">
              <p style={{ color: "#1D9BF0" }}>ایجاد حساب کاربری</p>
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

export default Login;
