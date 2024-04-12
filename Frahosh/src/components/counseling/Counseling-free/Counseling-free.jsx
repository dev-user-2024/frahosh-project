import styles from "./Counseling-free.module.css"
import Person1 from "../../../assets/image/free1.png"
import Person2 from "../../../assets/image/free2.png"
import Person3 from "../../../assets/image/free3.png"
import Person4 from "../../../assets/image/free4.png"
import Person5 from "../../../assets/image/free5.png"
import Grid from '@mui/material/Grid';
import { serverApi } from "../../../confing/confing"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Box, List, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Counselingfree = () => {
    const [list,setList] = useState([])
    const theme = useTheme();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data : free} = await axios.get(`${serverApi}consultant/freeConsultants`);
            // console.log("f",free.data.data);
            setList(free.data.data)
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

    return (
        <Box className={styles.layer3}>
            <Box className={styles.layer2}>
                <Box className={styles.box}>
                <Typography variant="h4"
                        sx={{
                            fontWeight: "600",
                            fontFamily: "Rokh-Bold",
                            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
                            direction: "rtl",
                            mx:2,
                            mb:2,
                            textAlign:"center"
                        }}
                        // className="card-title"
                        >
                        مشاوره های رایگان
                        </Typography>
                    <Grid className={styles.grid} container spacing={{ xs: 10 }}>
                      {
                        list.map((i,index)=> {
                            return   (
                                <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
                            <Box className={styles.card}>
                                <img alt="" className={styles.card_img} src={i.avatar} />
                                <Typography
                                sx={{
                                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                                  width:"100%"
                                }}
                                // className="card-item-text"
                              >
                                {i.Fname} {i.Lname}
                              </Typography>
                            </Box>
                        </Grid>
                        )
                        })
                      }
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Counselingfree;