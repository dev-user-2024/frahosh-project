import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import HomeWorkChart from "../../Components/homework/HomeWorkChart";
import { useEffect , useState } from "react";
import axios from "axios";
import { serverApi , token } from "../../confing/confing";
import AllHomework from "../../Components/homework/AllHomework";
import HomeworkDone from "../../Components/homework/HomeworkDone";
import HomeworkInProgress from "../../Components/homework/HomeworkInProgress";
import HomeworkNotDone from "../../Components/homework/HomeworkNotDone";
const HomeWork = () => {
    const [tab,setTab] = useState(1)
    const [login,setLogin] = useState(false)
    const [done,setDone] = useState([])
    const [inProgress,setinProgress] = useState([])
    const [notDone,setnotDone] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLogin(true)
            const { data } = await axios.get(`${serverApi}taskQuantityOnDoneAndNotDone`, {
              headers: { authorization: `Bearer ${token}` },
            });
            setLogin(false)
            setDone(data.done)
            setinProgress(data.in_progress)
            setnotDone(data.notDone)
            console.log(data)
          } catch (err) {
            setLogin(false)
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
    <HomeWorkChart/>
      <Grid
        container
        spacing={0}
        sx={{
          width: "100%",
          height: "50px",
          border: "1px solid #1d9bf0",
        }}
      >
      <Grid item xs={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1d9bf0",
        color: tab === 1 ? "#fff" : "#1d9bf0",
        backgroundColor: tab === 1 ? "#1d9bf0" : "#fff",
        cursor: "pointer",
      }}
      onClick={() => {
        setTab(1);
      }}
      >
      <Typography
      sx={{ fontSize: { xs: "small", md: "large" } }}
      mx={1}
    >
      همه تکالیف
    </Typography>
      </Grid>
      <Grid item xs={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1d9bf0",
        color: tab === 2 ? "#fff" : "#1d9bf0",
        backgroundColor: tab === 2 ? "#1d9bf0" : "#fff",
        cursor: "pointer",
      }}
      onClick={() => {
        setTab(2);
      }}
      >
      <Typography
      sx={{ fontSize: { xs: "small", md: "large" } }}
      mx={1}
    >
      تکالیف انجام نشده
    </Typography>
      </Grid>
      <Grid item xs={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1d9bf0",
        color: tab === 3 ? "#fff" : "#1d9bf0",
        backgroundColor: tab === 3 ? "#1d9bf0" : "#fff",
        cursor: "pointer",
      }}
      onClick={() => {
        setTab(3);
      }}
      >
      <Typography
      sx={{ fontSize: { xs: "small", md: "large" } }}
      mx={1}
    >
      تکالیف در حال انجام
    </Typography>
      </Grid>
      <Grid item xs={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1d9bf0",
        color: tab === 4 ? "#fff" : "#1d9bf0",
        backgroundColor: tab === 4 ? "#1d9bf0" : "#fff",
        cursor: "pointer",
      }}
      onClick={() => {
        setTab(4);
      }}
      >
      <Typography
      sx={{ fontSize: { xs: "small", md: "large" } }}
      mx={1}
    >
      تکالیف انجام شده
    </Typography>
      </Grid>
      </Grid>
      {
        tab === 1 ? <AllHomework list={[...done,...notDone,...inProgress]}/> : 
        tab === 2 ?  <HomeworkNotDone list={notDone}/> :
        tab === 3 ?  <HomeworkInProgress list={inProgress}/> :
        tab === 4 ?  <HomeworkDone list={done}/> : ""
      }
    </div>
  );
};

export default HomeWork;
