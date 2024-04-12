
import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./questions.style.module.css";
import { serverApi , token } from "../../../confing/confing";
import axios from "axios";
import { useParams } from "react-router-dom";


const QuestionList = ({id}) => {
    const [information, setInformation] = useState([{}]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await axios.get(`${serverApi}questionOfExam/${id}`, {
              headers: { authorization: `Bearer ${token}` },
            });
            console.log(data)
            setInformation(data["data"]);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);
    return (
        <div>
            {information.map(i =>{
                return(
                    <Stack className={styles.exam} key={i}>
                    <div>
                    <Typography  sx={{fontFamily:'IRANSansX', fontSize:{md:"16px" , xs:"12px"} , fontWeight:"500" , lineHeight:"32px"}} >
                    <Grid container>
                        <Grid xs={12} md={4} justifyContent={"center"} alignItems={{md:"start" , sx:"center"}}>
                            <p className=" text-center md:text-start">
                             سوال :<span>{i["num"]}</span>
                            </p>
                        </Grid>
                        <Grid xs={12} md={4} justifyContent={"center"} alignItems={"center"}> 
                            <p className="  text-center">
                                زمان پاسخگویی:<span>
                                    {i["time"]}
                                    دقیقه
                                </span>
                            </p>
                        </Grid>
                        <Grid xs={12} md={4} justifyContent={"center"} alignItems={{md:"end" , sx:"center"}}>
                            <p className="md:text-left text-center"> 
                                نمره :<span>{i["result"]}</span>
                            </p>
                        </Grid>
                    </Grid>
                    </Typography>
                    </div>
                        <div>
                            <Typography sx={{fontFamily:'IRANSansX' , fontSize:{md:"14px" , xs:"11px"} , lineHeight:"500%" , color: "#1D9BF0"}}>
                                {i["question"]}
                            </Typography>
                        </div>
                        <div>
                        <Typography  sx={{fontFamily:'IRANSansX' , fontSize:{md:"14px" , xs:"11px"}  , lineHeight:"400%" }}>
                                {i["answer"]}
                        </Typography>
                        </div>
                    </Stack>
                )
            })}
        </div>
    );
}
 
export default QuestionList;