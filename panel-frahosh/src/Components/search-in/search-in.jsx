import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./search-in.module.css";
import { ReactComponent as Searchsvg } from "../../assests/image/svg/Search.svg"
import { ReactComponent as Voice } from "../../assests/image/svg/voice.svg";
import React from "react";

function Searchin() {

  return (
      <div className={styles.container}>
            <Voice className={styles.voice} />
            <input className={styles.search} placeholder=" و جو کنید ..." />
            <Searchsvg className={styles.searchsvg} />
      </div>
  );
}

export default Searchin;
