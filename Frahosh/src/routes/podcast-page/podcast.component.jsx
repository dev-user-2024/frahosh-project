import Navigation2 from "../../components/navigation-2/navigation-2.component"
import styles from "./podcast.module.css"
import Footer from "../../components/footer/footer";
import PodcastSection1 from "../../components/podcast/podcast-section1/podcast-section1-componenet"
import PodcastSection2 from "../../components/podcast/podcast-section2/podcast-section2-componenet"
import PodcastSection3 from "../../components/podcast/podcast-section3/podcast-section3-componenet"
import PodcastSection4 from "../../components/podcast/podcast-section4/podcast-section4-componenet"
import PodcastSection5 from "../../components/podcast/podcast-section5/podcast-section5-componenet"

// import PodcastSection6 from "../../components/podcast/podcast-section6/podcast-section6-componenet"
const Podcastpage = () => {
    return (
        <div className={styles.container}>
            <Navigation2 />
            <PodcastSection1 />
            <PodcastSection2 />
            <PodcastSection3 />
            <PodcastSection4 />
            <PodcastSection5 />
            {/* <PodcastSection6 /> */}
            <Footer />
        </div>
    )
}

export default Podcastpage;