import React from 'react';
import './mainNavbarLogo.png';
import './mainNavbar.css';
import {Link} from "react-router-dom";
import colors from "../../../GlobalTools/colors";
import fonts from "../../../GlobalTools/fonts";

function MainNavbar(props) {


    const mainLinks = ()=>{
        return (
            [
                <span style={{padding:'8px'}} className="font-medium mx-3">
                        <i className="fa-solid fa-house px-1" ></i>
                    الرئيسية
                </span>,
                <span style={{padding:'8px'}} className="font-medium mx-3">
                        <i className="fa-solid fa-circle-info px-1"></i>
                    معلومات عنا
                </span>,
                <span style={{padding:'8px'}} className="font-medium mx-3">
                        <i className="fa-solid fa-phone fa-rotate-270 px-1"></i>
                    اتصل بنا
                </span>,
                <span style={{padding:'8px'}} className="font-medium mx-3">
                        <i className="fa-solid fa-ranking-star px-1"></i>
                    اراء الطلبة السابقين
                </span>
            ]
        );
    }

    return (
        <nav className="flex justify-between my-0 h-[70px] relative"  id="nav-bar-main" style={{background:colors.mainColor}}>
            <div className="flex flex-grow-0 order-2 items-center" id="nav-bar-main-logo">
                <div className="text-black my-auto font-bold text-lg" style={{fontFamily:fonts.IBM}}>
                    أكاديمية الأدهم
                </div>
                <img src={require('./mainNavbarLogo.png')} className="w-24 h-16" alt={"main Logo"}/>
                <div className="h-fit my-[15px] mx-2" id="responsive-lines">
                    <span className="icon w-[30px] h-[20px] flex flex-wrap justify-end">
                        <span className="w-full h-[2px] bg-black mb-[5px]"></span>
                        <span className="w-[65%] h-[2px] bg-black mb-[5px] transition-all duration-200"></span>
                        <span className="w-full h-[2px] bg-black"></span>
                    </span>
                    <ul className="m-0 p-0 list-none bg-[#4d2c5e] min-w-[150px] absolute right-[10px] z-50 top-[60px]" style={{direction:'rtl'}}>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[0]}</li>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[1]}</li>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[2]}</li>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[3]}</li>
                    </ul>
                </div>
            </div>

            <div style={{color:colors.whiteColor}} className="my-auto flex justify-center">
                <Link to={"/login"} id="login-button-navbar"  className="text-black bg-black mx-3 px-3 py-2.5 flex items-center justify-center font-normal rounded-lg transition-all duration-300 hover:translate-x-1">
                    <span>
                        تسجيل الدخول
                    </span>
                    <i className="fa-solid fa-right-to-bracket px-1"></i>
                </Link>
                <div className="py-2.5 flex-row-reverse text-black" style={{direction:'rtl'}} id="nav-bar-main-items">
                    {
                        mainLinks()
                    }
                </div>

            </div>

        </nav>


    );
}

export default MainNavbar;