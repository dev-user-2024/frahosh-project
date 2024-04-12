import React from "react";
import { useParams } from "react-router-dom";
import ChartAverage from "./average";
import ChartMiddle from "./middle";


function Nopage() {
    return (
      <div>
        <h3>
          404
        </h3>
      </div>
    );
}

const TestChart = () => {
    const item = useParams();
    if (item.item === "average"){
        return(
            <ChartAverage />
        )
    }
    if (item.item === "middle"){
        return(
            <ChartMiddle />
        )
    }
    else {
        return(
            <Nopage />
        )
    }
}
 
export default TestChart;