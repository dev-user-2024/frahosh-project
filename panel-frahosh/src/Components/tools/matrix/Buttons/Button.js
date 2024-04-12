import React from "react";
import Button from '../../../buttons/button.component';
import styles from '../styles.module.css'

/**
 * This button is used for both defined matrix button and operation button.
 * Clicking this button will insert the value of button into expression text.
 * @param props
 */
function Buttone (props) {
    const val = props.value

    return (
        <div className={styles.buttonlist}>
        <Button buttonType="littlev" value={val} onClick={() => props.handleClick()}>{val}</Button>
        </div>
    )
}

export default Buttone