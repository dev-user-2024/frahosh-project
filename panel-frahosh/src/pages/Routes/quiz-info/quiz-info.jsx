import React, { useEffect, useState } from "react";
import Quizinfo from "../../../Components/Quiz-info/Quiz-info";
import Button from "../../../Components/buttons/button.component";
import styles from "./quiz.module.css";
import axios from "axios";
import { serverApi, token } from "../../../confing/confing";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Quizinfopage() {
  const { id } = useParams();
  console.log(id);
  const [info, setInfo] = useState({});
  const [time , setTime] = useState();
  const [title , setTitle] = useState();
  console.log(info)
  console.log(title)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}exam/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setInfo(data);
        setTime(data["total_time"]);
        setTitle(data["title"]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3 className={styles.title}>اطلاعات آزمون</h3>
      <Quizinfo id={id} info={info} />
      <div className={styles.button}>
        <Link to={`/testquestion/${id}/${time}/${title}`}>
          <Button buttonType="startquiz" type="submit">
            شروع آزمون
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Quizinfopage;
