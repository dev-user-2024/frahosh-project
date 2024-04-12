import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./list.module.css";
import { ReactComponent as Play } from "../../../assests/image/svg/play.svg";
import Sarbolandan from "../../../assests/image/sarbedaran.png"
import React from "react";
import Search from '../../../Components/search-in/search-in';
import { useEffect } from "react";
import { serverApi , token } from '../../../confing/confing';
import axios from "axios";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [list1  , setList1] = useState([])
  const [list2  , setList2] = useState([])

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}music`, { headers: { authorization: `Bearer ${token}` }});
        console.log(data)
        setList1(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}sounds`, { headers: { authorization: `Bearer ${token}` }});
        console.log(data)
        setList2(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.bloc_tabs}>
        <button
          className={
            toggleState === 1
              ? `${styles["tabs"]} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(1)}
        >
          موسیقی
        </button>
        <button
          className={
            toggleState === 2
              ? `${styles["tabs"]} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(2)}
        >
          صدا
        </button>
      </div>

      <div className={styles.content_tabs}>
        <div
          className={
            toggleState === 1
              ? `${styles["content"]} ${styles.active_content}`
              : styles.content
          }
        >
        {
          list1.map(element => {
            return(
              <div className={styles.othersessions}>
            <Link to="/">
              <div className={styles.imagetitle}>
                <div className={styles.imagecover}>
                <img src={element.cover} alt="music-cover"/>
                  <Play className={styles.play} />
                </div>
                <p>{element.title}</p>
              </div>
            </Link>
            <p>آلبوم {element.album.name}</p>
            <p>بارگذاری توسط {element.uploaded_by.name}</p>
            <p> {element.updated_at}</p>
          </div>
            )
          })
        }
         
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles["content"]} ${styles.active_content}`
              : styles.content
          }
        >
        {
          list2.map(element => {
            return(

<div className={styles.othersessions}>
<Link to="/">
  <div className={styles.imagetitle}>
    <div className={styles.backplay}>
      <Play />
    </div>
    <p>{element.title}</p>
  </div>
</Link>
            <p>بارگذاری توسط {element.uploaded_by.name}</p>
            <p> {element.updated_at}</p>

</div>
            )
          })
        }
        </div>
        </div>
    </div>
  );
}

export default Tabs;
