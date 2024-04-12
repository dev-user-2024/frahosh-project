import React, { useRef } from 'react';
import styles from './test-question.module.css';
import Button from '../../../Components/buttons/button.component';
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi , token } from "../../../confing/confing";
import { useParams } from "react-router-dom";

function Testquestion() {
  const answer = useRef(null);
  const {id} = useParams();
  const { time } = useParams();
  const {title}  = useParams();
  const [info, setInfo] = useState([{}]);
  const [num , setNum] = useState(0);
  // console.log(id)
  // console.log(title)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${serverApi}questionOfExam/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data)
        setInfo(data["data"]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const postAnswer = async event =>{
    console.log(answer.current.value)
    const response = await axios.post(`${serverApi}` , {
      score : info[num]["score"],
      answer_text : answer.current.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setNum(prevState => prevState + 1)
  }
    return (
      <div>
        <div className={styles.titels}>
          <p>آزمون {title}</p>
      <p>سوال {info[num]["id"] || "--"} از 5</p>    
          <p>زمان پاسخگویی سوال : {time} دقیقه</p>
        </div>
        <div className={styles.testcontainer}>
          <p>
            {info[num]["question"]}
          </p>
        </div>
        <textarea ref={answer} className={styles.w3review} name="w3review" rows="20" cols="100">
        {  console.log(info)}
        </textarea>
        <div className={styles.button}>
        <div onClick={postAnswer}>
          <Button buttonType="startquiz" type="submit">
          سوال بعدی
          </Button>
          </div>
        </div>
      </div>
    );
}

export default Testquestion;
