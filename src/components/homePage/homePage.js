import React from 'react';
import HomePageBenefits from "./benefits/homePageBenefits";
import FirstCompHomePage from "./firstAdInHomePage/firstCompHomePage";
import OurCardsHomePage from "./ourCards/ourCardsHomePage";
import StudentsComments from "./StudentsComments/studentsComments";
import TeacherComponent from "./teacherComponent/teacherComponent";
import EmailUs from "./emailUs/emailUs";

function HomePage(props) {
    return (
        <>
            <FirstCompHomePage/>
            <OurCardsHomePage/>
            <HomePageBenefits/>
            <StudentsComments/>
            <TeacherComponent/>
            <EmailUs/>
        </>
    );
}

export default HomePage;