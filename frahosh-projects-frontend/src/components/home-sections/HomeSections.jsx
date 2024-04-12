
import React from 'react'
import HomeSection1 from "./home-section1/HomeSection1"
import HomeSection2 from "./home-section2/HomeSection2"
import HomeSection3 from "./home-section3/HomeSection3"
import HomeSection4 from "./home-section4/HomeSection4"
import HomeSection5 from "./home-section5/HomeSection5"
import HomeSection6 from "./home-section6/HomeSection6"

import styles from "./homeSections.module.css"
const HomeSections = () => {
  return (
    <div className={styles.homeSections}>
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
    </div>
  )
}

export default HomeSections