import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import CardPic1 from "../../assets/image/podcast.png";
import CardPic2 from "../../assets/image/podcast (1).png";
import CardPic4 from "../../assets/image/podcast (3).png";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { Box, List, Typography } from "@mui/material";
import Button from "../buttons/button.component";
import { useTheme } from "@mui/material";
import "./home-card.css";
import {serverApi} from "../../confing/confing.js";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {

  const theme = useTheme();
  const [list,setList]= useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data} = await axios.get(`${serverApi}mySweetPodcast/getMostPopular`);
        console.log("podcast",data.data);
        setList(data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  return (
    <Box className="main-card">
      <Box className="MainCard">
        <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between", my:4}}>
          <Typography variant="h4"
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
            mx:2
          }}
          className="card-title"
          >
          محبوب‌ترین پادکست‌های فراهوش
          </Typography>
          <Link to="/Podcast" className="card-link">
            مشاهده همه
            <ArrowLeft />
          </Link>
        </Box>
        <Box className="card-list">
        <Grid container alignItems="start">
        {list.map((i,index) => {
          if (index < 4) 
          return (
            <Grid key={index} xs={6} sm={6} md={4} lg={3} xl={3}  className="card-item">
             <Box sx={{padding:"5px"}}>
             <Link to={`/podcast/${i.id}`}>
             <img className="card-item-pic" width='150px' src={i.image} alt="" />
             <Typography
             sx={{
               color: theme.palette.mode === "dark" ? "#fff" : "#000",
             }}
             className="card-item-text">{i.Fname_Lname}</Typography>
           </Link>
             </Box>
            </Grid>
          );
        })}
      </Grid>
        </Box>
        <Box sx={{width:"fit-content",mx:"auto",mt:"20px",  display: {
          xs: "block",
          lg: "none",
      }}} >
        <Link to="/Podcast">
          <Button>مشاهده همه</Button>
        </Link>
      </Box>
      </Box>
    </Box>
  );
};

export default Card;
