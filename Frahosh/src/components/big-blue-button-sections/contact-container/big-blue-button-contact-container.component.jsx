import Button from "../../../components/buttons/button.component";
import PagesFormInput from "../../pages-form-input/pages-form-input.component";
import styles from "./big-blue-button-contact-container.styles.module.css";
import axios from "axios";
import { serverApi } from "../../../confing/confing";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  Typography
} from "@mui/material";
import gift from "../../../assets/image/alertGift.gif"

const BigBlueButtonContact = () => {
  //   const [fullName, setFullName] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      console.log(sendData);
        const data  = await axios.post(
          `${serverApi}school/whoNeedCall/create`,
          sendData
        );
        console.log(data);
        handleClickOpen()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.contactContainerBg}>
      <div className={styles.contactContainer}>
        <h2>در کوتاه‌ترین زمان ممکن با شما تماس خواهیم گرفت</h2>
        <form
          className={styles.contactForm}
          onSubmit={(event, valuses) => {
            submitForm(event, valuses);
          }}
        >
          <div className={styles.inputContainer}>
            <label className="form-input-label">نام و نام خانوادگی</label>
            <input
              className={styles.pagesFormInput}
              type="text"
              name="fullName"
              required
              id="fullName"
            />
          </div>
          <div className={styles.inputContainer}>
            <label className="form-input-label">شهر</label>
            <input
              className={styles.pagesFormInput}
              type="text"
              name="city"
              required
              id="city"
            />
          </div>
          <div className={styles.inputContainer}>
            <label className="form-input-label">شماره تماس</label>
            <input
              className={styles.pagesFormInput}
              type="tel"
              name="phoneNumber"
              required
              id="phoneNumber"
            />
          </div>

          <div className={styles.inputContainer}>
            <label className="form-input-label">ایمیل</label>
            <input
              className={styles.pagesFormInput}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <Button buttonType="btnLoginBgBlue" type="submit">
            ثبت
          </Button>
        </form>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default BigBlueButtonContact;
