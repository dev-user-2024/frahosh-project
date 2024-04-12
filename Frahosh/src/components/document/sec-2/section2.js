import { Typography } from "@mui/material";
import React from "react";
import styles from "./section2.styles.module.css";

const Section2 = () => {
  return (
    <div className={styles.sec_bg}>
      <div className={styles.sec}>
        <Typography
          sx={{
            fontFamily: "IRANSansX",
            fontSize: { md: "22px" },
            lineHeight: "235%",
            width: "219px",
            textAlign: { xs: "center", md: "start" },
          }}
        >
          {" "}
          تمرکز چیست؟
        </Typography>
        <Typography
          sx={{
            fontFamily: "IRANSansX",
            fontSize: { md: "18px" },
            lineHeight: "235%",
            width: { md: "1140px", xs: "70%" },
          }}
        >
          تعریف تمرکز یعنی هدایت کردن توجه به میل خود؛ یعنی انجام دادن یک کار در
          هر زمان، به جای از این شاخه به آن شاخه پریدن و از دست دادن توجه، زمان
          و انرژی. رمز ساسون (Remez Sasson) در کتاب «قدرت اراده و خودانضباطی»
          می‌گوید: تمرکز به معنای هدایت کردن توجه به خواست و اراده خود است.
          تمرکز یعنی کنترل توجه؛ یعنی توانایی چگونه متمرکز کردن ذهن روی یک
          موضوع، شیء یا فکر و حذف سایر افکار، ایده‌ها و احساسات غیرمرتبط. عوامل
          موثر براز دست دادن تمرکز تمرکز هم تحت تاثیر عوامل داخلی قرار می‌گیرد و
          هم عوامل خارجی یا محیطی. اگر می‌خواهید راه‌های بهبود تمرکز را یاد
          بگیرید، باید ابتدا با عوامل موثر بر آن آشنا شوید.
        </Typography>
      </div>
    </div>
  );
};

export default Section2;
