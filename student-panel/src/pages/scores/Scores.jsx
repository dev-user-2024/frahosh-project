import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";
import ScoresChart from "../../Components/scores/ScoresChart";
import ScoresList from "../../Components/scores/ScoresList";
import { useEffect , useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
const Scores = () => {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLogin(true);
            const data = await axios.get(`${serverApi}getMarksOfCourseGroupedByDate/10`, {
              headers: { authorization: `Bearer ${token}` },
            });
            console.log(data);
            // setInfo(data);
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
    <Box mb={3} sx={{ width: '100%' }}>{login && <LinearProgress />}</Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h6" color="text.primary" fontWeight={700} sx={{mr:2}}>
          انتخاب درس
        </Typography>
        <select className="input-style" style={{ width: "200px" }}>
          <option>ریاضی</option>
          <option>ریاضی</option>
          <option>ریاضی</option>
        </select>
      </Box>
      <ScoresChart/>
      <ScoresList/>
    </div>
  );
};

export default Scores;
