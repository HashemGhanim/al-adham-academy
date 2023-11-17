import React from 'react';
import {Link} from "react-router-dom";

function TestHomePage(props) {
    return (
            <div className="h-[750px] bg-[#fdf8ee] w-full flex justify-center relative items-center">
                <img src={require('./Group 327effectOfMainFirstComp.png')} className="object-cover absolute"/>
                <img src={require('./OBJECTSMainLogoForFirstComp.png')} className="w-1/2 object-cover absolute right-[8%] top-[18%] z-20"/>
                <img src={require('./Ellipse 1circleForMainFirstComp.png')} className="absolute w-1/6 object-cover right-[7%] top-[18%] z-10"/>
                <div className="w-1/2 absolute left-0 flex flex-col justify-center items-center h-full pr-3">
                    <h1 className="m-0 p-0 font-bold text-4xl leading-tight" style={{direction:'rtl', fontFamily:'\'Lemonada\', cursive'}}>
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

                    <div className="py-6 flex justify-center">
                    <span className="bg-[#E2E0E0]  p-2.5 px-12 text-[#1B2A3D] rounded-lg font-medium absolute">
                        اشترك
                        <i className="fa-solid fa-circle-plus px-1.5"></i>
                    </span>
                        <Link className="bg-[#4D2C5E]  p-2.5 px-12 text-white rounded-lg font-medium  hover:opacity-[85%] -translate-x-1 -translate-y-1 hover:translate-x-0  hover:translate-y-0  transition-all duration-300 absolute">
                            اشترك
                            <i className="fa-solid fa-circle-plus px-1.5" style={{color: '#ffffff'}}></i>
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default TestHomePage;