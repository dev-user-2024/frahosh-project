import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section1 from "../../../../Components/jozveh/video/sec-1/section1";
import Section1Text from "../../../../Components/jozveh/text/sec-1/section1";


function Nopage() {
    return (
      <div>
        <h3>
          404
        </h3>
      </div>
    );
  }

const Jozveh = () => {
    const jozveh = useParams();
    const id = useParams();
    const [info , setInfo] = useState();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await axios.get(`$`, {
            headers: { authorization: `Bearer ${token}` },
          });
          console.log(data["data"])
          setInfo(data["data"])
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);
    if(jozveh.jozveh === "video"){
        return(
           <Fragment>
            <Section1  info ={info}  />
           </Fragment>
        )
    }
    if(jozveh.jozveh === "text"){
        return(
            <Fragment>
                <Section1Text info ={info} />
            </Fragment>
        )
    }
    else {
        return(
            <Nopage />
        )
    }
}
 
export default Jozveh;