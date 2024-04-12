
import styles from "./styles.module.css"

function Matrix (props) {
    let disabled = (props.disabled === true) ? "disabled" : "";

    console.log("Elements of matrix:")
    console.log(props.elements)

    const elements = props.elements.map((row, indexRow) =>
        <div key={props.id + "" + indexRow} className={"matrix-row"}>
            {
                row.map((element, indexCol) =>
                    <input onChange={(e) => props.functions.changeElementInMatrix(props.id, indexRow, indexCol, e.target.value)} key = {indexRow+""+indexCol+props.id} defaultValue={element}  disabled={disabled} className={`${styles.matrixelement} ${styles.result}`}>
                    </input>
                )
            }
        </div>
    );


    return(
        <div key={props.id+disabled} className={styles.matrix}>{elements}</div> 
    )
}

export default Matrix