import styles from "./Counseling-info.module.css"
const Counselinginfobox = ({children}) => {

    return (
        <div
            className={styles.card}>
            {children}
        </div>

    )
}

export default Counselinginfobox;