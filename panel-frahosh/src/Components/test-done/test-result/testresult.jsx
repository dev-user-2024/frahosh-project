import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import pic1 from "../../../assests/image/07 1.png";
import pic2 from "../../../assests/image/Group 798.png";
import QuestionList from "./qeustions";
import styles from "./testresult.style.module.css";
import { serverApi , token } from "../../../confing/confing";
import axios from "axios";
import { useParams } from "react-router-dom";

const TestResultSec = () => {
    const [info , setInfo] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await axios.get(`${serverApi}exam/${id}`, {
              headers: { authorization: `Bearer ${token}` },
            });
            console.log(data["data"])
            setInfo(data["data"])
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);
    const pics = {pic1 , pic2};
    const [pic,setPic] =  useState(pics.pic1);
    const [show , setShow]  = useState(false)
    const changePic = () =>{
        setPic(pics.pic2)
    }
    const handleChange = () =>{
        setShow(!show)
    }
    return ( 
        <Stack>
        <Typography sx={{fontFamily:"Rokh-Bold" , fontSize:"18px" , color:"#1D9BF0" , lineHeight:"23px" , textAlign:{md:"right" , xs:"center"}}}>برگه امتحان</Typography>
        <Typography sx={{fontFamily:'IRANSansX' , fontSize:"14px" , lineHeight:"300%" , textAlign:{md:"right" , xs:"center"}}}>
        سوالات امتحان و جواب‌هایی که دادی و نمره هر سوال رو به راحتی ببین و بررسی کن.
        </Typography>
        <Stack direction={{md:"row" , xs:"column"}} justifyContent={"space-between"} alignItems={"center"}>
            <Stack direction={"column"} width={"100%"} justifyContent={"center"} alignItems={{xs:"center" , md:"flex-start"}} >
            <Box sx={{width:{md:"433px" , xs:"80%"} , height:"394px" , background:" #FAFAFA" , boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)"}}>
            <Typography sx={{fontFamily:'IRANSansX' , fontSize:"14px" , lineHeight:"300%" , padding:"1rem"}}>
            <ul>
            <li>عنوان:{info["title"]}</li>
            <li>نمره‌:‌{info["score"]}</li>
            <li>تاریخ‌:‌{info["exam_date"]}</li>
            <li>زمان شروع : {info["start_time"]}</li>
            <li>تعداد سوالات :‌{info["question_limit"]}</li>
            <li>زمان کل آزمون : {info["total_time"]}</li>
            <li>نمره کل : {info["total_score"]}</li>
            </ul>
            </Typography>
            </Box>
            <div className={styles.bg_btn}>
            <button className={styles.btn} style={{display: show ? "none" : "block"}} onClick={()=>{
                changePic();
                handleChange();
            }} >
            مشاهده برگه امتحان
            </button>
            </div>
            </Stack>
            <div>
                <img src={pic} alt="" />
            </div>
        </Stack>
        <div style={{display: show ?  "block" : "none"}} >
            <QuestionList id={id} />
        </div>
        </Stack>
     );
}
 
export default TestResultSec;