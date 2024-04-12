import React from "react";
import { Stack, Typography } from "@mui/material";
import Button from "../../../buttons/button.component";
import ArrowLeft from "../../../../assets/icons/arrow-left-white.png";
import styles from "./rightSide.style.module.css";
// import pic1 from "../../../../assets/image/Rectangle 297.png";
import ZPattern from "../../../z-pattern/z-pattern.component";


const RightSide = ({title , text  , pic , width}) => {
    return ( 
        <div className={styles.sec3_bg}>
        <div className={styles.sec3}>
            <ZPattern zPatternType={"zPatternRtl"}>
            <Stack
                    direction={{ md: 'column', lg: 'row' }}
                    spacing={3}
                    justifyContent="space-around"
                    alignItems="center"
                    width={"100%"}
                >
                <div className={styles.text_context}> 
                <Typography  sx={{fontFamily:"IRANSansX" , fontSize:{md:"22px"}, lineHeight:"235%" , width:{md:{width} ,xs :"100%"}}}>  {title}
                </Typography>
                    <Typography sx={{fontFamily:"IRANSansX" , fontSize:" 16px" , width:{md:{width} ,xs :"100%"} , lineHeight:" 50px" , fontWeight:" 500" }}>{text}</Typography>
                   
                </div>
                <div className="z-pattern-image">
                    <img className={styles.pic} src={pic} alt=""/>
                </div>
                </Stack>
            </ZPattern>
            </div>
            </div>
     );
}
 
export default RightSide;