import React, { Fragment } from "react";
import Section1 from "../../components/about-us/sec-1/section1";
import Section2 from "../../components/about-us/sec-2/section2";
import Navigation2 from "../../components/navigation-2/navigation-2.component"
const AboutUs = () => {
    return ( 
        <Fragment>
        <Navigation2/>
        <Section1 />
        <Section2 />
        </Fragment>
     );
}
 
export default AboutUs;