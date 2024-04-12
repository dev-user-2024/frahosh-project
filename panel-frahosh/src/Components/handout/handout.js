
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./handout.styles.module.css";
import WestIcon from '@mui/icons-material/West';
import { Swiper, SwiperSlide } from "swiper/react";
import {useDropzone} from 'react-dropzone';
import { serverApi , token } from "../../confing/confing";
import axios from "axios";
import { Link } from "react-router-dom";

const Section1 = () => {
    const [list  , setList] = useState([]);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
     useEffect(() => {
        console.log(token)
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}handout`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    const [showdrop , setShowdrop] = useState(false);
    const handleShow = state => {
        if( state === 0){
            setShowdrop(false)
        }
        if(state === 1) {
            setShowdrop(true)
        }
        // console.log(state)
    }
    const [bgcolor , setBgcolor] = useState(2);
    const handleChange = state => {
        if(state === 10){
            setBgcolor(1)
        }
        if (state === 2){
            setBgcolor(2)
        }
        if (state === 3){
            setBgcolor(3)
        }
        // console.log(state)
    }
    return ( 
        <div>
            <div className={styles.sec_bg}>
                <Grid container width={"100%"}>
                    <Grid xs={4}>
                        <div onClick={()=>{
                            handleChange(10)
                            handleShow(1)
                        }} 
                        style={{background: bgcolor === 1 ? "#1D9BF0" : "#FAFAFA" , color: bgcolor !== 1 ?  "#1D9BF0" :"#FAFAFA"}}
                        className={styles.card}>
                        جزوه‌های من
                        </div>
                    </Grid>
                    <Grid xs={4} >
                    <div onClick={()=>{
                            handleChange(2)
                            handleShow(0)
                        }}
                        style={{background: bgcolor === 2 ? "#1D9BF0" : "#FAFAFA" , color: bgcolor !== 2 ?  "#1D9BF0" :"#FAFAFA"}}  className={styles.card}>
                    جزوه‌های دوستان
                        </div>
                    </Grid>
                    <Grid xs={4}>
                        <div onClick={()=>{
                            handleChange(3)
                            handleShow(3)
                        }} 
                        style={{background: bgcolor === 3 ? "#1D9BF0" : "#FAFAFA" , color: bgcolor !== 3 ?  "#1D9BF0" :"#FAFAFA"}}
                        className={styles.card}>
                        جزوه‌های معلم
                        </div>
                    </Grid>
                </Grid>
                <div className={styles.dropzone_bg} style={{display: showdrop ? "flex" : "none"}}>
            <section className={styles.dropzone}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>بارگذاری جزوه یا فیلم</p>
      </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </section>

            </div>
                <Grid container margin={"2rem"} padding={{md:"0" , xs:"2rem"}}>
                <Grid md={3} xs={12} sm={5}>
                <div className=" flex flex-row align-middle  items-center">
                <div className=" w-1/2">
                <Typography sx={{fontFamily:"Rokh-Bold" , fontSize: {md:"14px" , xs:"12px"} , color:"#1D9BF0", fontWeight:"600px"}}>انتخاب درس</Typography>
                </div>
                <div className=" w-1/2">
                <TextField dir="rtl" id="select"  value="10" select>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="10">ریاضی</MenuItem>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="20">فیزیک</MenuItem>
                </TextField>
                </div>
                </div>
                </Grid>
                <Grid md={4} xs={12} sm={6}>
                <div className=" flex flex-row align-middle  items-center">
                <div className=" w-1/2">
                <Typography sx={{fontFamily:"Rokh-Bold" , fontSize: {md:"14px" , xs:"12px"} , color:"#1D9BF0" , fontWeight:"600px"}}>انتخاب جلسه</Typography>
                </div>
                <div className=" w-1/2">
                <TextField dir="rtl" id="select"  value="10" select style={{width:"90%"}}>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="10">همه جلسات</MenuItem>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="20">جلسه اول</MenuItem>
                </TextField>
                </div>
                </div>
                </Grid>
                <Grid md={4} xs={12} sm={6}>
                <div className=" flex flex-row align-middle  items-center">
                <div className=" w-1/2">
                <Typography sx={{fontFamily:"Rokh-Bold" , fontSize: {md:"14px" , xs:"12px"} , color:"#1D9BF0", fontWeight:"600px"}}>انتخاب نوع جزوه</Typography>
                </div>
                <div className=" w-1/2">
                <TextField dir="rtl" id="select"  value="10" select style={{width:"90%"}}>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="10">همه</MenuItem>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="20">متنی</MenuItem>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="30">ویدیویی</MenuItem>
                </TextField>
                </div>
                </div>
                </Grid>
                </Grid>
                <div>
                <Swiper className={styles.slider}
                            direction={"vertical"}>
                            {
                                list.map(element => {
                                   return(
                                    <SwiperSlide className={styles.Slide}>
                                    <div className="flex justify-between align-middle items-center p-5  h-full w-full">
                                        <div className="flex flex-row align-middle items-start w-full gap-6 justify-between ">
                                            <div className="flex flex-row items-start align-middle">
                                                <p className={styles.numberFracoins}>{element.date}</p>
                                            </div>
                                            <p className={styles.date_time}>{element.session}</p>
                                            <Link to={`/handout/text/${element.id}`}>
                                            <WestIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                   )
                                })
                            }
                </Swiper>
                </div>
            </div>
        </div>
     );
}
 
export default Section1;