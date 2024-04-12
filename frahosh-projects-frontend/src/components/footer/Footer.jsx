import { useState, useRef } from "react";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined";
import { Sms, Call } from "../../assets/icons";
import styles from "./footer.module.css";
import { useTranslation } from "react-i18next";

import {
  facebook,
  instagram,
  linkdin,
  twitter,
  whatsapp,
} from "../../assets/icons";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const Msg = useRef("");

  const submitForm = (e) => {
    e.preventDefault();

    try {
      // Handle validations
      // axios.post(``, {
      //     Fname_Lname: name,
      //     email: email,
      //     review: comment
      // }).then(response => console.log(response))
      //   toast.success("")
    } catch (error) {
      //   toast.error()
      console.log(error.message);
    }
  };

  return (
    <footer
      className={`${styles.footer_container} ${
        i18n.language === "fa" && styles.rtl
      }`}
    >
      <div className={styles.footer}>
        <div className={styles.footer_data}>
          <span className={styles.footer_data_text}>
            {t("home.footer.cantactUs")}
          </span>
          <span className={styles.footer_data_number}>
            <span>
              <img src={Sms} alt="" />
              <p>info@frabyte.ir</p>
            </span>
            <span>
              <img src={Call} alt="" />
              <p>02191692065</p>
            </span>
          </span>
        </div>
        <div className={styles.footer_data2} style={{ textAlign: "right" }}>
          <p style={{ display: "flex", alignItems: "center" }}>
            <PinDropOutlinedIcon /> &nbsp;&nbsp; تهران خیابان پاسدارن نیستان نهم
            فراهوش{" "}
          </p>
          <p
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <PinDropOutlinedIcon /> &nbsp;&nbsp; تهران خیابان آزادی برج علمی
            فناوری دکتر قریب پالک134 فراهوش
          </p>
          <p
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <SignpostOutlinedIcon /> &nbsp;&nbsp; 1311773684
          </p>
        </div>

        <div className={styles.footer_form}>
          {/* <p>{t('home.footer.from.formTitle')}</p> */}

          {/*
                 <form action="" method="post" onSubmit={submitForm}>
                        <div className={`${styles.footer_form_section1} `}>
                            <div>
                                <label>{t('home.footer.form.FullName')}</label>
                                <input
                                    className={styles.pagesFormInput}
                                    type="text"
                                    value={fullName}
                                    required
                                    onChange={e => setFullName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>{t('home.footer.form.Email')}</label>
                                <input
                                    className={styles.pagesFormInput}
                                    type="email"
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>{t('home.footer.form.PhoneNumber')}</label>
                                <input
                                    className={styles.pagesFormInput}
                                    type="email"
                                    value={phoneNumber}
                                    required
                                    onChange={e => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={`${styles.footer_form_section2}`}>
                            <div>
                                <label className="">{t('home.footer.form.Message')}</label>
                                <textarea
                                    ref={Msg}
                                    rows={4}
                                    type="text"
                                    minlength="30"
                                    required />
                            </div>


                            <div>
                                <Button
                                    buttonType="button1"
                                    type="submit"
                                >
                                {t('home.footer.form.button')}
                                </Button>
                            </div>

                        </div>
                    </form>
                */}
        </div>
        <div className={styles.footer_data2} style={{ display: "flex", marginTop: "30px" }}>
          <img style={{ marginLeft: "20px" }} src={whatsapp} alt="" />
          <img style={{ marginLeft: "20px" }} src={linkdin} alt="" />
          <img style={{ marginLeft: "20px" }} src={instagram} alt="" />
        </div>

        <div className={styles.footer_content}>
          <div className={styles.footer_content_text}>
            <h1>{t("home.footer.content.title")}</h1>

            <p>{t("home.footer.content.bodyText")}</p>
          </div>

          {/*
        <div className={styles.footer_content_links}>
            <span>
              <span>{t("home.footer.content.works")}</span>
              <span>{t("home.footer.content.aboutUs")}</span>
              <span>{t("home.footer.content.contactUs")}</span>
            </span>
          </div>
        */}
        </div>

        <div
          style={{
            marginTop: "80px",
            marginBottom: "15px",
            textAlign: "center",
          }}
          className={styles.footer_data2}
        >
          <small>
            تمامی حقوق این وبسایت محفوظ و متعلق به تیم{" "}
            <small style={{ color: "#5BE2FF" }}>فراهوش</small> می‌باشد
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
