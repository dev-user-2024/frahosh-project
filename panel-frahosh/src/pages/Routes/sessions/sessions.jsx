import React from "react";
import styles from "./sessions.module.css";
import Button from "../../../Components/buttons/button.component";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../../confing/confing";
import { Link, useParams } from "react-router-dom";
function Testquestion() {
  const {id } = useParams();
  const [list, setList] = useState([]);
  const [info  , setInfo] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}session`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setList(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const FetchData = async (id) =>{

    try {
      const { data } = await axios.get(`${serverApi}session/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(data);
      setInfo(data)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h3 className={styles.titels}>اطلاعات جلسه</h3>
      <div className={styles.testcontainer}>
        <div>
          <p>تاریخ : {info.start_date}</p>
        </div>
        <div>
          <p>ساعت: {info.start_time}</p>
        </div>
        <div>
          <p>برگزارکننده: مدیر مدرسه-آقای نیازی و مشاور مدرسه-آقای حسینی</p>
        </div>
        <div>
          <p>موضوع:  {info.subject}</p>
        </div>
      </div>
      <div className={styles.button}>
      <Link to={info.entry_link}>
      <Button buttonType="disable" type="submit">
          ورود به جلسه
        </Button>
      </Link>
        <p className={styles.note}>
          * لینک ورود به جلسه در زمان مشخص فعال میگردد.
        </p>
      </div>
      <h3 className={styles.titels}>جلسات برگزار شده</h3>
      {
        list.map((i, index) => (
          <div key={index} onClick={()=>{
            FetchData(i.id)
          }} className={styles.othersessions}>
            <p>
              {" "}
              {new Intl.DateTimeFormat("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(i.start_date))}
            </p>
            <p>{i.subject}</p>
          </div>
        ))}
    </div>
  );
}

export default Testquestion;
