import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import "./home-card.css";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import Button from "../buttons/button.component";
import { useTheme } from "@mui/material";
import { Start } from "@mui/icons-material";
import {serverApi} from "../../confing/confing.js"

const Card2 = () => {
  const theme = useTheme();
  var [card, setCard] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data} = await axios.get(`${serverApi}mySweetBlog/getOrderedByCreate`);
        setCard(data.data)
        console.log("2",data)
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
        تازه ترین مقالات
        </Typography>
          <Link to="/Document-list" className="card-link">
            مشاهده همه
            <ArrowLeft />
          </Link>
        </Box>
        <Box className="card-list">
          <Grid container alignItems="start">
            {card.map((i,index) => {
              if (index < 4) 
              return (
                <Grid key={index} xs={6} sm={6} md={4} lg={3} xl={3} className="card-item">
                 <Box sx={{padding:"5px"}}>
                 <Link  to={`/Document/${i.id}`}>
                 <img className="card-item-pic" src={i.image} alt="" />
                 <Typography
                 sx={{
                   color: theme.palette.mode === "dark" ? "#fff" : "#000",
                 }}
                 className="card-item-text">{i.title_blog}</Typography>
               </Link>
                 </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box
          sx={{
            width: "fit-content",
            mx: "auto",
            mt: "20px",
            display: {
              xs: "block",
              lg: "none",
            },
          }}
        >
          <Link to="/Document-list">
            <Button>مشاهده همه</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Card2;
