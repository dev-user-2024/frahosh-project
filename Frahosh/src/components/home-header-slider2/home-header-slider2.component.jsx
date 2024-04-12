import Navigation from "../navigation/navigation.component";
import Slider2HeaderSection1 from "./home-header-slider2-section-1/home-header-slider2-section1.component"
import HeaderSection2 from "../home-header/header-section-2/header-section-2.component"

import styles from "./home-header.slider2.styles.module.css"

const HomeHeader2 = () => {

    return (
        <div className={styles.header}>
            <Navigation />
            <Slider2HeaderSection1/>
            <HeaderSection2/>
        </div>
    )
}

export default HomeHeader2;