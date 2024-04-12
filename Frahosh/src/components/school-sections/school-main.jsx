import SchoolSection1 from "./school-section-1/school-section-1.component";
import SchoolSection2 from "./school-section-2/school-section-2.compnent";
import Example from "./school-section-3/school-section-3.components"

import "./school-main.css"
const SchoolMain = () => {
    return ( 
        <div className="school-main">
            <SchoolSection1/>
            <SchoolSection2/>
            <Example/>
            {/* <Prices/>    */}
        </div>
     );
}
 
export default SchoolMain;