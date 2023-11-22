import React from 'react';
import {Link} from "react-router-dom";
import './styles/firstCompHomePage.css';
import fonts from "../../../GlobalTools/fonts";
import colors from "../../../GlobalTools/colors";

function FirstCompHomePage(props) {
    return (
            <div id="home" className="h-[830px] bg-[#fdf8ee] w-full flex justify-center relative items-center first-component-home-page-ad">
                <img src={require('./images/effectOfMainFirstComp.png')} className="object-cover absolute"/>
                <img src={require('./images/mainLogoForFirstComp.png')}/>
                <img src={require('./images/circleForMainFirstComp.png')} className="absolute w-1/6 object-cover right-[7%] top-[18%] z-10"/>
                <div className="w-1/2 absolute left-0 flex flex-col justify-center items-center h-full pr-3 second-div-first-component-homepage">
                    <h1 className="m-0 p-0 font-bold text-4xl leading-tight" style={{direction:'rtl', fontFamily:fonts.LEMONADA}}>
                        الخيار
                        <span className="text-orange-400 px-1.5">الأذكى</span>
                        <br/>
                        نحو
                        <span className="text-orange-400 px-1.5">مستقبل </span>
                        أفضل
                        .
                    </h1>

                    <h3 className="text-lg font-medium p-4 m-0" style={{direction:'rtl'}}>
                        تقدم اكاديمية الأدهم دورات الكترونية لمادة الكيمياء
                    </h3>

                    <div className="py-6 flex justify-center subsrcibe-homepage-button">
                    <span className="bg-[#E2E0E0]  p-2.5 px-12 text-[#1B2A3D] rounded-lg font-medium absolute">
                        اشترك
                        <i className="fa-solid fa-circle-plus px-1.5"></i>
                    </span>
                        <Link to={"/signup"} className="bg-[#4D2C5E]  p-2.5 px-12 text-white rounded-lg font-medium  hover:opacity-[85%] -translate-x-1 -translate-y-1 hover:translate-x-0  hover:translate-y-0  transition-all duration-300 absolute">
                            اشترك
                            <i className="fa-solid fa-circle-plus px-1.5" style={{color:colors.whiteColor}}></i>
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default FirstCompHomePage;