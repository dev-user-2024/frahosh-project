import React from "react";
import {
  BottomNavigationAction,
  BottomNavigation,
  Box,
  colors,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { HomeOutlined , FavoriteBorderOutlined , TodayOutlined , LibraryMusicOutlined, Favorite} from '@mui/icons-material';
import HomePodcast from "./HomePodcast";
import FavoritePodcast from "./FavoritePodcast";
import NewPodcast from "./NewPodcast";
import PlayListPodcast from "./PlayListPodcast";
const PodcastMain = () => {
  const [value, setValue] = useState("tab1");
  return (
    <div>
      <Box sx={{ width: "100%"  }}>
        <Box sx={{ width: "100%", display: "flex", height: "50px" ,border: "1px solid #1d9bf0" }}>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color : value === 'tab1' ? "#fff" :"#1d9bf0",
              backgroundColor:value === 'tab1' ? "#1d9bf0" :"#fff",
              cursor:"pointer"
            }}
            onClick={()=> {setValue("tab1")}}
          >
          <HomeOutlined sx={{display:{xs:"none" , sm:"block"},fontSize:{xs:"small" , md:"large"}}}/>
           <Typography sx={{fontSize:{xs:"small" , md:"large"}}} mx={1}>خانه</Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color : value === 'tab2' ? "#fff" :"#1d9bf0",
              backgroundColor:value === 'tab2' ? "#1d9bf0" :"#fff",
              cursor:"pointer"
            }}
            onClick={()=> {setValue("tab2")}}
          >
          <FavoriteBorderOutlined sx={{display:{xs:"none" , sm:"block"},fontSize:{xs:"small" , md:"large"}}}/>
          <Typography sx={{fontSize:{xs:"small" , md:"large"}}} mx={1}>علاقه مندی ها</Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color : value === 'tab3' ? "#fff" :"#1d9bf0",
              backgroundColor:value === 'tab3' ? "#1d9bf0" :"#fff",
              cursor:"pointer"
            }}
            onClick={()=> {setValue("tab3")}}
          >
          <TodayOutlined sx={{ display:{xs:"none" , sm:"block"},fontSize:{xs:"small" , md:"large"}}}/>
          <Typography   sx={{fontSize:{xs:"small" , md:"large"}}} mx={1}>اپیزود های جدید </Typography>

          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color : value === 'tab4' ? "#fff" :"#1d9bf0",
              backgroundColor:value === 'tab4' ? "#1d9bf0" :"#fff",
              cursor:"pointer"
            }}
            onClick={()=> {setValue("tab4")}}
          >
          <LibraryMusicOutlined sx={{display:{xs:"none" , sm:"block"},fontSize:{xs:"small" , md:"large"}}}/>
          <Typography  sx={{fontSize:{xs:"small" , md:"large"}}} mx={1}>لیست پخش</Typography>
          </Box>
        </Box>

        {
          value === 'tab1' ? (<HomePodcast/> ) :
          value === 'tab2' ? (<FavoritePodcast/> ) : 
          value === 'tab3' ? (<NewPodcast/> ) : 
          value === 'tab4' ? (<PlayListPodcast/> ) : ""
        }
      </Box>
    </div>
  );
};

export default PodcastMain;
