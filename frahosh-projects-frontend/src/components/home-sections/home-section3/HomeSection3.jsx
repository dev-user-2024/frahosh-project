
import { useState } from "react"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import ZPattern from "../../z_pattern/ZPattern"

import styles from "./homeSection3.module.css"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Z_PATTERN_TYPE_CLASSES = {
    zPatternRtl: "z_pattern_rtl",
    zPatternLtr: "z_pattern_ltr",
}

const ZPattern = ({ children, zPatternType, ...otherProps }) => {
    const { t, i18n } = useTranslation();

    const zPatternClass = Z_PATTERN_TYPE_CLASSES[zPatternType]

    return (

        <div className={`${styles.z_pattern_container} ${styles[zPatternClass]} ${i18n.language === 'en' ? styles.z_pattern_container2 : ""}`}
        >
            {children}
        </div>

    )
}

const HomeSection3 = () => {
    const { t, i18n } = useTranslation();
    const items = t('home.ourWorks.items', { returnObjects: true });
    
    const [numOfList, setNumOfList] = useState(3)

    const loadMoreItem = () => {
        setNumOfList(numOfList + 2)
    }

    return (
        <div className={styles.homeSection3}>
            <h2>
            {t('home.ourWorks.title')}
            </h2>
            <div className={styles.homeSection3_zPattern}>
                {
                    items.map((item, i) => (
                        <ZPattern key={i}>
                            <div className={styles.zPatternRtlContent}>
                                <div className={styles.z_pattern_image}>
                                    <img width='100%' height='100%' src={item.imgSrc} alt="" />
                                </div>

                                <div className={`${styles.z_pattern_text} ${i18n.language === 'fa' ? styles.rtl : styles.ltr}`}>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                    <ul>
                                        {
                                            item?.lists?.map((list, i) => <li key={i}>{list.name}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </ZPattern>
                    ))
                }
            </div>

            {/*
            <div className={styles.bestBooksSection4More} onClick={loadMoreItem} >
            <Link>{t('home.ourWorks.viewAll')}</Link>
            <ArrowForwardIcon />
        </div>
        */}

        </div>
    )
}

export default HomeSection3