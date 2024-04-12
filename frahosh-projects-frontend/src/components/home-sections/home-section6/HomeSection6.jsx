import { useState } from "react";

import styles from "./homeSection6.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useTranslation } from "react-i18next";
const HomeSection6 = () => {
  const { t, i18n } = useTranslation();
  const askedQuestion = t("home.askedQuestion.questions", {
    returnObjects: true,
  });

  const [expanded, setExpanded] = useState({
    case1: true,
    case2: true,
    case3: true,
    case4: true,
  });

  const handlechange = (Case) => {
    if (Case === "case1") {
      if (expanded[Case] === true) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case1: false }));
      }
      if (expanded[Case] === false) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case1: true }));
      }
    }
    if (Case === "case2") {
      if (expanded[Case] === true) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case2: false }));
      }
      if (expanded[Case] === false) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case2: true }));
      }
    }
    if (Case === "case3") {
      if (expanded[Case] === true) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case3: false }));
      }
      if (expanded[Case] === false) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case3: true }));
      }
    }
    if (Case === "case4") {
      if (expanded[Case] === true) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case4: false }));
      }
      if (expanded[Case] === false) {
        setExpanded((prevExpanded) => ({ ...prevExpanded, case4: true }));
      }
    }
  };
  return (
    <div className={styles.homeSection6}>
      <h2>{t("home.askedQuestion.title")}</h2>
      {askedQuestion.map((item, index) => (
        <Accordion
          key={index}
          className={`${styles.section6_accordion} ${
            i18n.language === "fa" && styles.rtl
          }`}
          onChange={() => {
            handlechange("case1");
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded.case1 === true ? (
                <AddOutlinedIcon />
              ) : (
                <RemoveOutlinedIcon />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.Accordion_title}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails expandIcon={<Accordion />}>
            <Typography>{item.subTitle}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default HomeSection6;
