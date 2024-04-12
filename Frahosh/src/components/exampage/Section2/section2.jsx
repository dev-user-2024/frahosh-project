import first from '../../../assets/image/exampage-(1).png';
import two from '../../../assets/image/exampage-(2).png';
import three from '../../../assets/image/exampage-(3).png';
import four from '../../../assets/image/exampage-(4).png';
import five from '../../../assets/image/exampage-(5).png';
import six from '../../../assets/image/exampage-(6).png';
import seven from '../../../assets/image/exampage-(7).png';
import eight from '../../../assets/image/exampage-(8).png';
import styles from './section2.module.css';
import Grid from '@mui/material/Grid';

const testpagesec2 = () => {
    return ( 
        <div className={styles.Section1}>
            <div className={styles.container}>
            <img className={styles.images} src={first} alt="pic" />
            <img className={styles.images} src={two} alt="pic" />
            <img className={styles.images} src={three} alt="pic" />
            <img className={styles.images} src={four} alt="pic" />
            <img className={styles.images} src={five} alt="pic" />
            <img className={styles.images} src={six} alt="pic" />
            <img className={styles.images} src={seven} alt="pic" />
            <img className={styles.images} src={eight} alt="pic" />
            </div>
        </div>
    );

    }
export default testpagesec2;