import React, { Fragment } from "react";
import Section1 from "../../components/solving/sec-1/section1";
import Section2 from "../../components/solving/sec-2/section2";
import Section3 from "../../components/solving/sec-3/section3";
import Section5 from "../../components/solving/sec-5/section5";
import Section4 from "../../components/solving/sec-4/section4";
import Footer from "../../components/footer/footer";
import Navigation2 from "../../components/navigation-2/navigation-2.component";

const Solving = () => {
    return ( 
        <Fragment>
            <Navigation2 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </Fragment>
     );
}
 
export default Solving;