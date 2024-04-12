import React from "react";
import styles from "./sort.module.css";
import { ReactComponent as Sort } from "../../assests/icons/sort.svg";
import { Typography } from "@mui/material";
function SortItem({setType , type}) {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.title}>
          <Sort />
          <Typography color='text.secondary'>مرتب سازی بر اساس:</Typography>
        </div>
        <div className={styles.items}>
          <Typography color={type === 1 ? "text.primary" : "text.secondary"} onClick={()=>{setType(1)}} className={styles.item}>جدیدترین</Typography>
          <Typography color={type === 2 ? "text.primary" : "text.secondary"} onClick={()=>{setType(2)}} className={styles.item}>پربازدیدترین</Typography>
          <Typography color={type === 3 ? "text.primary" : "text.secondary"} onClick={()=>{setType(3)}} className={styles.item}>محبوب ترین</Typography>
        </div>
      </div>
    </div>
  );
}

export default SortItem;
