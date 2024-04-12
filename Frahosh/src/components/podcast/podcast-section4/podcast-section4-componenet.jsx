import esponserimg from "../../../assets/image/esponser-img.png";
import styles from "./podcast-section4.module.css";
import PagesFormInput from "../../pages-form-input/pages-form-input.component";
import Button from "../../../components/buttons/button.component";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { serverApi } from "../../../confing/confing";
import { useEffect, useState } from "react";
import axios from "axios";

const PodcastSection4 = () => {
  const theme = useTheme();

  return (
    <div className={styles.bgi}>
      <div className={styles.layer}>
        <div className={styles.Container}>
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            spacing={10}
            justifyContent="center"
            alignItems="center"
          >
            <div className={styles.contactContainer}>
              <Typography
                variant="h4"
                mx={2}
                sx={{
                  fontWeight: "600",
                  fontFamily: "Rokh-Bold",
                  color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
                  direction: "rtl",
                }}
                className="z-pattern-text-title"
              >
                اسپانسر وهمراه باشید
              </Typography>
              <form className={styles.contactForm} onSubmit={""}>
                <PagesFormInput
                  label="نام و نام خانوادگی"
                  type="text"
                  name="fullname"
                  required
                />
                <PagesFormInput label="شهر" type="text" name="city" required />
                <PagesFormInput
                  label="شماره تماس"
                  type="tel"
                  name="phone"
                  required
                />
                <PagesFormInput
                  label="ایمیل"
                  type="email"
                  name="email"
                  required
                />

                <Button buttonType="btnLoginBgBlue" type="submit" onClick={""}>
                  ثبت
                </Button>
              </form>
            </div>
            <div className={styles.sec2}>
              <img alt="" src={esponserimg} />
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection4;
