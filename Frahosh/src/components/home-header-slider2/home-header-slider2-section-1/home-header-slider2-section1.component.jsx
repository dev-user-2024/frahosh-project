import { Link } from "react-router-dom"
import Button from "../../buttons/button.component"
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg"
import rocket from "../../../assets/image/rocket-header.png";
import styles from "./home-header-slider2-section1.styles.module.css"
import { Box } from "@mui/material";

const Slider2HeaderSection1 = () => {

    return (
        <div className={styles.section1}>
            <div className={styles.section1Text}>
                <h1 className={styles.section1Texth1}>با فراهوش، پیش به سوی موفقیت!</h1>

                <ul>
                    <li>برگزاری آزمون‌های درسی و روانشناسی</li>
                    <li>دسترسی به ابزارهای کمک درسی</li>
                    <li>ارتباط با مشاوران</li>
                    <li>ارائه گزارش‌های مختلف</li>
                    <li>و بسیاری بخش‌های کاربردی دیگر</li>
                </ul>

                <Box className={styles.section1TextButtonContainer}>
                <Link  to="/Smartening">
                    <Button buttonType="headerSection1TextButton" type="button" >
                        اطلاعات بیشتر
                        <ArrowLeft />
                    </Button>
                </Link>
                </Box>
            </div>
            <div className={styles.section1PicContainer}>
                <img className={styles.section1Pic} src={rocket} alt="Rocket" />
            </div>


        </div>
    )
}

export default Slider2HeaderSection1;