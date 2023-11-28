import React, {useState} from 'react';
import HomePageBenefits from "./benefits/homePageBenefits";
import FirstCompHomePage from "./firstAdInHomePage/firstCompHomePage";
import OurCardsHomePage from "./ourCards/ourCardsHomePage";
import StudentsComments from "./StudentsComments/studentsComments";
import TeacherComponent from "./teacherComponent/teacherComponent";
import EmailUs from "./emailUs/emailUs";
import fonts from "../../GlobalTools/fonts";
import {Link} from "react-router-dom";
import UserNavbarAuthenticated from "../common_components/user_navbar_authenticated/userNavbarAuthenticated";

function HomePage(props) {
    return (
        <div className="relative">
            <FirstCompHomePage/>
            <OurCardsHomePage/>
            <HomePageBenefits/>
            <StudentsComments/>
            <TeacherComponent/>
            <EmailUs/>
        </div>
    );
}

export default HomePage;