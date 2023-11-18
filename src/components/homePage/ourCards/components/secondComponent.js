import React from 'react';
import CourseCard from "../card/courseCard";
import '../images/Group 338.png';


function SecondComponent(props) {
    return (
        <div className="cards-component-home-page-second-component flex justify-evenly flex-wrap w-[92%] mx-auto my-[100px]">
            <CourseCard nameOfCard={"اشتراك سنة"} priceOfCard={"700"} timeOfCard={"سنة كاملة"} numberOfLessons={"200"} imageOfCard={require('../images/RectanglefourthRectangle.png')}/>
            <CourseCard nameOfCard={"اشتراك فصل"} priceOfCard={"400"} timeOfCard={"نصف سنة"} numberOfLessons={"100"} imageOfCard={require('../images/Rectangle.png')}/>
            <CourseCard nameOfCard={"اشتراك وحدة"} priceOfCard={"150"} timeOfCard={"شهر"} numberOfLessons={"20"} imageOfCard={require('../images/RectanglesecondRectangle.png')}/>
            <CourseCard nameOfCard={"اشتراك حصة خاصة"} priceOfCard={"100"} timeOfCard={"ساعة ونصف"} numberOfLessons={"1"} imageOfCard={require('../images/RectanglethirdRectangle.png')}/>
        </div>
    );
}

export default SecondComponent;