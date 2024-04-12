import React, { Fragment } from "react";
import Section1 from "../../components/OnlineExam/sec-1/section1";
import Section3 from "../../components/OnlineExam/sec-3/section3";
import Section4 from "../../components/OnlineExam/sec-4/section4";
import Section2 from "../../components/OnlineExam/sec-2/section2";
import Footer from "../../components/footer/footer";
import Navigation2 from "../../components/navigation-2/navigation-2.component";

const OnlineExam = () => {
    return ( 
        <Fragment>
        <Navigation2 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        </Fragment>
     );
}
 
export default OnlineExam;