import { Link } from "react-router-dom"
import Button from "../../buttons/button.component"
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg"
import pichero from "../../../assets/image/pic-hero.png";
import "./header-section-1.styles.css"

const HeaderSection1 = () => {

    return (
        <div className="header-section-1">
            <div className="header-section-1-text">
                <h1 className="header-section-1-text-h1">فراهوش، هر چیزی که از آموزش می‌خوای!</h1>

                <ul>
                    <li>برگزاری آزمون‌های درسی و روانشناسی</li>
                    <li>دسترسی به ابزارهای کمک درسی</li>
                    <li>ارتباط با مشاوران</li>
                    <li>ارائه گزارش‌های مختلف</li>
                    <li>و بسیاری بخش‌های کاربردی دیگر</li>
                </ul>

                <Link className="header-section-1-text-button-container" to="/Smartening">
                    <Button buttonType="headerSection1TextButton" type="button" >
                        اطلاعات بیشتر
                        <ArrowLeft />
                    </Button>
                </Link>
            </div>
            <div className="header-section-1-pic-container">
                <img className="header-section-1-pic" src={pichero} alt="hero" />
            </div>


        </div>
    )
}

export default HeaderSection1;