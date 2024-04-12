import React from "react";
import { Fragment } from "react";
import Section1 from "../../components/schedule/sec-1/section1";
import Section3 from "../../components/schedule/sec-3/section3";
import Section4 from "../../components/schedule/sec-4/section4";
import Section5 from "../../components/schedule/sec-5/section5";
import Section2 from "../../components/schedule/sec-2/section2";
import Navigation2 from "../../components/navigation-2/navigation-2.component";
import Footer from "../../components/footer/footer";

const Schedule = () => {
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
 
export default Schedule;