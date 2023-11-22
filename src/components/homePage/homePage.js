import React from 'react';
import HomePageBenefits from "./benefits/homePageBenefits";
import FirstCompHomePage from "./firstAdInHomePage/firstCompHomePage";
import OurCardsHomePage from "./ourCards/ourCardsHomePage";
import StudentsComments from "./StudentsComments/studentsComments";
import TeacherComponent from "./teacherComponent/teacherComponent";
import EmailUs from "./emailUs/emailUs";
import fonts from "../../GlobalTools/fonts";
import colors from "../../GlobalTools/colors";

function HomePage(props) {
    return (
        <div className="relative">
            <FirstCompHomePage/>
            <OurCardsHomePage/>
            <HomePageBenefits/>
            <StudentsComments/>
            <TeacherComponent/>
            <EmailUs/>
            <div className="fixed h-[110vh] w-full z-[70] bg-white top-0 top-[-70px]" style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                <div className="fixed h-full w-[280px] z-[80] bg-white top-0 rounded-tr-xl rounded-br-xl translate-x-[0px]">
                    <div className="w-[95%] rounded-tr-xl my-auto flex justify-end items-center border-b flex-wrap mr-4">
                        <div className="h-[70px] flex justify-end items-center w-full">
                            <div className="rtl">
                                <h2 className="font-semibold" style={{fontFamily:fonts.IBM}}>هاشم زرعي</h2>
                            </div>
                            <div className="w-11 h-11 rounded-full mx-3">
                                <img src={require('../../GlobalTools/avatarLogo/9439775.jpg')} className="rounded-full object-cover"/>
                            </div>
                        </div>
                        <div className="w-full rtl mx-4 mb-4 font-medium mt-1.5 text-[15px]">
                            📚 طالب توجيهي
                        </div>
                    </div>
                    <div className="w-[95%] my-auto mr-4 flex justify-end items-center border-b">
                        <div className="w-full rtl mx-4 my-5 font-medium text-[15px] cursor-pointer">
                            <i className="fa-regular fa-user pl-1"></i>
                             صفحتي الشخصية
                        </div>
                    </div>
                    <div className="w-[95%] my-auto mr-4 flex justify-end items-center flex-wrap border-b">
                        <ul className="p-0 m-0 w-full rtl">
                            <li className="w-full rtl mx-4 mt-5 font-medium text-[15px] block cursor-pointer ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="inline pl-1">
                                    <path d="M3 4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4V6C13 6.55228 12.5523 7 12 7H4C3.44772 7 3 6.55228 3 6V4ZM4.5 5.5H11.5V4.5H4.5V5.5ZM0 2.5C0 1.11929 1.11929 0 2.5 0H14C15.3807 0 16.5 1.11929 16.5 2.5V16.75C16.5 17.1642 16.1642 17.5 15.75 17.5H1.5C1.5 18.0523 1.94772 18.5 2.5 18.5H15.75C16.1642 18.5 16.5 18.8358 16.5 19.25C16.5 19.6642 16.1642 20 15.75 20H2.5C1.11929 20 0 18.8807 0 17.5V2.5ZM1.5 16H15V2.5C15 1.94772 14.5523 1.5 14 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V16Z" fill="#212121"/>
                                </svg>
                                المحاضرات
                            </li>
                            <li className="w-full rtl mx-4 mt-5  font-medium text-[15px] block cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="inline pl-1">
                                    <path d="M1.40032 19.8499C0.815513 20.2258 0 19.8525 0 19.209V3.42155C0 1.53187 1.7151 0 3.8308 0H12.6692C14.7849 0 16.5 1.53187 16.5 3.42155V19.209C16.5 19.8525 15.6844 20.2258 15.0997 19.8499L8.24998 15.4483L1.40032 19.8499ZM14.7319 3.42155C14.7319 2.40403 13.8084 1.57918 12.6692 1.57918H3.8308C2.69158 1.57918 1.76806 2.40403 1.76806 3.42155V17.6682L7.73371 13.8346C8.04218 13.6365 8.45791 13.6365 8.76626 13.8346L14.7319 17.6682V3.42155Z" fill="#212121"/>
                                </svg>
                                المحاضرات المسجلة
                            </li>
                            <li className="w-full rtl mx-4 mt-5 mb-5 font-medium text-[15px] cursor-pointer">
                                <i className="fa-regular fa-user pl-1"></i>
                                صفحتي الشخصية
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;