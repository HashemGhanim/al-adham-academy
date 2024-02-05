import React, {useEffect, useState} from 'react';
import PathOfPage from "../common_components/page_path/pathOfPage";
import {Link, useNavigate} from "react-router-dom";
import colors from "../../GlobalTools/colors";


const getEndDateFormatted = (date)=>{
    const year = Number(date.substring(0,4));
    const month = Number(date.substring(5 , 6));
    const day = Number(date.substring(7));

    return new Date(year, month - 1, day, 0, 0, 0);
}

const getDateFormatted = (duration)=>{
    const hours = Number(duration.substring(0,2));
    const minutes = Number(duration.substring(3,5));
    const seconds = Number(duration.substring(6));

    return new Date(2021 , 2 , 15, hours, minutes, seconds);
}

function Exams(props) {
    const navigation = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const [rows , setRows] = useState([
        {
            id:'414239',
            name:'الامتحان الاول',
            courseName:'كيمياء',
            unit : 'الوحدة الاولى',
            start_date:'2024-1-3',
            end_date:'2024-2-6',
            duration:'00:20:00',
            examAttempt:'1',
            isDisabled : false,
            grade:'-'
        },
        {
            id:'231785',
            name:'الامتحان الثاني',
            courseName:'كيمياء',
            unit : 'الوحدة الاولى',
            start_date:'2024-1-3',
            end_date:'2024-1-8',
            duration:'01:20:00',
            examAttempt:'0',
            isDisabled : true,
            grade:'9/10'
        }
    ]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const userAbleToAttempt = (endDate, duration)=>{
        const dateTimeNow = new Date();
        const dateEndExam = getEndDateFormatted(endDate);
        const dateTime1 = getDateFormatted(duration);

        dateTimeNow.setHours(dateTimeNow.getHours() + dateTime1.getHours() , dateTimeNow.getMinutes() + dateTime1.getMinutes(), dateTimeNow.getSeconds() + dateTime1.getSeconds());


        if(dateEndExam.getTime() < dateTimeNow.getTime()) {
            return true;
        }
        return false;
    }

    return (
        <>
            <div className="rtl pt-6 box-border w-full min-h-[100vh] bg-[#fff]">
                <div className="px-4">
                    <PathOfPage names={['الأختبارات']} mainName={'الأختبارات'}/>
                    <div className="sm:flex sm:mb-0 items-center mb-3 hidden">
                        <form className="lg:pr-3" action="#" method="GET">
                            <div className="lg:w-64	mt-1 relative">
                                <input type="text" name="filter" className="sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border-[1px] rounded-lg w-full block mb-4" placeholder="ابحث عن التسجيل .." onChange={handleSearchChange}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col rtl">
                    <div className="overflow-x-auto rtl">
                        <div className="align-middle min-w-full inline-block rtl">
                            <div className="overflow-hidden shadow rtl">
                                <table className="table-fixed min-w-full border-collapse border-inherit indent-0 rtl">
                                    <thead className="bg-[#f3f4f6] rtl">
                                    <tr className="border-b-[1px] border-[#e5e7eb]">
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">عنوان الامتحان</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">المادة</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">تاريخ البدء</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">تاريخ الانتهاء</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">مدة الامتحان</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs p-4 rtl text-center"> عدد المحاولات المتبقية</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs p-4 rtl text-center">العلامة</th>
                                        <th scope="col" className="p-4"></th>
                                    </tr>
                                    </thead>
                                    <tbody className="border-b-0">
                                    {
                                        rows.filter((row)=>{
                                            return row.name.includes(searchTerm);
                                        }).map((row)=>(
                                            <tr className="border-t-[1px] border-[#e5e7eb] bg-white hover:bg-[#f3f4f6]">
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-medium text-base">
                                                    {row.name}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-medium text-base">
                                                    {row.courseName}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-normal text-base">
                                                    {row.start_date}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-normal text-base">
                                                    {row.end_date}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-medium text-base">
                                                    {row.duration}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-medium text-base text-center">
                                                    {row.examAttempt}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-medium text-base text-center">
                                                    {row.grade}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-center" >
                                                    {
                                                        userAbleToAttempt(row.end_date, row.duration) ? <button disabled className="text-white font-medium disabled text-sm text-center py-2 px-4 rounded-lg inline-flex items-center opacity-80" style={{backgroundColor:colors.secondColor}}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                     viewBox="0 0 24 24" stroke-width="1.5"
                                                                     stroke="currentColor" className="w-5 h-5 pl-1">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                                                                </svg>
                                                                حاول إجراء الامتحان
                                                            </button> :
                                                            <Link to={"/exams/" + row.id} state={{examName:row.name, exam_id:row.id}} className="text-white font-medium disabled text-sm text-center py-2 px-4 rounded-lg inline-flex items-center transition transition-all duration-300 hover:scale-95 " style={{backgroundColor:colors.secondColor}}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                     viewBox="0 0 24 24" stroke-width="1.5"
                                                                     stroke="currentColor" className="w-5 h-5 pl-1">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                                                                </svg>
                                                                حاول إجراء الامتحان
                                                            </Link>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:flex sm:justify-between p-4 bg-white border-t-[1px] border-[#e5e7eb] items-center w-full relative bottom-0 right-0 ">
                <div className="sm:mb-0 flex mb-4 items-center">
                <span className="font-normal text-sm text-[#6b7280]">
                    عرض
                    <span className="text-[#111827] font-semibold px-1 ">1-10</span>
                    من
                    <span className="text-[#111827] font-semibold px-1">245</span>
                </span>
                </div>
                <div className="flex items-center flex-row-reverse">
                    <a href={"#"} className="font-medium text-sm py-2 px-3 rounded-lg justify-center items-center inline-flex flex-1 text-white" style={{backgroundColor:colors.secondColor}}>
                        السابق
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5 ml-1 -mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </a>
                    <a href={"#"} className="mr-3 font-medium text-sm py-2 px-3 rounded-lg justify-center items-center inline-flex flex-1 text-white" style={{backgroundColor:colors.secondColor}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5 mr-1 -ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                        </svg>
                        التالي
                    </a>
                </div>
            </div>
        </>

    );
}

export default Exams;