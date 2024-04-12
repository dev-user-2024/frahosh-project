import { Grid, Typography } from "@mui/material";
import React from "react";
import pic1 from "../../../assets/image/Mask group (4).png";
import pic2 from "../../../assets/image/Mask group (5).png";
import pic3 from "../../../assets/image/Mask group (6).png";
import pic4 from "../../../assets/image/Mask group (7).png";
import pic5 from "../../../assets/image/Mask group (8).png";
import pic6 from "../../../assets/image/Mask group (9).png";
import pic7 from "../../../assets/image/Mask group (10).png";
import pic8 from "../../../assets/image/Mask group (11).png";
import pic9 from "../../../assets/image/Mask group (12).png";
import pic10 from "../../../assets/image/Mask group (13).png";
import styles from "./section2.style.module.css";
import { useTheme } from "@mui/material";

const Section2 = () => {

    const theme = useTheme()

    return (  
        <div className={styles.sec2_bg}>
            <div className={styles.sec2}>
            <Typography
            variant="h4"
            mx={2}
            sx={{
              fontWeight: "600",
              fontFamily: "Rokh-Bold",
              color:theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
              direction: "rtl",
              mb:2,
            }}
            className="z-pattern-text-title"
          >
             یکم بیشتر درباره امکانات فراهوش بدونیم ...
          </Typography>
                <Grid container >
                    <Grid xs={12} md={2.5} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img  src={pic1}  alt=""/>
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:" 19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>حل سوال درسی</Typography>
                    </div>
                    </Grid>
                    <Grid xs={12} md={2} marginTop={{xs:"0" , md: "4rem"}}  marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img  src={pic2} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:" 19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>پادکست</Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} md={2.5} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic3} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:" 19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>بیگ بلو باتن</Typography>
                    </div>
                    </Grid>
                    <Grid xs={12}  md={2.5} marginTop={{xs:"0" , md: "4rem"}} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic4} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:" 19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500"  , textAlign:"center"}}>حضور و غیاب آنلاین</Typography>
                    </div>
                    </Grid>
                    <Grid xs={12} md={2.5} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic5} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>کارنامه آنلاین</Typography>
                    </div>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid xs={12} md={2.5} marginBottom={{xs:"2rem", md : "0"}}>     
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic6} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>مشاوره</Typography>
                    </div>
                    </Grid>
                    <Grid xs={12} marginTop={{xs:"0" , md: "4rem"}} md={2} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic7} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>آزمون آنلاین</Typography>
                    </div>
                    </Grid>
                    <Grid xs={12} md={2.5} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic8} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>مدرسه فراهوش</Typography>
                    </div>
                    </Grid>
                    <Grid xs={12} marginTop={{xs:"0" , md: "4rem"}} md={2.5} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic9} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"17px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>نمونه سوال امتحانی</Typography>
                    </div>
                    </Grid>
                    <Grid xs={12} md={2.5} marginBottom={{xs:"2rem", md : "0"}}>
                    <div className={styles.card_bg}>
                    <div className={styles.card}>
                            <img src={pic10} alt="" />
                        </div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"19px" , width:"143px" , height:"31px", lineHeight:" 50px" ,  color:"#1D9BF0" , fontWeight:" 500" , textAlign:"center" }}>برنامه‌ریزی درسی</Typography>
                    </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default Section2
;