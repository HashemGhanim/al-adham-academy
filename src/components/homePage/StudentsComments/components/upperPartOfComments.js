import React from 'react';
import fonts from "../../../../GlobalTools/fonts";
import colors from "../../../../GlobalTools/colors";

function UpperPartOfComments(props) {
    return (
        <>
            <div className="font-bold text-2xl text-center w-full pt-[45px]" style={{fontFamily:fonts.LEMONADA}}>
                ماذا يقول طلابنا ؟
            </div>
            <div className="font-medium translate-y-1.5 w-full text-center" style={{color:colors.secondTextColor}}>
                شاهد اراء طلابنا السابقين
            </div>
        </>
    );
}

export default UpperPartOfComments;