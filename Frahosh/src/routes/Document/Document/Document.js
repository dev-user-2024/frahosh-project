import { Fragment } from "react";
import Section1 from "../../../components/document/sec-1/section1";
import Section2 from "../../../components/document/sec-2/section2";
import RelativeCard from "../../../components/document/sec-4/relative-card.component";
import Section3 from "../../../components/document/sec-3/section3";
import Footer from "../../../components/footer/footer";
import Navigation2 from "../../../components/navigation-2/navigation-2.component";
import axios from "axios";
import { serverApi } from "../../../confing/confing";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DocumentPage = () => {
    const {id} = useParams()
    const [info,setInfo] = useState({})
    useEffect(() => {
        const fetchData = async () => {
          try {
            const {data} = await axios.get(`${serverApi}blog/${id}`);
            console.log("b", data);
           setInfo(data)
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);
    return ( 
        <Fragment>
            <Navigation2 />
            <Section1 info={info} />
            {/*
        <Section2 />
            <Section3 />
            <RelativeCard />
        */}
            <Footer />
        </Fragment>
     );
}
 
export default DocumentPage;