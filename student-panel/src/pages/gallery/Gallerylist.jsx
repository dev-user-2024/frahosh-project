import React from "react";
import SortItem from "../../Components/sort/sort";
import { Link } from "react-router-dom";
import styles from "./categories.module.css";
import Image1 from "../../assests/image/album(1).png";
import Image2 from "../../assests/image/album(2).png";
import Image3 from "../../assests/image/album(3).png";
import Image4 from "../../assests/image/album4.png";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
const Gallerylist = () => {
  const [list, setList] = useState([]);
  const [type, setType] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (type === 1) {
          const { data } = await axios.get(`${serverApi}galleries`, {
            headers: { authorization: `Bearer ${token}` },
          });
          console.log(data);
          setList(data);
        } else if (type === 2) {
          const { data } = await axios.get(`${serverApi}gallery/visited`, {
            headers: { authorization: `Bearer ${token}` },
          });
          console.log(data);
          setList(data);
        } else if (type === 3) {
          const { data } = await axios.get(`${serverApi}gallery/popular`, {
            headers: { authorization: `Bearer ${token}` },
          });
          console.log(data);
          setList(data);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchData();
  }, [type]);
  return (
    <div>
      <SortItem setType={setType} type={type} />
      <Box mb={3} sx={{ width: "100%" }}>
        {loading && <LinearProgress />}
      </Box>
      <Box className={styles.container}>
        {list.map((i, index) => (
          <Link to={`${i.id}`} key={index}>
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <img src={Image1} alt="music-cover" />
                <img src={Image2} alt="music-cover" />
                <div className={styles.blurimage}>
                  <p>5+</p>
                  <img className={styles.blur} src={Image4} alt="music-cover" />
                </div>
                <img src={Image3} alt="music-cover" />
              </div>
              <Typography color='text.secondary'>{i.title}</Typography>
            </div>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default Gallerylist;
