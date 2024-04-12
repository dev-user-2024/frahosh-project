import React from "react";
import { Box } from "@mui/material";
import PlaningCalendar from "../planingClaendar/PlaningCalendar";
import { serverApi , token } from "../../confing/confing";
import { useEffect, useState } from "react";
import axios from "axios";

const RollCall = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}absentsByYearAndMonth?year='2023'&month='06`, {
          headers: { authorization: `Bearer ${token}` }
        });
        // data = data.data
        console.log(data);
        // setList1(list1)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Box p={3}>
      <PlaningCalendar component={2} />
    </Box>
  );
};

export default RollCall;
