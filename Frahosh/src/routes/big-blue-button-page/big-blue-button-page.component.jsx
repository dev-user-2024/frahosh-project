import { Fragment } from "react"
import Navigation2 from "../../components/navigation-2/navigation-2.component"
import BigBlueButtonSections from "../../components/big-blue-button-sections/big-blue-button-section.component"
import Footer from "../../components/footer/footer"

const BigBlueButtonPage = () => {
    return (
        <Fragment>
            <Navigation2 />
            <BigBlueButtonSections />
            <Footer/>

        </Fragment >


    )
}

export default BigBlueButtonPage;