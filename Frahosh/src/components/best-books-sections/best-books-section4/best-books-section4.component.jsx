import BestBooksSection4CommentList from "./best-books-section4-comment-list/best-books-section4-comment-list.component"
import BestBooksSection4SuggestionList from "./best-books-section4-suggestion-list/best-books-section4-suggestion-list.component"


import styles from "./best-books-section4.styles.module.css"

const BestBooksSection4 = () => {

return (
    <div className={styles.bestBooksSection4Container}>
        <BestBooksSection4CommentList/>
        <BestBooksSection4SuggestionList/>
    </div>

)
}

export default BestBooksSection4