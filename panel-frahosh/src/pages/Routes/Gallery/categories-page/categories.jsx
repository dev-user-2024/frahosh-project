import { Link } from "react-router-dom";
import styles from "./categories.module.css";
import Image1 from "../../../../assests/image/album(1).png";
import Image2 from "../../../../assests/image/album(2).png";
import Image3 from "../../../../assests/image/album(3).png";
import Image4 from "../../../../assests/image/album4.png";
import Sort from '../../../../Components/sort/sort';
import React, { useState } from "react";
import { serverApi , token} from "../../../../confing/confing";
import { useEffect } from "react";
import axios from "axios";

function Categories() {
  const [list1  , setList1] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}galleries`, {
          headers: { authorization: `Bearer ${token}` }
        });
        // console.log(data);
        setList1(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <Sort />
    <div className={styles.container}>
    {
      list1.map(element => {
        {/* console.log(element) */}
        let image_list = element.images
        return(
          <div className={styles.wrapper}>
        <div className={styles.box}>
        {console.log(image_list)}
        </div>
        <p>{element.title}</p>
      </div>
        )
      }
      )
      }
       </div>
    </>
  );
}

export default Categories;
