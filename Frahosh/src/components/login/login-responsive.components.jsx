import Pic1 from "../../assets/image/Group 568.png"
import Button from "../buttons/button.component";
import gmailBtnPic from "../../assets/icons/image8-2.png"
import yahooBtnPic from "../../assets/icons/yahoo-rebrand-pentagram_dezeen_2364_col_0--.png"
import styles from './login-responsive.module.css'
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";


const ResponsiveLogin = () => {

    return (
        <div className={styles.login}>
            <div>
                <img className={styles.pic1} src={Pic1} alt=""></img>
            </div>
            <div className={styles.login_card}>
                <div className={styles.login_card_title}><h3>خوش اومدی</h3></div>
                <Button buttonType="responsiveGmailBtnLogin"><img  src={gmailBtnPic} alt="" />
                            <p >ورود با گوگل</p>
                                </Button>
                        <Button buttonType="responsiveYahooBtnLogin"><img src={yahooBtnPic} alt="" />
                             <p >ورود با یاهو</p></Button>
                <div className={styles.border_section}>
                <div className={styles.border1}></div>
                        <p className={styles.border_text}>یا</p>
                        <div className={styles.border2}></div>
                </div>
                <input className={styles.input1} type="text" placeholder="نام کاربری"></input>
                <input className={styles.input2} type="password" placeholder="رمز عبور"></input>
                <div className={styles.bg_checkbox}> 
                        <Stack direction="row">
                        <input className={styles.checkbox} type="checkbox" />
                        <span class={styles.checkbox_sign}></span>
                        <p className={styles.checkbox_text}>مرا به خاطر بسپار</p>
                        </Stack>
                        </div>
                    <Button> ورود </Button>
                    <div><Link>
                    <p className={styles.login_withPassword}>رمزت رو فراموش کردی؟</p>
                    </Link>
                        </div>
                    <div className={styles.border3}></div>
                    <div className={styles.makeUser}>حساب کاربری نداری؟
                        <Link className={styles.makeUser_link}  to="/signout">
                          بریم بسازیم  
                        </Link>
                    </div>
            </div>
        </div>
    );
}
 
export default ResponsiveLogin;