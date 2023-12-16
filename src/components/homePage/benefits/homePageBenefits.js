import React from 'react';
import RightSide from "./components/rightSide";
import LeftSide from "./components/leftSide";
import './homePageBenefits.css'

function HomePageBenefits(props) {
    return (
        <div className="home-page-benefits mt-12">
            <RightSide/>
            <LeftSide/>
        </div>
    );
}

export default HomePageBenefits;