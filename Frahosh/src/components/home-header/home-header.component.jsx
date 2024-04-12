import Navigation from "../navigation/navigation.component";
import HeaderSection1 from "./header-section-1/header-section-1.component"
import HeaderSection2 from "./header-section-2/header-section-2.component"

import styles from "./home-header.module.css"

const HomeHeader = () => {

    return (
        <div className={styles.header}>
            <Navigation />
            <HeaderSection1/>
            <HeaderSection2/>
        </div>
    )
}

export default HomeHeader;