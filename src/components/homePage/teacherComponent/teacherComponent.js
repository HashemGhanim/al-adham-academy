import React from 'react';
import fonts from "../../../GlobalTools/fonts";
import colors from "../../../GlobalTools/colors";
import SHADOW from "../../../GlobalTools/shadows";
import './styles/teacherComponent.css';
import ExperienceBlock from "./components/experienceBlock";
import MoreDetailsBlockWithNumbers from "./components/moreDetailsBlockWithNumbers";



const infoOfOneBlock = [
    {
        numberOfCard:'200',
        labelOfCard:'عدد الطلاب الذي يتم تدريسهم دروس خاصة سنوياً'
    },
    {
        numberOfCard:'250',
        labelOfCard:'عدد مرات شرح مادة التوجيهي'
    },
    {
        numberOfCard:'10',
        labelOfCard:'سنوات الخبرة في مجال التدريس'
    }
];

const upperPartOfComponentTeacher = ()=>{
    return (
        <div>
            <h1 className={"text-2xl font-bold mt-[60px] box-border w-full text-center"} style={{fontFamily:fonts.LEMONADA}}>من نحن ؟</h1>
            <h2 className={"font-medium translate-y-1.5 box-border w-full text-center"} style={{color:colors.secondTextColor}}>هنا ستجد سيرتنا الذاتية</h2>
        </div>
    );
};
const teacherInfo = (comp1 , comp2) =>{
    return (
        <div className="w-[90%] h-[450px] box-border my-7 mx-auto flex justify-evenly items-center teacher-info-container">
            {comp2}
            {comp1}
        </div>
    );
};
const teacherCard = () => {
    return (
        <div className={"bg-white w-[30%] h-[94%] rounded-lg flex flex-col box-border teacher-card " + SHADOW}>
            <div className="w-[100%] h-[55%] rounded-lg mx-auto mt-2 px-2">
                <img src={require('./images/adhamKhalaliaPhoto.jpg')} className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="w-full h-full">
                <h1 className="font-semibold text-xl pt-4 pr-4" style={{fontFamily:fonts.IBM , direction:'rtl'}}>أ. أدهم خليلية</h1>
                <h2 className="font-medium text-lg pr-4" style={{direction:'rtl' , color:colors.thirdTextColor}}>أستاذ كيمياء</h2>
                <p className="px-4 pt-1.5" style={{direction:'rtl' , color:colors.grayText}}>
                    أستاذ حاصل على شهادة بكالوريس كيمياء تطبيقية من جامعة النجاح الوطنية
                </p>
                <div className="w-full relative flex justify-between" style={{direction:'rtl'}}>
                    <h2 className="font-semibold text-xl p-4 w-fit" style={{color:colors.thirdColorBold , direction:'rtl'}}>كيمياء ثانوية</h2>
                    <div className="w-fit pl-4 pt-2">
                        <a className="text-3xl cursor-pointer">
                            <i className="fa-brands fa-facebook" style={{color:'#2066df'}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
const experiencesOfTeacher = ()=>{
    return(
        <div className="w-1/2 h-[98%] box-border m-2 my-auto relative main-experience-component rounded-lg ">
            <h1 className={"text-2xl text-center pt-2 font-bold h-[10%] mb-1"} style={{fontFamily:fonts.NOTO}}>الخبرات</h1>
            <div className="h-[90%] flex flex-col justify-evenly items-end relative box-border -translate-x-3 inner-container-of-experinces">
                <ExperienceBlock jobIntervel={"أستاذ كيمياء"} jobPlace={"مدرسة دير الغصون، عتيل"} jobTime={"2014 - present"} jobAddress={"Tulkarm, Palestine"}/>
                <ExperienceBlock jobIntervel={"أستاذ كيمياء"} jobPlace={"مدرسة طولكرم، بلعا"} jobTime={"2011 - 2014"} jobAddress={"Tulkarm, Palestine"}/>
                <ExperienceBlock jobIntervel={"موظف"} jobPlace={"شركة دار الشفاء للادوية"} jobTime={"2010 - 2011"} jobAddress={"Ramallah, Palestine"}/>
            </div>
        </div>
    );
}
const moreAboutTeacher = ()=>{
    return(
        <div className={"w-1/2 h-[98%] box-border ml-2 my-auto relative more-about-teacher-main-component"}>
            <h1 className={"text-2xl text-center pt-2 font-bold h-[10%] mb-1"} style={{fontFamily:fonts.NOTO}}>المزيد</h1>
            {
                infoOfOneBlock.map((detail)=>{
                    return(
                        <MoreDetailsBlockWithNumbers numberOfCard={detail.numberOfCard} labelOfCard={detail.labelOfCard}/>
                    )
                })
            }
            <div className="absolute w-[1px] h-[80%] right-[10%] z-40 top-[10%] bg-[#E1E2E1] border-between-two" >

            </div>
        </div>
    );
}
const teacherCaredDetails = ()=> {
    return(
        <div className={"bg-white w-[64%] h-[94%] rounded-lg flex justify-center items-center box-border teacher-details-container "  + SHADOW} style={{direction:'rtl'}}>
            {experiencesOfTeacher()}
            {moreAboutTeacher()}
        </div>
    );
};



function TeacherComponent(props) {

    return (
        <div className="w-full box-border mt-12" id={"information"}>
            {upperPartOfComponentTeacher()}
            {teacherInfo(teacherCard() , teacherCaredDetails())}
        </div>
        // <div className="flex justify-center items-center w-full">
        //     <div
        //         className={SHADOW + " group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden"}>
        //         <div
        //             className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
        //             <img src={require('./images/adhamKhalaliaPhoto.jpg')} className="w-full h-full rounded-full"/>
        //         </div>
        //         <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
        //             <span className="text-2xl font-semibold">George Johnson</span>
        //             <p>Support Specialist</p>
        //         </div>
        //         <a className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
        //            href="#">Folow</a>
        //     </div>
        // </div>
    );
}

export default TeacherComponent;

