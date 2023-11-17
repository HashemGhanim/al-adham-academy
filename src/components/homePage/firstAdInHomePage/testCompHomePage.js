import React from 'react';
import {Link} from "react-router-dom";
import './images/mainImageForHomePage-1.png';
import './images/mainImageForHomePage-2.png';
import './styles/firstAdInHomePage.css'

function FirstAdInHomePage(props) {
    return (
        <div className="first-home-page-logo-and-text-container m-0 p-0">
            <div  className="right-0 z-0 homepage-image">
                <img src={require('./images/mainImageForHomePage-1.png')} className="h-[850px]"/>
                <img src={require('./images/mainImageForHomePage-2.png')} />
            </div>
            <div className="left-0 z-10  homepage-text-image  h-full" >
                <div className={"aladham-academy-text  w-full text-center"} style={{fontFamily:'\'Lemonada\', cursive', color:'#000000' , fontWeight:'bold' , direction:'rtl'}}>
                    أكاديمية الأدهم
                </div>
                <div style={{fontFamily:'\'Arizonia\', cursive', color:'#000000' , direction:'rtl'}}
                     className="pl-28 hello-word-under-aladham-academy-text">
                    طريقك نحو التقدم و الأبداع و التميز، توفر الأكاديمية <br/>دروس للمواد الآتية :
                    <div style={{direction:'rtl'}} className="py-5">
                        <i className="fa-solid fa-circle pl-4" style={{color: '#000000'}}></i>
                        كيمياء
                    </div>
                </div>
                <div style={{fontFamily:'\'Arizonia\', cursive', color:'#000000' , direction:'rtl'}}
                     className="mt-[15px] subsrcibe-word-and-hello">
                    اشترك لتكن فردا من أفراد عائلتنا المميزة 👋
                </div>
                <div className="py-6 flex justify-center subsrcibe-homepage-button">
                    <span className="bg-[#1B2A3D]  p-2.5 px-12 text-[#1B2A3D] rounded-lg font-medium absolute">
                        اشترك
                        <i className="fa-solid fa-circle-plus px-1.5"></i>
                    </span>
                    <Link to={"/"} className="bg-[#44627A]  p-2.5 px-12 text-white rounded-lg font-medium  hover:opacity-[85%] -translate-x-1 -translate-y-1 hover:translate-x-0  hover:translate-y-0  transition-all duration-300 absolute">
                        اشترك
                        <i className="fa-solid fa-circle-plus px-1.5" style={{color: '#ffffff'}}></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FirstAdInHomePage;