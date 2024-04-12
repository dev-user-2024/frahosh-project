import Pic1 from "../../assests/image/Group 568.svg";
import Button from "../buttons/button.component";
import gmailBtnPic from "../../assests/icons/image8-2.png";
import yahooBtnPic from "../../assests/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import styles from "./login-responsive.module.css";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { validate } from "../Validate/Validate";

const ResponsiveLogin = () => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    lastName: "",
    nationalCode: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    // isAccepted: false
  });

  useEffect(() => {
    setErrors(validate(data, "signup"));
    // console.log(auth);
    if (auth.token) {
      navigate("/");
    }
  }, [data, touched, auth.token, navigate]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    if (event.target.name === "name") {
      setUser([...user, (user.name = event.target.value)]);
    }
    // console.log(data)
  };

  const focusHanlder = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // if (!Object.keys(errors).length) {
    //     notify("You signed up successfully", "success")
    // } else {
    //     notify("Invalid data!", "error")
    //     setTouched({
    //         name: true,
    //         email: true,
    //         password: true,
    //         confirmPassword: true,
    //         isAccepted: true
    //     })
    // }
    dispatch(loginUser(data));
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.login}>
        <div className={styles.login_card}>
          <div className={styles.login_card_title}>
            <h3>خوش اومدی</h3>
          </div>
          <Button
            style={{ marginBottom: "15px" }}
            buttonType="responsiveGmailBtnLogin"
          >
            <img src={gmailBtnPic} alt="" />
            <p>ورود با گوگل</p>
          </Button>
          <Button buttonType="responsiveYahooBtnLogin">
            <img src={yahooBtnPic} alt="" />
            <p>ورود با یاهو</p>
          </Button>
          <div className={styles.border_section}>
            <div className={styles.border1}></div>
            <p className={styles.border_text}>یا</p>
            <div className={styles.border2}></div>
          </div>
          <input
            className={styles.input1}
            type="text"
            placeholder="شماره همراه"
            name="mobile"
            onChange={changeHandler}
            onFocus={focusHanlder}
          />
          <input
            className={styles.input2}
            type="password"
            placeholder="رمز عبور"
            name="password"
            onChange={changeHandler}
            onFocus={focusHanlder}
          />
          <div className={styles.bg_checkbox}>
            <Stack direction="row">
              <input className={styles.checkbox} type="checkbox" />
              <span className={styles.checkbox_sign}></span>
              <p className={styles.checkbox_text}>مرا به خاطر بسپار</p>
            </Stack>
          </div>
          <Button> ورود </Button>
          <div>
            <Link to="/forgottenpassword">
              <p className={styles.login_withPassword}>رمزت رو فراموش کردی؟</p>
            </Link>
          </div>
          <div className={styles.border3}></div>
          <div className={styles.makeUser}>
            حساب کاربری نداری؟
            <Link className={styles.makeUser_link} to="/signup">
              بریم بسازیم
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ResponsiveLogin;
