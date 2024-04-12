import styles from "./careers-accordion.module.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Careersaccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.container}>
                <h2 className={styles.title}>موقعیت های شغلی</h2>
      <div className={styles.conaccordion}>
        <div className={styles.row}>
          <div className={styles.number}>
            <p>۱</p>
          </div>
          <Accordion
            className={styles.accordion}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1D9BF0" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{fontFamily: 'IRANSansX', width: "100%", flexShrink: 0 }}>
                پادکست
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  sx={{fontFamily: 'IRANSansX', width: "100%", fontSize: 14  }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className={styles.button}>
            <p>فرم همکاری پادکستر</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.number}>
            <p>۲</p>
          </div>
          <Accordion
            className={styles.accordion}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1D9BF0" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{fontFamily: 'IRANSansX', width: "100%", flexShrink: 0 }}>
                پادکست
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  sx={{fontFamily: 'IRANSansX', width: "100%", fontSize: 14  }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className={styles.button}>
            <p>فرم همکاری پادکستر</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.number}>
            <p>۳</p>
          </div>
          <Accordion
            className={styles.accordion}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1D9BF0" }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{fontFamily: 'IRANSansX', width: "100%", flexShrink: 0 }}>
              برنامه‌نویس اندروید
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  sx={{fontFamily: 'IRANSansX', width: "100%", fontSize: 14  }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className={styles.button}>
            <p>فرم همکاری پادکستر</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.number}>
            <p>۴</p>
          </div>
          <Accordion
            className={styles.accordion}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1D9BF0" }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{fontFamily: 'IRANSansX', width: "100%", flexShrink: 0 }}>
              توسعه دهنده وب
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  sx={{fontFamily: 'IRANSansX', width: "100%", fontSize: 14  }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className={styles.button}>
            <p>فرم همکاری پادکستر</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.number}>
            <p>۵</p>
          </div>
          <Accordion
            className={styles.accordion}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1D9BF0" }} />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{fontFamily: 'IRANSansX', width: "100%", flexShrink: 0 }}>
                پادکست
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  sx={{fontFamily: 'IRANSansX', width: "100%", fontSize: 14  }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className={styles.button}>
            <p>فرم همکاری پادکستر</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.number}>
            <p>۶</p>
          </div>
          <Accordion
            className={styles.accordion}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1D9BF0" }} />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography sx={{fontFamily: 'IRANSansX', width: "100%", flexShrink: 0 }}>
                پادکست
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  sx={{fontFamily: 'IRANSansX', width: "100%", fontSize: 14  }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className={styles.button}>
            <p>فرم همکاری پادکستر</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careersaccordion;
