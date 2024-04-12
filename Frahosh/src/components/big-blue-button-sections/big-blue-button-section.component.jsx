import Prices from "./big-blue-button-prices/big-blue-button-prices.component"
import BigBlueButtonZPatternContainer from "./z-pattern-container/z-pattern-container.component"
import BigBlueButtonContactContainer from "./contact-container/big-blue-button-contact-container.component.jsx"
import styles from "./big-blue-button-sections.styles.module.css"



const BigBlueButtonSections = () => {
    return (
        <div className={styles.sectionsContainer}>
            <BigBlueButtonZPatternContainer />

            <BigBlueButtonContactContainer/>
            
            <Prices />
  
        </div>
    )
}

export default BigBlueButtonSections;