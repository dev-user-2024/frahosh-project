
import Button from '../../buttons/button.component';
import styles from './styles.module.css' 

function SingleMatrixDefinition(props){
    //  if matrix is not square, some matrix operations must be disabled
    const disabled = (props.rowDimension === props.columnDimension) ? "" : "disabled";

    console.log("nonSquare is: ")
    console.log(disabled)

    console.log("Matrix name in singleMatrixDefinition:")
    console.log(props.matrixName)

    return(
        <div className={"single-matrix-definition"}>
            <div className={styles.headercard}>
                <span className={styles.matrixname}>ماتریکس {props.matrixName}</span>
                {props.dimensionSettings}
            </div>
            <div className={styles.matrixelements}>
                {props.matrix}
            </div>
            <div className={styles.bottomcard}>

                    <Button buttonType="little"  onClick={() => props.calculations.inverseMatrix(props.matrixName)} disabled={disabled}>معکوس</Button>
                    <Button buttonType="little" onClick={() => props.calculations.calculateDeterminant(props.matrixName)} disabled={disabled}>دترمینان</Button>
                    <Button buttonType="little"  onClick={() => props.calculations.transposeMatrix(props.matrixName)} disabled={disabled}>جا به جا (T)</Button>

            </div>
        </div>
    )
}

export default SingleMatrixDefinition;