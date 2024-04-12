import styles from "./header-section-2-card.module.css"
const HeaderSection2Card = ({children}) => {

    return (
        <div
            className={styles.headersection2card}>
            {children}
        </div>

    )
}

export default HeaderSection2Card;