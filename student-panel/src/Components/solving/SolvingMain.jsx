import React from "react";
import {
  HomeOutlined,
  FavoriteBorderOutlined,
  TodayOutlined,
  LibraryMusicOutlined,
  Favorite,
} from "@mui/icons-material";
import {
  BottomNavigationAction,
  BottomNavigation,
  Box,
  colors,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NewQuestion from "./NewQuestion";
import QuestionList from "./QuestionList";
import TelegramBot from "./TelegramBot";

const SolvingMain = () => {
  const [value, setValue] = useState("tab1");

  return (
    <Box p={2}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "50px",
            border: "1px solid #1d9bf0",
          }}
        >
          <Box
            sx={{
              width: "33.33%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color: value === "tab1" ? "#fff" : "#1d9bf0",
              backgroundColor: value === "tab1" ? "#1d9bf0" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setValue("tab1");
            }}
          >
            <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
              سوال جدید
            </Typography>
          </Box>
          <Box
            sx={{
              width: "33.33%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color: value === "tab2" ? "#fff" : "#1d9bf0",
              backgroundColor: value === "tab2" ? "#1d9bf0" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setValue("tab2");
            }}
          >
            <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
              لیست سوالات
            </Typography>
          </Box>
          <Box
            sx={{
              width: "33.33%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color: value === "tab3" ? "#fff" : "#1d9bf0",
              backgroundColor: value === "tab3" ? "#1d9bf0" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setValue("tab3");
            }}
          >
            <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
              ربات تلگرام
            </Typography>
          </Box>
        </Box>
      </Box>
      {value === "tab1" ? (
        <NewQuestion />
      ) : value === "tab2" ? (
        <QuestionList />
      ) : value === "tab3" ? (
        <TelegramBot />
      ) : (
        ""
      )}
    </Box>
  );
};

export default SolvingMain;
