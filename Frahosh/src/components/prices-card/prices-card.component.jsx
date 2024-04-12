import styles from "./prices-card.module.css"

const PricesCard = (props) => {

    const { planType, planDescription, planPrice, planTheme } = props;
    return (
        <div className={`${styles.cardContainer} ${styles[planTheme]}`}>
            <div className={styles.cardHeader}>
                <h3>{planType}</h3>
            </div>
            <div className={styles.cardContent}>
                <p>{planDescription}</p>
                <h3>{planPrice}</h3>
            </div>
        </div>
    )
}

export default PricesCard;