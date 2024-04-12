import { Fragment } from "react"
import Navigation2 from "../../components/navigation-2/navigation-2.component"
import BestBooksSections from "../../components/best-books-sections/best-books-sections.components"
import Footer from "../../components/footer/footer"

const PodcastInfo = () => {
    return (
        <Fragment>
            <Navigation2/>
            <BestBooksSections/>
            <Footer/>
        </Fragment>
    )
}

export default PodcastInfo;