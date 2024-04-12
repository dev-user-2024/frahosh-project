
import styles from "./buttons.module.css";

const BUTTON_TYPE_CLASSES = {
    button1 : "button_1",

}

const Button = ({ children, buttonType, ...otherProps }) => {
    const ButtonName = BUTTON_TYPE_CLASSES[buttonType]
    return (
        <button
            className={`${styles.button_container} ${styles[ButtonName]}`}
            {...otherProps}
        >
            {children}
        </button>

    )
}

export default Button;