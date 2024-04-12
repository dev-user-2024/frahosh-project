import { Stack } from "@mui/system";
import Button from "../buttons/button.component";
import style from "./login.module.css";
import gmailBtnPic from "../../assests/icons/image8-2.png";
import yahooBtnPic from "../../assests/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import pic1 from "../../assests/image/05 1.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { validate } from "../Validate/Validate";
const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // console.log("loginUserpage")

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
      <div className={style.login}>
        <div className={style.login_card}>
          <Stack
            direction={{ md: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <div className={style.section1}>
              <div>
                <h3 className={style.title}>خوش اومدی</h3>
              </div>
              <div>
                <Stack
                  direction={{ md: "column", lg: "row" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button buttonType="GmailBtnLogin">
                    <img
                      className={style.gmail_btn_pic}
                      src={gmailBtnPic}
                      alt=""
                    />
                    <p className={style.gmail_btn_text}>ورود با گوگل</p>
                  </Button>
                  <Button buttonType="YahooBtnLogin">
                    <img
                      className={style.gmail_btn_pic}
                      src={yahooBtnPic}
                      alt=""
                    />
                    <p className={style.yahoo_btn_text}>ورود با یاهو</p>
                  </Button>
                </Stack>
              </div>
              <div className={style.border_section}>
                <div className={style.border1}></div>
                <p className={style.border_text}>یا</p>
                <div className={style.border2}></div>
              </div>
              <div style={{ paddingRight: "20px" }}>
                <input
                  className={style.input1}
                  type="text"
                  placeholder="شماره همراه"
                  name="mobile"
                  onChange={changeHandler}
                  onFocus={focusHanlder}
                />
                <input
                  className={style.input1}
                  type="password"
                  placeholder="رمز عبور"
                  name="password"
                  onChange={changeHandler}
                  onFocus={focusHanlder}
                />
              </div>
              <div className={style.bg_checkbox}>
                <Stack direction={{ lg: "row" }}>
                  <input className={style.checkbox} type="checkbox" />
                  <span className={style.checkbox_sign}></span>
                  <p className={style.checkbox_text}>مرا به خاطر بسپار</p>
                </Stack>
              </div>
              <Button>
                {auth.registerStatus === "pending" ? "submiting" : "ورود"}
              </Button>
              <div>
                <Link to="/forgottenpassword">
                  <p className={style.login_withPassword}>
                    رمزت رو فراموش کردی؟
                  </p>
                </Link>
              </div>
              <div className={style.border3}></div>
              <div className={style.makeUser}>
                حساب کاربری نداری؟
                <Link className={style.makeUser_link} to="/signup">
                  بریم بسازیم
                </Link>
              </div>
            </div>
            <div className={style.section2}>
              <div className={style.section2_bg}></div>
              <img src={pic1} className={style.section2_pic1} />
            </div>
          </Stack>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
