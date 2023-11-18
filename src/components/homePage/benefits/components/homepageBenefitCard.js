import React, {useEffect, useState} from 'react';
import colors from "../../../../GlobalTools/colors";

function HomepageBenefitCard(props) {
    const [myIcon , setMyIcon] = useState("");
    useEffect(()=>{
        setMyIcon(props.myIcon);
    },[])
    return (
        <div className="left-side-com-homPageBenefit-div">
            <div className=" w-full h-1/2 flex justify-start items-center flex-row-reverse pr-3">
                <div className="rounded-full w-[60px] h-[60px] flex justify-center items-center icon-benefit-card" style={{backgroundColor:colors.grayColor}}>
                    <i className={myIcon} style={{color:colors.secondColor}}></i>
                </div>
                <div className="w-3/4 h-full flex justify-end items-center pr-3 font-bold text-xl benefit-card-name">
                    {props.benefitName}
                </div>
            </div>
            <div className="w-full h-1/2 pr-3 benefit-card-explain" style={{direction:'rtl'}}>
                {props.explainName}
            </div>
        </div>
    );
}

export default HomepageBenefitCard;