import React, { Fragment } from "react";
import Section1 from "../../components/smartening/sec-1/section1";
import Section2 from "../../components/smartening/sec-2/section2";
import Section3 from "../../components/smartening/sec-3/section3";
import Footer from "../../components/footer/footer";
import Navigation2 from "../../components/navigation-2/navigation-2.component";

const Smartening = () => {
    return ( 
        <Fragment>
        <Navigation2 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </Fragment>
     );
}
 
export default Smartening;