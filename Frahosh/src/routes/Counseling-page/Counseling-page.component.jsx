import Navigation2 from "../../components/navigation-2/navigation-2.component"
import Counselingbests from "../../components/counseling/Counseling-best-persons/Counseling-bests"
import Counselingfirstsec from "../../components/counseling/Counseling-best-first-sec/Counseling-first-sec"
import Counselingtwosec from "../../components/counseling/Counseling-best-two-sec/Counseling-two-sec"
import Counselingthirdsec from "../../components/counseling/Counseling-best-third-sec/Counseling-third-sec"
import Counselingfoursec from "../../components/counseling/Counseling-best-four-sec/Counseling-four-sec"
import Counselingai from "../../components/counseling/Counseling-ai-persons/Counseling-ai"
import Counselingfree from "../../components/counseling/Counseling-free/Counseling-free"
import Footer from "../../components/footer/footer"
import styles from "./Counseling-page.module.css"

const Counselingpage = () => {
    return (
        <div className={styles.container}>
            <Navigation2 />
            <Counselingfirstsec />
            {/* <Counselinginfo /> */}
            <Counselingbests />
            <Counselingtwosec />
            <Counselingfree />
            <Counselingthirdsec />
            <Counselingai />
            <Counselingfoursec />
            <Footer />

        </div>
    )
}

export default Counselingpage;