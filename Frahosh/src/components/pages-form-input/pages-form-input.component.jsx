import styles from "./pages-form-input.styles.module.css"

const PagesFormInput = ({ label, ...otherProps }) => {

    return (
        <div className={styles.inputContainer}>
            
            <label className="form-input-label">{label}</label>
            <input className={styles.pagesFormInput} {...otherProps} />

        </div >
    )
}

export default PagesFormInput