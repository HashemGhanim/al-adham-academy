import React from "react";
import colors from "../../../../GlobalTools/colors";
import shadows from "../../../../GlobalTools/shadows";
import '../styles/studentsCommentsHomePageCard.css';


function CommentCard(props) {
    return(
            <div className={'students-comments-home-page-card w-[28%] rounded-lg h-[246px] box-border snap-start shrink-0 scroll-mx-6 snap-normal ' + shadows} style={{backgroundColor:colors.whiteColor}}>
                <div className=" w-full h-[70%]">
                    <p className="text-[18px] p-[32px]" style={{color:colors.grayText , lineHeight:'156.5%' , letterSpacing:'2%' , direction:'rtl'}}>
                        {'“'}
                        {props.commentOfStudent}
                        {'”'}
                    </p>
                </div>
                <div className="w-full h-[30%] flex justify-center items-center pb-[16px] flex-row-reverse">
                    <div className="w-[47px] h-[47px] rounded-full mr-[15px]">
                        <img src={'https://cdn-icons-png.flaticon.com/512/6833/6833605.png'} className={'object-cover'}/>
                    </div>
                    <div className="w-[70%] mx-[15px]" style={{direction : 'rtl'}}>
                        <div className="font-medium text-black text-[17px]" style={{lineHeight:'156.5%' , letterSpacing:'2%'}}>
                            {props.nameOfStudent}
                        </div>
                        <div className="text-[13px]" style={{color:colors.grayText , letterSpacing:'2%' , lineHeight:'156.5%'}}>
                            طالب
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CommentCard;
