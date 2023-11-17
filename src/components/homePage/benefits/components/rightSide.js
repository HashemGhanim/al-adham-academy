import React from 'react';
import {Link} from "react-router-dom";

function RightSide(props) {
    return (
        <div className="w-1/2 px-[100px] flex flex-col justify-between" style={{direction:'rtl' , fontFamily:'\'IBM Plex Sans Arabic\', sans-serif'}}>
            <div className="h-1/2 flex flex-col justify-around">
                <h6 className="font-bold pb-1.5" style={{fontSize:'20px'}}>الفوائد</h6>
                <h2 className="font-bold" style={{fontSize:'40px'}}>ما هي الفوائد التي تحصل عليها من التعلم معنا</h2>
                <p className="py-4">لدينا الخبرة الكافية لمنحكم دائما خدمات الدراسة التي لم تمر معكم في المدارس</p>
            </div>
            <div className="h-1/2 flex items-center">
                <Link className="bg-[#44627A] font-bold text-white h-[55px] w-[85px] flex items-center justify-center rounded-lg">
                    <i className="fa-solid fa-magnifying-glass fa-rotate-90 text-white px-1" ></i>
                    اكتشف
                </Link>
            </div>
        </div>
    );
}

export default RightSide;