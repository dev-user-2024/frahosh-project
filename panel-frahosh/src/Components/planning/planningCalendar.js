import React, { useState } from "react";
import PlaningCalendar from "../planingClaendar/PlaningCalendar";
import { Grid, Typography } from "@mui/material";
import styles from "./planningCalendar.styles.module.css";
import Section1 from "./sec-1/section1";
import Section2 from "./sec-2/section2";
import Section3 from "./sec-3/section3";

const PlanningCalendarSec = () => {
    const [show , setShow] = useState(0);
    const changHandler = (num) => {
        setShow(num)
        console.log(show)
      }
    return ( 
        <div>
            <div className={styles.bg}>
                <div>
                  <Grid container>
                    <Grid md={3} sm={5} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className={styles.card_bg} style={{background: show === 1 ? "#1D9BF0" : "#FAFAFA" , color : show === 1 ?  " #FFFFFF" : " #1D9BF0" }} onClick={()=>{
                          changHandler(1)
                        }}>
                            <Typography sx={{fontFamily:"Rokh-Bold", fontSize:"18px"}}>
                            برنامه
                            </Typography>
                        </div>
                    </Grid>
                    <Grid md={3}  sm={5} xs={12}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className={styles.card_bg} style={{background: show === 2 ? "#1D9BF0" : "#FAFAFA" , color : show === 2 ?  " #FFFFFF" : " #1D9BF0" }} onClick={()=>{
                          changHandler(2)
                        }}>
                            <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"18px"}}>
                            تحلیل
                            </Typography>
                        </div>
                    </Grid>
                    <Grid md={3}  sm={5} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <div className={styles.card_bg} style={{background: show === 3 ? "#1D9BF0" : "#FAFAFA" , color : show === 3 ?  " #FFFFFF" : " #1D9BF0" }} onClick={()=>{
                          changHandler(3)
                        }}>
                            <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"18px"}}>
                            دلنوشته
                            </Typography>
                        </div>
                    </Grid>
                  </Grid>
                </div>
                <div style={{display: show === 1 ? "block" : "none"}}>
                    <Section1 />
                </div>
                <div style={{display: show === 2 ? "block" : "none"}}>
                <Section2 />
                </div>
                <div style={{display: show === 3 ? "block" : "none"}}>
                <Section3 />
                </div>
            </div>
        </div>
     );
}
 
export default PlanningCalendarSec;