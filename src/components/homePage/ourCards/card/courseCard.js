import React from 'react';
import {Link} from "react-router-dom";
import './courseCard.css';
import shadows from "../../../../GlobalTools/shadows";

function CourseCard(props) {
    const shekelSym = '₪';
    const videoSym = ()=>{
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 28 28" className="mr-2 ml-1">
                <path fill="#212121" d="M5.25 5.5A3.25 3.25 0 0 0 2 8.75v10.5a3.25 3.25 0 0 0 3.25 3.25h10.502a3.25 3.25 0 0 0 3.25-3.25v-1.58l4.541 3.112a1.25 1.25 0 0 0 1.957-1.03V8.247a1.25 1.25 0 0 0-1.956-1.03l-4.542 3.11V8.75a3.25 3.25 0 0 0-3.25-3.25H5.25Zm13.752 10.352v-3.707L24 8.723v10.554l-4.998-3.425Zm-1.5-7.102v10.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V8.75C3.5 7.784 4.284 7 5.25 7h10.502c.967 0 1.75.784 1.75 1.75Z"/>
            </svg>
        );
    };
    const timeSym = ()=>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 19 19" className="mx-1 mr-2">
                <g clip-path="url(#a)">
                    <path fill="#000" d="M9.5 0C4.262 0 0 4.262 0 9.5S4.262 19 9.5 19 19 14.738 19 9.5 14.738 0 9.5 0Zm0 17.627c-4.48 0-8.126-3.646-8.126-8.127 0-4.481 3.645-8.127 8.126-8.127S17.627 5.02 17.627 9.5s-3.646 8.127-8.127 8.127Z"/>
                    <path fill="#000" d="M12.248 10.374h-.01l-2.051.031V5.036a.687.687 0 1 0-1.374 0v6.077c0 .027.006.054.01.08.002.017.002.034.005.051.006.03.017.057.026.085.005.014.009.03.015.043.012.028.028.054.043.08.007.012.012.025.02.036a.653.653 0 0 0 .059.071c.008.01.015.02.025.03.022.022.047.04.072.06l.029.024a.656.656 0 0 0 .086.046l.03.017a.704.704 0 0 0 .108.033c.007.002.013.005.02.006a.7.7 0 0 0 .138.014h.01l2.75-.041a.687.687 0 0 0-.01-1.374Z"/>
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h19v19H0z"/>
                    </clipPath>
                </defs>
            </svg>

        );
    };

    return (
        <div className={'cards-component-home-page-second-component-card w-[23%] bg-white rounded-lg ' + shadows}>
            <div className="w-[96%] mx-auto">
                <img src={props.imageOfCard} className="object-cover w-full h-fit mx-auto mt-3 rounded-lg"/>
            </div>
            <div style={{borderBottom:'0.5px dashed black' , direction:'rtl' }} className="w-[96%] mx-auto p-3">
                <div className="text-[#ACACAC] font-medium text-[16px]">
                    كيمياء
                </div>
                <div className="text-[#000000] font-semibold text-[20px]">
                    {props.nameOfCard}
                </div>
                <div className="text-[#FF7426] font-semibold text-[18px]">
                    {shekelSym} {props.priceOfCard}
                </div>
            </div>
            <div className="w-[96%] h-[90px] mx-auto mt-2 relative">
                <div className="flex flex-row-reverse">
                    <span className="flex justify-center items-center text-[#ACACAC] font-medium text-[16px]">
                        {props.timeOfCard}
                        {timeSym()}
                    </span>
                    <span className="flex justify-center items-center text-[#ACACAC] font-medium text-[16px]">
                        لقاء
                        <span className="pl-1">+{props.numberOfLessons}</span>
                        {videoSym()}
                    </span>
                </div>
                <div className="flex justify-center items-center relative h-full">
                    <Link className="text-white font-medium text-[18px] bg-[#FF7426] px-5 py-2.5 rounded-full absolute top-[40px]">
                        انضم للبطاقة
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;