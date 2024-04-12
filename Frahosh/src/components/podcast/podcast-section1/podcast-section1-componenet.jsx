import Podcastbanner from '../../../assets/image/Podcast-Banner-1.png';
import styles from './podcast-section1.module.css';

const PodcastSection1 = () => {
    return ( 
        <div className={styles.Section1}>
            <img className={styles.podcastbanner} src={Podcastbanner} alt="پادکست فراهوش" />
        </div>
    );
}
 
export default PodcastSection1;