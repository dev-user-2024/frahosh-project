import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import CardPic1 from "../../../assets/image/podcast.png";
import CardPic2 from "../../../assets/image/podcast (1).png";
import CardPic4 from "../../../assets/image/podcast (3).png";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg";
import "./relative-card.css";
const RelativeCard = () => {
    var cardItem = [["مصاحبه با علی محمدی رتبه یک ریاضی" ,CardPic1] ,
                    ["معرفی برترین کتب کنکور" , CardPic2],
                    ["آموزش لغت انگلیسی 504" ,CardPic4],
                    ["آموزش لغت انگلیسی 504" ,CardPic4]
]
    return (
                <div className="main-card">
                    <div className="MainCard">
                       <div className="card-title">
                <h4>جدیدترین مقالات</h4>
                <Link className="card-link">
                مشاهده همه
                <ArrowLeft/>
                </Link>
            </div>
            <div className="card-list">
                <Stack direction={{md: 'column', lg: 'row'}}>
                    {cardItem.map(i =>{
                        let cardText = i.at(0)
                        return(
                            <div className="card-item">
                                <Link>
                                <img className="card-item-pic" src={i.at(1)} alt="" />
                                <p className="card-item-text">{cardText}</p>
                                </Link>
                            </div>
                        )
                    })}
                </Stack>
            </div> 
                    </div>
        </div>
    
     );
}
 
export default  RelativeCard;