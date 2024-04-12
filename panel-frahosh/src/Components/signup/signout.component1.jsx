import { Stack } from "@mui/system";
import Button from "../buttons/button.component";
import style from "./signout.module.css";
import gmailBtnPic from "../../assests/icons/image8-2.png";
import yahooBtnPic from "../../assests/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png";
import pic1 from "../../assests/image/Group 549.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignOutPage = () => {
    var [radioInput , setRadioInput] =  useState({
        "input1" : false ,
        "input2" : false
    }) 
    const changRadioInput = (sitution)=>{
        if (sitution){
             setRadioInput({input1:true})
        }
       else{
        setRadioInput({input2:true})
       }
    }
    return ( 
        <div className={style.login}>
            <div className={style.login_card}>
                <Stack direction={{ md: 'column', lg: 'row' }}
                    justifyContent="space-between"
                    alignItems="center">
                    <div className={style.section1}>
                    <div><h3 className={style.title}>ایجاد حساب</h3></div>
                    <div>
                        <Stack direction={{ md: 'column', lg: 'row' }}
                    justifyContent="center"
                    alignItems="center">
                            <Button buttonType="GmailBtnLogin"><img className={style.gmail_btn_pic} src={gmailBtnPic} alt="" />
                            <p className={style.gmail_btn_text}>ورود با گوگل</p>
                                </Button>
                        <Button buttonType="YahooBtnLogin"><img className={style.gmail_btn_pic} src={yahooBtnPic} alt="" />
                             <p className={style.yahoo_btn_text}>ورود با یاهو</p></Button>
                        </Stack>
                    </div>
                    <div className={style.border_section}>
                        <div className={style.border1}></div>
                        <p className={style.border_text}>یا</p>
                        <div className={style.border2}>   
                    </div>
                    </div>
                    <div>
                        <input className={style.input1} type="text" placeholder="نام کاربری">
                        </input>
                        <input className={style.input2} type="password" placeholder="رمز عبور"></input>
                        <input className={style.input2} type="password" placeholder="تکرار رمز عبور"></input>
                    </div>
                    <div>
                        <form>
                            <input type="radio" value="دانش آموز" checked={radioInput['input1']} />
                            <label>
                            دانش آموز
                            </label>
                            <input type="radio" value="مشاور" onClick={()=>{
                            changRadioInput()
                        }} checked={radioInput['input2']}/>
                            <label>
                            مشاور
                            </label>
                        </form>
                    </div>
                    <Button buttonType="SignBtn"> <Link>
                    ایجاد حساب
                    </Link>
                        </Button>
                    <div className={style.border3}></div>
                    <div className={style.makeUser}>حساب کاربری داری؟
                        <Link className={style.makeUser_link} to="./login">
                          وارد شو :)  
                        </Link>
                    </div>
                    
                </div>
                <div className={style.section2}>
                    <div className={style.section2_bg}>
                    </div>
                    <img src={pic1} className={style.section2_pic1} />
                </div>
                </Stack>
                
            </div>
        </div>
     );
}
 
export default SignOutPage;