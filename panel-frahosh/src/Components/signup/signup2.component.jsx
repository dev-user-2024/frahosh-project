import { Stack } from "@mui/system";
import Button from "../buttons/button.component";
import style from "./signout2.module.css";
import gmailBtnPic from "../../assests/icons/image8-2.png";
import yahooBtnPic from "../../assests/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import pic1 from "../../assests/image/Group 549.png";
import { Link } from "react-router-dom";
import React, {useState,useEffect} from "react";
import { validate } from "../Validate/Validate";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignOutPage2 = () => {

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate= useNavigate()
  const auth=useSelector((state)=>state.auth);
  const dispatch=useDispatch()
  
const [user,setUser] =useState(
    {
      
        password: "",
        confirmPassword: "",
        phoneNumber:"",
        role:"student",
    }
)
 
useEffect(() => {
  // console.log("user",user)
    setErrors(validate(user, "signup"))
    if(auth.token){
      navigate('/')
    }  
}, [user, touched,auth.token,navigate])

useEffect(() => {
  console.log(auth.registerStatus)
    if(auth.registerStatus === 'success'){
      navigate("/validation-code" , {state:{...user}})
    }
    
}, [auth.registerStatus])

const changeHandler = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
}

const focusHanlder = event => {
    setTouched({ ...touched, [event.target.name]: true })
}

const submitHandler =async (event) => {
  console.log(errors)
  console.log(user)
    if (!Object.keys(errors).length) {
      console.log("zahra")
        event.preventDefault();
        dispatch(registerUser(user))
    } else {
        console.log("Invalid data!", "error")
        event.preventDefault();
        setTouched({
            // name: true,
            // email: true,
            password: true,
            confirmPassword: true,
            phoneNumber : true,
            isAccepted: true
        })
    }
}

  return (
    <form onSubmit={submitHandler} >
    <div className={style.login}>
      <div className={style.login_card}>
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <div className={style.section1}>
            <div>
              <h3 className={style.title}>ایجاد حساب</h3>
            </div>
            <div>
              <Stack
                direction={{ md: "column", lg: "row" }}
                justifyContent="center"
                rowGap={2}
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
            <div>
            {
              /*
              <input
                // className={style.input1}
                className={(errors.name && touched.name) ? style.uncompleted : style.input2}
                type="text"
                name="name"
                value={user.name}
                onChange={changeHandler}
                onFocus={focusHanlder}
                placeholder="نام"
              />
              {errors.password && touched.password && <span className={style.hintStyle}>{errors.name}</span>}

              <input
                // className={style.input2}
                className={(errors.lastName && touched.lastName) ? style.uncompleted : style.input2}
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={changeHandler}
                onFocus={focusHanlder}
                placeholder="نام خانوادگی"
              />
              {errors.password && touched.password && <span className={style.hintStyle}>{errors.lastName}</span>}

             
               <input
                // className={style.input2}
                type="text"
                className={(errors.nationalCode && touched.nationalCode) ? style.uncompleted : style.input2}
                name="nationalCode"
                value={user.nationalCode}
                onChange={changeHandler}
                onFocus={focusHanlder}
                placeholder="کدملی"
              />
              {errors.password && touched.password && <span className={style.hintStyle}>{errors.nationalCode}</span>}

             
              <input
                type="text"
                className={(errors.email && touched.email) ? style.uncompleted : style.input2}
                name="email"
                value={user.email}
                onChange={changeHandler}
                onFocus={focusHanlder}
                placeholder="آدرس ایمیل"
               />
              {errors.password && touched.password && <span className={style.hintStyle}>{errors.email}</span>}
 */
            }
            <input
            // className={style.input2}
            className={(errors.phoneNumber && touched.phoneNumber) ? style.uncompleted : style.input2}
            type="number"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={changeHandler}
            onFocus={focusHanlder}
            placeholder="موبایل"
          />
          {errors.phoneNumber && touched.phoneNumber && <span className={style.hintStyle}>{errors.phoneNumber}</span>}              <input
                // className={style.input2}
                type="password"
                className={(errors.password && touched.password) ? style.uncompleted : style.input2}
                name="password"
                value={user.password}
                onChange={changeHandler}
                onFocus={focusHanlder}
                placeholder="رمز عبور"
              />
              {errors.password && touched.password && <span className={style.hintStyle}>{errors.password}</span>}
              <input
                // className={style.input2}
                className={(errors.confirmPassword && touched.confirmPassword) ? style.uncompleted : style.input2}
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={changeHandler}
                onFocus={focusHanlder}
                placeholder="تکرار رمز عبور"
              />
              {errors.confirmPassword && touched.confirmPassword && <span className={style.hintStyle}>{errors.confirmPassword}</span>}

              {
                /*
                <input
                // className={style.input2}
                className={(errors.confirmPassword && touched.confirmPassword) ? style.uncompleted : style.input2}
                type="text"
                name="role"
                value={user.role}
                onChange={changeHandler}
                onFocus={focusHanlder}
                placeholder="دانش اموز /معلم /مشاور ؟!"
              />
                            {errors.confirmPassword && touched.confirmPassword && <span className={style.hintStyle}>{errors.confirmPassword}</span>}
                */
              }

            </div>
            <Button buttonType="SignBtn" type="submit">
              {auth.registerStatus === "pending" ? "منتظر بمانید" : "ایجاد حساب" }
            </Button>
            <div className={style.border3}></div>
            <div className={style.makeUser}>
              حساب کاربری داری؟
              <Link className={style.makeUser_link} to="/login">
                وارد شو 
              </Link>
            </div>
          </div>
          <div className={style.section2}>
            <div className={style.section2_bg}></div>
            <img src={pic1} alt="" className={style.section2_pic1} />
          </div>
        </Stack>
      </div>
    </div>
    </form>
  );
};

export default SignOutPage2;
