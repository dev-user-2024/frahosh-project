import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import styles from "./test-list.module.css";

function Testlist2({ list }) {
  // console.log(list)
  return (
    <div>
      {list.length > 1 &&
        list.map((i, index) => (
          <div key={index} className={styles.listcontainer}>
            <p>{new Intl.DateTimeFormat('fa-IR' , {year:"numeric",month:"long" ,day:"numeric"}).format(new Date(i.exam_date))}</p>
            <p>{i.title}</p>
            <Link className={styles.link}>
              <p>
                مشاهده
                <ArrowBackIosNewIcon />
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Testlist2;
