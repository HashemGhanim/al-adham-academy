import React from 'react';
import TopComponent from "./components/topComponent";
import SecondComponent from "./components/secondComponent";

function OurCardsHomePage(props) {
    return (
        <div className="cards-component-home-page mt-12">
            <TopComponent/>
            <SecondComponent/>
        </div>
    );
}

export default OurCardsHomePage;