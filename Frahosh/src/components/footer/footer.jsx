
import style from "./footer.module.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import footerLogo from "../../assets/icons/logo-white 1 (1).svg";
import location from "../../assets/image/location.png";
import footerpic1 from "../../assets/image/Rectangle 13.png";
import footerpic2 from "../../assets/image/Rectangle 12.png";
import footerpic3 from "../../assets/image/Rectangle 11.png";
import icon1 from "../../assets/image/Group 38.png";
import icon2 from "../../assets/image/Group 39.png";
import icon3 from "../../assets/image/Group 40.png"
import { Link } from "react-router-dom";
const Footer = () => {

    return (
      <div className={style.footer_bg}>
        <Stack
       className={style.footer_section1}
        direction={{ md: 'column', lg: 'row' }}
        alignItems={{ md: 'center', lg:"flex-start" }}
        justifyContent="space-between"
      >
        <div className={style.footer_section1_1}>
          <div className={style.section1_1_title}>
            <img src={footerLogo} alt="" />
            <h5>فراهوش، هر چیزی که از آموزش می‌خوای!</h5>
          </div>
          <div className={style.section1_1_text}><p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت</p></div>
        <div className={style.section1_1_icons}>
          <a href="https://herewecode.io/" target="_blank" ><img className={style.section1_1_pic} src={icon1} alt="" /></a>
          <img className={style.section1_1_pic} src={icon2} alt="" />
          <img className={style.section1_1_pic} src={icon3} alt="" />
        </div>
        </div>
        <div className={style.footer_links_phone}>
          <Stack className={style.links_phone_sections} direction= 'row'
        justifyContent="space-between">
           
            <div className={style.section1_2_phone}>
            <p className={style.section1_2_title}>سایر</p>
          <div className={style.section1_2_title_border}></div>
          <ul>
            <Link><li className={style.section1_2_li}>درباره ما</li>
            </Link>
            <Link> <li className={style.section1_2_specialli}>تماس با ما</li>
            </Link>
            <Link><li  className={style.section1_2_li}>همکاری با ما</li>
            </Link>
           
          </ul>
            </div> 
            <div className={style.section1_2_phone}>
            <p className={style.section1_2_title}>دسترسی سریع</p>
          <div className={style.section1_2_title_border}></div>
          <ul>
            <Link><li  className={style.section1_2_li}>سرویس‌ها</li>
            </Link>
            <Link><li className={style.section1_2_specialli}>طرح رایگان ویژه مدارس</li>
            </Link>
           
          </ul>
            </div>
          </Stack>
       
        </div>
        <div className={style.footer_section1_links}>
          <p className={style.section1_2_title}>دسترسی سریع</p>
          <div className={style.section1_2_title_border}></div>
          <ul>
            <Link><li  className={style.section1_2_li}>سرویس‌ها</li>
            </Link>
            <Link><li className={style.section1_2_specialli}>طرح رایگان ویژه مدارس</li>
            </Link>
            <Link><li className={style.section1_2_li}>درباره ما</li>
            </Link>
            <Link> <li className={style.section1_2_li}>تماس با ما</li>
            </Link>
           
          </ul>
        </div>
        <div>
          <div>
            <img src={location} alt="" />
          </div>
          <Stack direction="row" justifyContent="center" >
             <img src={footerpic1} alt="" />
            <img className={style.footer_section1_3_pic} src={footerpic2} alt="" />
            <img className={style.footer_section1_3_pic} src={footerpic3} alt="" />
          </Stack>
           
          
        </div>

        </Stack>
        <div className={style.footer_section2}>
        تمامی حقوق مادی و معنوی این وبسایت متعلق به تیم فراهوش می‌باشد.
        </div>
      </div>
    );
}

export default Footer;