import styles from "./best-books-section4-comment.styles.module.css"

const BestBooksSection4Comment = ({ id, name, date, content, imgSrc }) => {

    return (
        <div className={styles.comment} >
            <div className={styles.commentInfo} key={id}>
                <h6>شنوتو</h6>
                <div className={styles.commentInfoPic}>
                    <img src={imgSrc} alt="" />
                    <h6>{name}</h6>
                </div>
                <h6>{date}</h6>
            </div>
            <div className={styles.commentContent}>
                <p>{content}</p>
            </div>
        </div>
    )
}


export default BestBooksSection4Comment;