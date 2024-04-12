import Navigation2 from "../../components/navigation-2/navigation-2.component";
import Footer from "../../components/footer/footer";
import styles from "./request.module.css";
import Button from "../../components/buttons/button.component";
import PagesFormInput from "../../components/pages-form-input/pages-form-input.component";
import Banner from "../../assets/image/requestphoto.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
const Request = () => {
  const [age, setAge] = React.useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Navigation2 />
      <div className={styles.sectionsContainer}>
        <div className={styles.imgdiv}>
          <img className={styles.banner} src={Banner} alt="استخدام فراهوش" />
        </div>
        <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
            mt: "20px",
          }}
          className="z-pattern-text-title"
        >
          فرم درخواست شغل: گرافیست
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "IRANSansX",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
            fontSize: "18px",
            lineHeight: "50px",
          }}
          className="z-pattern-text-content"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "IRANSansX",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            direction: "rtl",
            fontSize: "18px",
            lineHeight: "50px",
          }}
          className="z-pattern-text-content"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت
        </Typography>

        <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
            mt: "20px",
          }}
          className="z-pattern-text-title"
        >
          شرایط احراز
        </Typography>
        <ul>
          <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </Typography>
          <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </Typography>
          <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </Typography>
          <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </Typography>
  
        </ul>
        <div className={styles.contactContainer}>
          <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
            mt: "20px",
          }}
          className="z-pattern-text-title"
        >
        تکمیل فرم درخواست
        </Typography>
          <form className={styles.contactForm} onSubmit={""}>
            <div className={styles.formcontainer}>
              <div className={styles.formright}>
                <PagesFormInput
                  label="نام"
                  type="text"
                  name="fullname"
                  required
                />
                <PagesFormInput
                  label="نام خانوادگی"
                  type="text"
                  name="fullname"
                  required
                />
                <PagesFormInput
                  label="تاریخ تولد"
                  type="date"
                  name="fullname"
                  required
                />
                <Box
                  sx={{ fontFamily: "IRANSansX", minWidth: 120, maxWidth: 160 }}
                >
                  <FormControl fullWidth sx={{ fontFamily: "IRANSansX" }}>
                    <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>دختر</MenuItem>
                      <MenuItem value={20}>پسر</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <label for="jensiat">جنسیت :</label>
                <select id="jensiat" name="jensiat" size="1">
                  <option value="volvo">مرد</option>
                  <option value="saab">زن</option>
                </select>
              </div>
              <div className={styles.formleft}>
                <PagesFormInput
                  label="شهر"
                  type="text"
                  name="fullname"
                  required
                />
                <PagesFormInput
                  label="ادرس"
                  type="email"
                  name="email"
                  required
                />
                <PagesFormInput
                  label="موبایل"
                  type="tel"
                  name="phone"
                  required
                />
                <PagesFormInput
                  label="تلفن ثابت"
                  type="tel"
                  name="phone"
                  required
                />
                <PagesFormInput
                  label="رزومه"
                  type="file"
                  name="phone"
                  required
                />
              </div>
            </div>
            <Button buttonType="btnLoginBgBlue" type="submit" onClick={""}>
              ثبت
            </Button>
            <PagesFormInput type="reset" name="reset" required />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Request;
