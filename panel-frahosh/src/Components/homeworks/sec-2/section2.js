import { Grid, Typography,Box } from "@mui/material";
import React, { useState , useEffect } from "react";
import styles from "./section2.styles.module.css";
import axios from "axios";
import { serverApi , token } from "../../../confing/confing";
import { Link } from "react-router-dom";

const Section2 = () => {
  const [list , setList] = useState([])
  const [ listDone , setListDone] = useState([])
  const [ listToDo , setListToDo] = useState([])
  const [ listNotDone , setListNotDone] = useState([])
  const [show, setShow] = useState(0);
  const [statistic, setStatistic] = useState(100);
  const [statistic1, setStatistic1] = useState(70);
  const [value, setValue] = useState("tab1");

  const changeStatistic = () => {
    setStatistic(60);
  };
   useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}taskQuantityOnDoneAndNotDone`, {
          headers: { authorization: `Bearer ${token}` },
        });
        let list2 = data["done"].concat(data["in_progress"] ,data["notDone"] );
        setList(list2)
        const dataDone = data["done"]
        setListDone(dataDone)
        setListToDo(data["in_progress"])
        setListNotDone(data["notDone"])
        // setInfo(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.sec_bg}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "50px",
            border: "1px solid #1d9bf0",
          }}
          mt={3}
        >
          <Box
            sx={{
              width: "25%",
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
              همه تکالیف
            </Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
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
              تکالیف انجام شده
            </Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
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
              تکالیف در حال انجام
            </Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color: value === "tab4" ? "#fff" : "#1d9bf0",
              backgroundColor: value === "tab4" ? "#1d9bf0" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setValue("tab4");
            }}
          >

            <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
              تکالیف انجام نشده
            </Typography>
          </Box>
        </Box>
        {
          list.map(element => {
            return(
              <div key={element["id"]} className={styles.charth_bg_done} style={{display: value === "tab1" ? "flex" : "none" }}>
        <Typography sx={{ margin: "1rem", fontFamily: "IRANSansX" }}>
            تکلیف درس {element["name"]}
          </Typography>
          <div className={styles.charth}>
            <div>100%</div>
            <div className={styles.precetchartbg}>
              <div
                className={styles.precetchart}
                style={{ width: `${statistic}%` }}
              ></div>
            </div>
            <div>0%</div>
          </div>
        </div>
    
            )
          })
        }
        {
          listDone.map(element => {
            let url = `/homework-done/${element.id}`;
            return(
              <Link style={{width:"100%"}} to={url}>
              <div key={element["id"]} className={styles.charth_bg_done} style={{display: value === "tab2" ? "flex" : "none" }}>
        <Typography sx={{ margin: "1rem", fontFamily: "IRANSansX" }}>
            تکلیف درس {element["name"]}
          </Typography>
          <div className={styles.charth}>
            <div>100%</div>
            <div className={styles.precetchartbg}>
              <div
                className={styles.precetchart}
                style={{ width: `${statistic}%` }}
              ></div>
            </div>
            <div>0%</div>
          </div>
        </div>
        </Link>
            )
          })
        }
        {
          listToDo.map(element => {
            let url = `/homework-doing/${element.id}`
            return(
              <Link style={{width:"100%"}} to={url}>
              <div key={element["id"]} className={styles.charth_bg_done} style={{display: value === "tab3" ? "flex" : "none" }}>
        <Typography sx={{ margin: "1rem", fontFamily: "IRANSansX" }}>
            تکلیف درس {element["name"]}
          </Typography>
          <div className={styles.charth}>
            <div>100%</div>
            <div className={styles.precetchartbg}>
              <div
                className={styles.precetchart}
                style={{ width: `${statistic}%` }}
              ></div>
            </div>
            <div>0%</div>
          </div>
        </div>
        </Link>
            )
          })
        }
        {
          listNotDone.map(element => {
            let url = `/homework-not-done/${element.id}`
            return(
              <Link style={{width:"100%"}} to={url}>
              <div key={element["id"]} className={styles.charth_bg_done} style={{display: value === "tab4" ? "flex" : "none" }}>
        <Typography sx={{ margin: "1rem", fontFamily: "IRANSansX" }}>
            تکلیف درس {element["name"]}
          </Typography>
          <div className={styles.charth}>
            <div>100%</div>
            <div className={styles.precetchartbg}>
              <div
                className={styles.precetchart}
                style={{ width: `${statistic}%` }}
              ></div>
            </div>
            <div>0%</div>
          </div>
        </div>
        </Link>
            )
          })
        }
        {/* <div className={styles.charth_bg_done} style={{display: value === "tab2" ? "block" : "none" }}>
          <Typography sx={{ margin: "1rem", fontFamily: "IRANSansX" }}>
            تکلیف درس ریاضی
          </Typography>
          <div className={styles.charth}>
            <div>100%</div>
            <div className={styles.precetchartbg}>
              <div
                className={styles.precetchart}
                style={{ width: `${statistic}%` }}
              ></div>
            </div>
            <div>0%</div>
          </div>
        </div>
        <div className={styles.charth_bg_done} style={{display: value === "tab2" ? "block" : "none" }}>
          <Typography sx={{ margin: "1rem", fontFamily: "IRANSansX" }}>
            تکلیف درس هنر
          </Typography>
          <div className={styles.charth}>
            <div>100%</div>
            <div className={styles.precetchartbg}>
              <div
                className={styles.precetchart}
                style={{ width: `${statistic}%` }}
              ></div>
            </div>
            <div>0%</div>
          </div>
        </div>
        <div className={styles.charth_bg_done} style={{display: value === "tab2" ? "block" : "none" }}>
          <Typography sx={{ margin: "1rem", fontFamily: "IRANSansX" }}>
            تکلیف درس ورزش
          </Typography>
          <div className={styles.charth}>
            <div>100%</div>
            <div className={styles.precetchartbg}>
              <div
                className={styles.precetchart}
                style={{ width: `${statistic1 - 10}%` }}
              ></div>
            </div>
            <div>0%</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
