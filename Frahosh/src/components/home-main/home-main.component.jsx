import React from "react";
import "./home-main.css"
import MainSection3 from "./main-section-3/main-section-3.component";
import MainSection4 from "./main-section-4/main-section-4.component";
import Card from "../home-card/home-card.comonent";
import Card2 from "../home-card/home-card2.component";
import MainSection2 from "./main-section-2/main-section-2.component";
import MainSection1 from "./main-section-1/main-section-1.component";
import MainSection5 from "./main-section-5/main-section-5.component";
import Space from "./Space/space";



const HomeMain = () => {
    return (
        <div className="Home-Main">
         <MainSection1/>
         <MainSection2/>
         <MainSection3/>
         <Card/> 
         <MainSection4/>
         <Card2/>
         <MainSection5/>
         <Space/>
        </div>



    );
}

export default HomeMain;