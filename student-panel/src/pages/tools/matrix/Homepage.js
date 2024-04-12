import Header from '../../../Components/tools/matrix/Header'
import DefinitionSection from '../../../Components/tools/matrix/Sections/DefinitionSection'
import ResultSection from '../../../Components/tools/matrix/Sections/ResultSection'
import styles from "./main.module.css"
function Homepage(props) {

    return (
        <div className={styles.main}>
            <Header />
            <DefinitionSection
                definedMatrices = {props.initialData.definedMatrices}
                calculations = {props.calculations}
                definitionSectionFunctions = {props.definitionSectionFunctions}
            />
            <ResultSection
                matrixGetters = {props.matrixGetters}
                expressionText = {props.expressionText}
                resultMatrix = {props.resultMatrix}
                parseError = {props.parseError}
            />
        </div>
    )
}

export default Homepage