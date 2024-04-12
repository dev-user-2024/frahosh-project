import React from 'react';
import styles from './sort.module.css';
import { ReactComponent as Sort } from "../../assests/icons/sort.svg";
function sort() {
    return (
        <div>
            <div className={styles.row}>
                <div className={styles.title}><Sort /><p>مرتب سازی بر اساس:</p></div>
                <div className={styles.items}>
                    <p className={styles.item}>جدیدترین</p>
                    <p className={styles.item}>پربازدیدترین</p>
                    <p className={styles.item}>محبوب ترین</p>
                </div>
            </div>
        </div>
    );
}

export default sort;