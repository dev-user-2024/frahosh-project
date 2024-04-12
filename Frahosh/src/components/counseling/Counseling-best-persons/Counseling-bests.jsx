import styles from "./Counseling-bests.module.css";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { serverApi } from "../../../confing/confing";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import Button from "../../buttons/button.component";
import { Link } from "react-router-dom";

const Counselingbests = () => {
  const [list, setList] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`${serverApi}consultant/bestConsultants`);
        // console.log("b", data);
        setList(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Box className={styles.box}>
      <Typography variant="h4"
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
            mx:2,
            mb:2,
          }}
        //   className="card-title"
          >
          مشاوران برتر
          </Typography>
      <Grid container Spacing={2}>
        {
          list.map((i,index)=> (
            <Grid className={styles.card} item xs={6} sm={4} md={4} lg={3} xl={3}>
          <Box p={2} width='100%'>
            <img alt="" width='100%' height="200px" className={styles.image} src={i.avatar} />
            <Typography
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
                marginTop:"50px"
              }}
            >
              {i.Fname}{i.Lname}
            </Typography>
          </Box>
        </Grid>
          ))
        }
       
      </Grid>
      <Box sx={{width:"fit-content",mx:"auto",mt:"20px",  display: {
        xs: "block",
        lg: "none",
    }}} >
      <Link to="/Podcast">
        <Button>مشاهده همه</Button>
      </Link>
    </Box>
    </Box>
  );
};

export default Counselingbests;
