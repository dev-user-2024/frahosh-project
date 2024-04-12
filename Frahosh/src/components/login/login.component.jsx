import { Stack } from "@mui/system";
import Button from "../buttons/button.component";
import style from "./login.module.css";
import gmailBtnPic from "../../assets/icons/image8-2.png"
import yahooBtnPic from "../../assets/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png"
import pic1 from "../../assets/image/05 1.png"
import { Link } from "react-router-dom";

const LoginPage = () => {
    return ( 
        <div className={style.login}>
            <div className={style.login_card}>
                <Stack direction={{ md: 'column', lg: 'row' }}
                    justifyContent="space-between"
                    alignItems="center">
                    <div className={style.section1}>
                    <div><h3 className={style.title}>خوش اومدی</h3></div>
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
                    </div>
                    <div className={style.bg_checkbox}> 
                        <Stack direction={{lg:"row"}}>
                        <input className={style.checkbox} type="checkbox" />
                        <span class={style.checkbox_sign}></span>
                        <p className={style.checkbox_text}>مرا به خاطر بسپار</p>
                        </Stack>
                        </div>
                    <Button> ورود </Button>
                    <div>
                    <Link>
                    <p className={style.login_withPassword}>رمزت رو فراموش کردی؟</p>
                    </Link>
                        </div>
                    <div className={style.border3}></div>
                    <div className={style.makeUser}>حساب کاربری نداری؟
                        <Link className={style.makeUser_link} to="/signout">
                          بریم بسازیم  
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
 
export default LoginPage;