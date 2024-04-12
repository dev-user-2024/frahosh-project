import { Grid , Box  } from "@mui/material";
import React, { useEffect, useState } from "react";
import picResult from "../../../assests/image/Frame 31.png";
import pic1 from "../../../assests/image/5872637---- 2.png";
import pic2 from "../../../assests/image/Group 485 (1).png";
import pic3 from "../../../assests/image/Group 485.png";
import { Link, useParams } from "react-router-dom";
import styles from "./testdone1.style.module.css"
import { serverApi , token } from "../../../confing/confing";
import axios from "axios";

const TestDone1 = () => {
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
    return ( 
        <Grid width={{md:"1100px"}} container justifyContent={"center"}>
        <Grid xs={12} container className={styles.bg_testdone_header}>
                <div className={styles.bg_header_text}>
                <div className="flex flex-row  m-4"><p>آزمون:</p> <p>
                {info["title"]}
                </p></div>
                <div className="flex flex-row m-4"><p>تاریخ:</p> <p>{info["exam_date"]}</p></div>
                <div className="flex flex-row m-4"><p>نمره:</p> <p>{info["total_score"]}</p></div>
                </div>
        </Grid>
            <Grid xs={12} container>
                <Grid marginBottom={{md:"0" , xs:"3rem"}} xs={12}  sm={6}  md={4} container  justifyContent={"center"} alignItems={"center"} >
                <Link to={`/test_result/${id}`}>
                <div className={styles.testChoice_bg1}>
                <img src={pic1} alt="" />
                </div>
                </Link> 
                </Grid>
                <Grid marginBottom={{md:"0" , xs:"3rem"}} xs={12}  sm={6}  md={4} container  justifyContent={"center"} alignItems={"center"} >
                <Link>
                <div className={styles.testChoice_bg2}>
                <img src={pic2} alt="" />
                </div>
                </Link>
                </Grid>
                <Grid marginBottom={{md:"0" , xs:"3rem"}} xs={12} sm={6} md={4} container  justifyContent={"center"} alignItems={"center"} >
                <Link>
                <div className={styles.testChoice_bg3}>
                <img src={pic3} alt="" />
                </div>
                </Link>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default TestDone1;