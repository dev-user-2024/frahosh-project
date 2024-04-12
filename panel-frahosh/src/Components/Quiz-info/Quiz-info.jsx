import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";
import Button from "../buttons/button.component";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
import { useParams } from "react-router-dom";

function Quizinfo({id , info}) {
  // console.log(id , info)
  // const { id } = useParams();
  // const [info, setInfo] = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(`${serverApi}exam/${id}`, {
  //         headers: { authorization: `Bearer ${token}` },
  //       });
  //       console.log(data);
  //       setInfo(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div >
      {
        info.id && 
        <div className={styles.listcontainer}>
        <div className={styles.col1}>
          <p>عنوان : {info.title}</p>
          <p>تاریخ : {new Intl.DateTimeFormat('fa-IR' , {year:"numeric",month:"long" ,day:"numeric"}).format(new Date(info.exam_date))}</p>
          <p>شروع آزمون : {`${new Date(info.start_time).getMinutes()}: ${new Date(info.start_time).getHours()}`}</p>
          <p>تعداد سوالات : {info.question_limit} عدد</p>
        </div>
        <div className={styles.col2}>
          <p>زمان کل آزمون : {info.total_time}</p>
          <p>محدودیت زمانی هر سوال: متفاوت به تیتر هر سوال دقت شود</p>
          <p>نمره منفی : {info.negative_marking ? "دارد" : "ندارد"}</p>
          <p>نمره کل : {info.total_score}</p>
        </div>
      </div>
      }
    </div>
  );
}

export default Quizinfo;
