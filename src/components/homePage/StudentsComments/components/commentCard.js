import React from "react";
import colors from "../../../GlobalTools/colors";
import SHADOW from "../../../GlobalTools/shadows";
import shadows from "../../../GlobalTools/shadows";
import Shadows from "../../../GlobalTools/shadows";

const upperPartOfCard = ()=>{
    return(
        <div>

        </div>
    );
};

function CommentCard(props) {
    return(
      <div className={'w-[28%] h-[55%] ' + shadows} style={{backgroundColor:colors.whiteColor}}>
          <div className=" w-full h-[70%]">
              <p className="text-[19px] p-[32px]" style={{color:colors.grayText , lineHeight:'156.5%' , letterSpacing:'2%'}}>
                  “Teachings of the great explore of truth,
                  the master-builder of human happiness.
                  no one rejects,dislikes, or avoids pleasure
                  itself, pleasure itself”
              </p>
          </div>
          <div className="w-full h-[30%] flex justify-center items-center">
              <div className="w-[47px] h-[47px] rounded-full ml-[15px]">
                  <img src={'https://cdn-icons-png.flaticon.com/512/6833/6833605.png'} className={'object-cover'}/>
              </div>
              <div className="w-[70%] mx-[15px]">
                    <div className="font-medium text-black text-[17px]" style={{lineHeight:'156.5%' , letterSpacing:'2%'}}>
                        Salman Zerei
                    </div>
                    <div className="text-[13px]" style={{color:colors.grayText , letterSpacing:'2%' , lineHeight:'156.5%'}}>
                       Student
                    </div>
              </div>
          </div>
      </div>
    );
}

export default CommentCard;
