import React, { Fragment } from "react";
import NewCard from "../../../components/document-list/sec-1/new-card.comonent";
import MostVisitedCard from "../../../components/document-list/sec-2/most-visited-card.comonent";
import StudyCard from "../../../components/document-list/sec-3/study-card.comonent";
import PsychologyCard from "../../../components/document-list/sec-4/psychology-card.component";
import DocumentSearch from "../../../components/document-list/search/search";
import Footer from "../../../components/footer/footer";
import Navigation2 from "../../../components/navigation-2/navigation-2.component";

const DocumentList = () => {
    return ( 
        <Fragment>
        <Navigation2 />
        <DocumentSearch />
            <NewCard />
            <MostVisitedCard />
            <StudyCard />
            <PsychologyCard />
            <Footer />
        </Fragment>
     );
}
 
export default DocumentList;