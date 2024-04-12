import styles from "./404.module.css"
import char404 from "../../assets/image/char-404.png"
import Button from "../../components/buttons/button.component"
import { Link } from "react-router-dom"
const P404 = () => {
    return (
        <div className={styles.Container}>
            <div>
                <h1>404</h1>
                <div className={styles.section1}>
                    <p>نگران نباش! در فضا گم نشدی</p>
                    <p>فقط خطای 404 پیش اومده!</p>
                </div>
                <p className={styles.section2}>متاسفانه صفحه‌ مورد نظر پیدا نشد!</p>
                <div className={styles.section3}>
                <Link className="home-btn-login-container" to="/">
                <Button buttonType="btnLoginBgBlue" type="button" >
                    بریم به صفحه خانه
                </Button>
                </Link>
                </div>
                <div className={styles.section4}>
                <img src={char404} alt="404" />
                </div>
            </div>
        </div >
    )
}

export default P404;