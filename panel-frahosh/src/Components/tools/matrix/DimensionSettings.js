

import Button from '../../buttons/button.component'
import styles from "./styles.module.css"

function DimensionSettings (props) {

    return (
        <div className={"dimension-settings"}>
            <div className={styles.dimensionheader}>
                سطر ها : <span>{props.rowDimension}</span>
            </div>
            <div className={styles.buttonlist}>

                    <Button buttonType="littlenum" onClick={() => props.functions.addRowToMatrix(props.id)}>+</Button>
                    <Button buttonType="littlenum" onClick={() => props.functions.removeRowFromMatrix(props.id)}>-</Button>

            </div>
            <div className={styles.dimensionheader}>
                ستون ها : <span>{props.columnDimension}</span>
            </div>
            <div className={styles.buttonlist}>

                    <Button buttonType="littlenum" variant="primary" onClick={() => props.functions.addColumnToMatrix(props.id)}>+</Button>
                    <Button buttonType="littlenum" onClick={() => props.functions.removeColumnFromMatrix(props.id)}>-</Button>

            </div>
        </div>
    )
}

export default DimensionSettings