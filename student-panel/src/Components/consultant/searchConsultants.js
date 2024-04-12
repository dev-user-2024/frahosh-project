import { Stack } from "@mui/material";
import React from "react";
import voiceIcon from "../../assests/image/svg/consultantvoice.svg";
import searchIcon from "../../assests/image/svg/Search.svg";
import styles from "./searchconsultants.module.css";
export default function SearchConsultants() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      className={styles.searchContainer}
    >
      <Stack direction="row" className={styles.inputContainer}>
        <img src={voiceIcon} alt="" />
        <input placeholder="نام مشاور مورد نظرت رو جستجو کن ..." />
      </Stack>
      <img src={searchIcon} alt="" />
    </Stack>
  );
}
