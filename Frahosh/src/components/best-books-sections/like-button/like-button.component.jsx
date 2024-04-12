import React, { useState } from "react";
import HeartLike from "../../../assets/icons/heart.png"

import "./like-button.styles.css"

const LikeButtonComponent = ({likes}) => {


    const [like, setLike] = useState(0),
        [isLike, setIsLike] = useState(false)


    const onLikeButtonClick = () => {
        setLike(like + (isLike ? -1 : 1));
        setIsLike(!isLike);
    }

    return (

        <div className={`like-button ${isLike ? "liked" : ""}`} onClick={onLikeButtonClick}>
            <img src={HeartLike} alt="" />
            <p>{likes} نفر پسندیده‌اند</p>
        </div>


    );
};

export default LikeButtonComponent