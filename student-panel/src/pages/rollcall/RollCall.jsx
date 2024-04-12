import React from "react";
import PlaningCalendar from "../../Components/planingClaendar/PlaningCalendar";
import { serverApi, token } from "../../confing/confing";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, LinearProgress } from "@mui/material";
const RollCall = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLogin(true);
        const { data } = await axios.get(
          `${serverApi}absentsByYearAndMonth?year='2023'&month='06`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        console.log(data);
        setLogin(false);
      } catch (err) {
        setLogin(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Box mb={3} sx={{ width: "100%" }}>
        {login && <LinearProgress />}
      </Box>
      <PlaningCalendar component={2} />
    </div>
  );
};

export default RollCall;
