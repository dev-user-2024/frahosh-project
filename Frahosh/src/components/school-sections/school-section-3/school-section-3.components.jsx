import React from "react";
import SLIDER from "../../Slider/Slider.component";
import { Stack } from "@mui/system";
import Button from "../../buttons/button.component";
import PricesCard from "../../prices-card/prices-card.component";
import styles from "./school-section-3.module.css";
import { serverApi } from "../../../confing/confing";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import gift from "../../../assets/image/alertGift.gif"


const Slider = () => {
  const [list, setList] = useState([]);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}school/getAll`);
        let arry = [];
        data.date.data.map((i) => {
          let x = {
            title: i.school_name,
            avatar: i.avatar_school,
          };
          arry.push(x);
        });
        setList(arry);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const submitForm = async (event, valuses) => {
    event.preventDefault();
    try {
      const fullName = document.getElementById("fullName").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const city = document.getElementById("city").value;
      const email = document.getElementById("email").value;
      const sendData = {
        fullName,
        phoneNumber,
        city,
        email,
      };
      // console.log(sendData);
      const data = await axios.post(
        `${serverApi}school/whoNeedCall/create`,
        sendData
      );
      handleClickOpen()
      console.log(data);
    } catch (err) {
      console.log(err);
      alert('خطایی رخ داده است')
    }
  };

  return (
    <Box className={styles.section3}>
      <Box className={styles.form_section}>
        <form className={styles.logining_form} action="">
          <Box className={styles.title_form}>
            <h4>در کوتاه‌ترین زمان ممکن با شما تماس خواهیم گرفت</h4>
          </Box>
          <Box p={2} className={styles.input_form}>
            <Stack
              direction={{ md: "column", lg: "row" }}
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className={styles.input_element}>
                <Stack
                  direction={{ md: "column", lg: "row" }}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <label>نام و نام خانوادگی</label>
                  <input
                    className={styles.input_fild}
                    type="text"
                    name="fullName"
                    required
                    id="fullName"
                  ></input>
                </Stack>
              </Box>
              <Box className={styles.input_element}>
                <Stack
                  direction={{ md: "column", lg: "row" }}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <label>شماره تماس</label>
                  <input
                    className={styles.input_fild}
                    type="tel"
                    name="phoneNumber"
                    required
                    id="phoneNumber"
                  ></input>
                </Stack>
              </Box>
            </Stack>
            <Stack
              direction={{ md: "column", lg: "row" }}
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className={styles.input_element}>
                <Stack
                  direction={{ md: "column", lg: "row" }}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <label>شهر</label>
                  <input
                    className={styles.input_fild}
                    type="text"
                    name="city"
                    required
                    id="city"
                  ></input>
                </Stack>
              </Box>
              <Box className={styles.input_element}>
                <Stack
                  direction={{ md: "column", lg: "row" }}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <label>ایمیل</label>
                  <input
                    className={styles.input_fild}
                    type="email"
                    name="email"
                    id="email"
                    required
                  ></input>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Button
              buttonType="SchoolPageLogin"
              onClick={(event) => {
                submitForm(event);
              }}
            >
              ثبت نام
            </Button>
          </Box>
        </form>
      </Box>
      <Box className={styles.slider_section}>
        <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
          }}
          className={styles.slider_title}
        >
          برخی مدارس طرف قرارداد ما
        </Typography>
        <Box className={styles.slider_context}>
          <Box className={styles.slider_bg_color}></Box>
          <Box className={styles.slider_bg}>
            <SLIDER children={list} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
          }}
          className={styles.slider_title}
        >
          هزینه‌ها
        </Typography>

        <Box className={styles.pericesCardContainer}>
          <PricesCard
            planType="پلن رایگان"
            planDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
            planPrice="رایگان"
            planTheme="planRight"
          />

          <PricesCard
            planType="پلن حرفه‌ای"
            planDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
            planPrice="15 میلیون تومان"
            planTheme="planCenter"
          />

          <PricesCard
            planType="پلن معمولی"
            planDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
            planPrice="7 میلیون تومان"
            planTheme="planLeft"
          />
        </Box>
      </Box>
      <Box>
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth='sm'
    >
    
      <DialogContent  >
        <DialogContentText textAlign='center' id="alert-dialog-description">
        <img alt="gift" src={gift}/>
          <Typography variant="h5" mb={2}> اطلاعات شما با موفقیت ثبت شد</Typography>
          <Typography variant="h5" mb={2}>به زودی با شما تماس خواهیم گرفت</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{mx:"auto"}}>
        <Button onClick={handleClose}>باشه !</Button>
      </DialogActions>
    </Dialog>
      </Box>
    </Box>
  );
};

export default Slider;
