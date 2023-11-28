import React, {useState} from 'react';
import './mainNavbarLogo.png';
import './mainNavbar.css';
import {Link} from "react-router-dom";
import colors from "../../../GlobalTools/colors";
import fonts from "../../../GlobalTools/fonts";


const loginButton = ()=>{
    return(
        <Link to={"/login"} id="login-button-navbar"  className="text-black bg-black mx-3 px-3 py-2.5 flex items-center justify-center font-normal rounded-lg transition-all duration-300 hover:translate-x-1">
                    <span>
                        تسجيل الدخول
                    </span>
            <i className="fa-solid fa-right-to-bracket px-1"></i>
        </Link>
    );
};
const mainLinks = ()=>{
    return (
        [
            <span style={{padding:'8px'}} className="font-medium mx-3">
                    <i className="fa-solid fa-house px-1" ></i>
                    <a href={"/#home"}>
                        الرئيسية
                    </a>
                </span>,
            <span style={{padding:'8px'}} className="font-medium mx-3">
                        <i className="fa-solid fa-circle-info px-1"></i>
                    <a href={"/#information"}>
                        معلومات عنا
                    </a>
                </span>,
            <span style={{padding:'8px'}} className="font-medium mx-3">
                        <i className="fa-solid fa-phone fa-rotate-270 px-1"></i>
                    <a href={"/#contact"}>
                        اتصل بنا
                    </a>
                </span>,
            <span style={{padding:'8px'}} className="font-medium mx-3">
                        <i className="fa-solid fa-ranking-star px-1"></i>
                    <a href={"/#comments"}>
                        اراء الطلبة السابقين
                    </a>
                </span>
        ]
    );
}
const userImageHandler = ()=>{
    const userOwnNavbarWhite = document.getElementById("user-own-navbar-white");
    const userOwnNavbar = document.getElementById("user-own-navbar");

    if(userOwnNavbar != null)
        userOwnNavbar.classList.remove("display-none");
    if(userOwnNavbarWhite != null){
        userOwnNavbarWhite.classList.remove("toLeftAnimation");
        userOwnNavbarWhite.classList.add("toRightAnimation");
    }
    document.getElementsByTagName("body")[0].style.overflow='hidden';
}


function MainNavbar(props) {
    const [authenticated , setAuthenticated] = useState(true);
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
                {authenticated ?
                    <div onClick={userImageHandler} className="w-11 h-11 rounded-full mx-3 ml-8 hover:outline hover:outline-offset-2 hover:outline-[3px] hover:outline-[#4791e0] cursor-pointer transition transition-all duration-200">
                        <img src={require('../../../GlobalTools/avatarLogo/9439775.jpg')} className="object-cover rounded-full"/>
                    </div> : loginButton()
                }
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