import React from 'react';
import './styles/leftSide.css';
import HomepageBenefitCard from "./homepageBenefitCard";

function LeftSide(props) {

    return (
        <div className="left-side-com-homPageBenefit">
            <HomepageBenefitCard myIcon={"fa-solid fa-video text-2xl"} benefitName={'حصص مباشرة'} explainName={'ستكون الحصص لكل بطاقة مباشرة مع الأستاذ باعلى التقنيات'}/>
            <HomepageBenefitCard myIcon={"fa-solid fa-film text-2xl"} benefitName={'حصص مسجلة'} explainName={'سيتم عرض تسجيلات للحصص المباشرة ليمكنك مشاهدته لاحقا'}/>
            <HomepageBenefitCard myIcon={"fa-solid fa-chalkboard-user text-2xl"} benefitName={'افضل الشروحات'} explainName={'سوف ندعم نموك بأفضل الشروحات'}/>
            <HomepageBenefitCard myIcon={"fa-solid fa-clapperboard text-2xl"} benefitName={'الجودة العالية'} explainName={'نحن نقدم مقاطع فيديو عالية الجودة لتستمتع بها أثناء التعلم'}/>
        </div>
    );
}

export default LeftSide;