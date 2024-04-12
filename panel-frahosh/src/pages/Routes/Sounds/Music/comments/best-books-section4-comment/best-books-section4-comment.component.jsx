import styles from "./best-books-section4-comment.styles.module.css"
import React from "react";

const BestBooksSection4Comment = ({ id, name, star, content, imgSrc }) => {

    return (
        <div className={styles.comment} >
            <div className={styles.commentInfo} key={id}>
                <div className={styles.commentInfoPic}>
                    <img src={imgSrc} alt="" />
                    <h6>{name}</h6>
                </div>
                <h6>{star}</h6>
            </div>
            <div className={styles.commentContent}>
                <p>{content}</p>
            </div>
        </div>
    )
}


export default BestBooksSection4Comment;