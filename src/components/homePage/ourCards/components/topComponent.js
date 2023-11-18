import React from 'react';
import './styles/cardsComponent.css';
import colors from "../../../../GlobalTools/colors";
function TopComponent(props) {
    return (
        <div className="relative h-[100px] w-full flex justify-center items-center cards-component-home-page-top-component">
            <img src={require('../images/arrowEffectForSecondCompInHomePage.png')} className="h-20 absolute right-0 top-4 origin-bottom-left -rotate-12"/>
            <img src={require('../images/casual-life-3d-idea-lamp-effectForSecondCompInHomePage.png')} className="h-20 absolute left-0 top-4"/>
            <div>
                <h1 className="text-2xl font-bold text-center" style={{fontFamily:'\'Lemonada\', cursive'}}>
                    البطاقات
                </h1>
                <h2 className="font-medium translate-y-1.5" style={{color:colors.secondTextColor}}>
                    يمكنك الاشتراك بهذه البطاقات لتكن من عائلتنا
                </h2>
            </div>
        </div>
    );
}

export default TopComponent;