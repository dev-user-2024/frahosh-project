
import React from 'react'
import Navigation from "../navigation/Navigation"

import styles from "./header.module.css"
import { useTranslation } from "react-i18next";
const Header = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className={styles.header}>
            <Navigation />
            <div className={styles.header_content}>
                <h5>{t('home.banner.welcome')}</h5>
                <h1 className={`${i18n.language === 'en' && styles.reflect}`}>{t('home.banner.title')}</h1>
                <h5>{t('home.banner.subTitle')}</h5>
            </div>
        </div>
    )
}

export default Header