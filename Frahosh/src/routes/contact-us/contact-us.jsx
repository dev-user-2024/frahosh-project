import Navigation2 from "../../components/navigation-2/navigation-2.component";
import Footer from "../../components/footer/footer";
import styles from "./contact-us.module.css";
import Button from "../../components/buttons/button.component";
import PagesFormInput from "../../components/pages-form-input/pages-form-input.component";
import map from "../../assets/icons/contact-us/map.png";
import telegram from "../../assets/icons/contact-us/telegram.svg";
import instagram from "../../assets/icons/contact-us/instagram.svg";
import phone from "../../assets/icons/contact-us/phone.svg";
import location from "../../assets/icons/contact-us/location.svg";
import email from "../../assets/icons/contact-us/email.svg";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { serverApi } from "../../confing/confing";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import gift from "../../assets/image/alertGift.gif"

const Contactus = () => {
  const theme = useTheme();
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
      const name = document.getElementById("name").value;
      const mobile = document.getElementById("mobile").value;
      const description = document.getElementById("description").value;
      const email = document.getElementById("email").value;
      const sendData = {
        name,
        mobile,
        description,
        email,
      };
      console.log(sendData);
        const data  = await axios.post(
          `${serverApi}contactUs`,
          sendData
        );
        console.log(data);
        handleClickOpen()
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <Navigation2 />
      <Box className={styles.sectionsContainer}>
        <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
          }}
          className={styles.title}
        >
          با ما در تماس بمانید....
        </Typography>
        <Box className={styles.container}>
          <Box className={styles.containerright}>
            <Box className={styles.contactContainer}>
              <p>در کوتاه‌ترین زمان ممکن با شما تماس خواهیم گرفت</p>
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
                    name="name"
                    required
                    id="name"
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
                <div className={styles.inputContainer}>
                  <label className="form-input-label">شماره تماس</label>
                  <input
                    className={styles.pagesFormInput}
                    type="tel"
                    name="mobile"
                    required
                    id="mobile"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label className="form-input-label">متن پیام :</label>
                  <input
                    className={styles.pagesFormInput}
                    type="text"
                    name="description"
                    id="description"
                    required
                  />
                </div>

                <Button buttonType="btnLoginBgBlue" type="submit" onClick={""}>
                  ثبت
                </Button>
              </form>
            </Box>
          </Box>
          <Box className={styles.containerleft}>
            <Box className={styles.containerleft_top}>
              <img className={styles.mapphoto} src={map} alt="map" />
            </Box>
            <Box className={styles.containerleft_down}>
              <Box className={styles.row1}>
                <img className={styles.icon} src={location} alt="location" />
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    width: "100%",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </Typography>
              </Box>
              <Box className={styles.row2}>
                <Box>
                  <img className={styles.icon} src={email} alt="email" />
                  <Typography
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      width: "100%",
                    }}
                  >
                    info@frahosh.com
                  </Typography>
                </Box>
                <Box>
                  <img className={styles.icon} src={phone} alt="phone" />
                  <Typography
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      width: "100%",
                    }}
                  >
                    021-12345678
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.row3}>
                <Box>
                  <img className={styles.icon} src={telegram} alt="telegram" />
                  <Typography
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      width: "100%",
                    }}
                  >
                    fra_hosh@
                  </Typography>
                </Box>
                <Box>
                  <img
                    className={styles.icon}
                    src={instagram}
                    alt="instagram"
                  />
                  <Typography
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      width: "100%",
                    }}
                  >
                    fra_hosh
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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
      <Footer />
    </Box>
  );
};

export default Contactus;
