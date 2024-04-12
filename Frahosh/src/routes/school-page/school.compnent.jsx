import React from "react";
import Footer from "../../components/footer/footer";
import Navigation2 from "../../components/navigation-2/navigation-2.component";
import SchoolMain from "../../components/school-sections/school-main";
import styles from "./school.module.css"

const School = () => {
    return ( 
        <div className={styles.container}>
            <Navigation2/>
            <SchoolMain/>
            <Footer/>
       </div>
     );
}
 
export default School;