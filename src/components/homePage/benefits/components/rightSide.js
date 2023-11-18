import React from 'react';
import {Link} from "react-router-dom";
import './styles/rightSide.css';
import fonts from "../../../../GlobalTools/fonts";
import colors from "../../../../GlobalTools/colors";

function RightSide(props) {
    return (
        <div className="flex flex-col justify-between right-side-com-homPageBenefit" style={{direction:'rtl' , fontFamily:fonts.IBM}}>
            <div className="h-1/2 flex flex-col justify-around">
                <h6 className="font-bold pb-1.5">الفوائد</h6>
                <h2 className="font-bold">ما
                    هي
                    <div className="px-1 inline-block" style={{color:colors.thirdColorBold}}>الفوائد</div>
                    التي تحصل عليها من التعلم معنا</h2>
                <p className="py-4">لدينا الخبرة الكافية لمنحكم دائما خدمات الدراسة التي لم تمر معكم في المدارس</p>
            </div>
            <div className="h-1/2 flex items-center ">
                <div style={{backgroundColor:colors.grayColor , color:colors.whiteColor}} className="font-bold h-[50px] w-[120px] flex items-center justify-center rounded-lg z-10 absolute under-a-explore-button">
                    <i className="fa-solid fa-magnifying-glass fa-rotate-90 px-1" color={colors.whiteColor}></i>
                    اكتشف
                </div>
                <Link style={{backgroundColor:colors.secondColor , color:colors.whiteColor}} className="font-bold h-[50px] w-[120px] flex items-center justify-center rounded-lg z-10 transition-all duration-300  -translate-y-1 -translate-x-1 hover:translate-x-0 hover:translate-y-0">
                    <i className="fa-solid fa-magnifying-glass fa-rotate-90 px-1" color={colors.whiteColor}></i>
                    اكتشف
                </Link>
            </div>
        </div>
    );
}

export default RightSide;