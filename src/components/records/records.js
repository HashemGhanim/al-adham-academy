import React, {useState} from 'react';
import PathOfPage from "../common_components/page_path/pathOfPage";
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";

function Courses(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [rows , setRows] = useState([
        {
            name:'التوزيع الالكتروني',
            courseName:'كيمياء',
            unit : 'الوحدة الاولى',
            date:'3/1/2024',
            time:'2:30 pm'
        },
        {
            name:'مقدمة في الكمياء',
            courseName:'كيمياء',
            unit : 'الوحدة الاولى',
            date:'3/1/2024',
            time:'2:30 pm'
        }
    ]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="rtl pt-6 box-border w-full min-h-[100vh] bg-[#fff]">
                <div className="px-4">
                    <PathOfPage names={['التسجيلات']} mainName={'التسجيلات'}/>
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
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">عنوان المحاضرة</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">المادة</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">الوحدة</th>
                                        <th scope="col" className="text-[#6b7280] uppercase font-bold text-xs text-right p-4 rtl">التاريخ</th>
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
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-medium text-base">
                                                    {row.unit}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-[#111827] font-normal text-base">
                                                    {row.date}
                                                </td>
                                                <td className="p-4 whitespace-nowrap">
                                                    <Link to={"/records/Nodejs_Intro"} state={{lessonName:row.name}}  className="text-white font-medium text-sm text-center py-2 px-4 rounded-lg inline-flex items-center transition transition-all duration-300 hover:scale-105 " style={{backgroundColor:colors.secondColor}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                             stroke-width="1.5" stroke="currentColor" className="w-5 h-5 pl-1">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/>
                                                        </svg>
                                                        شاهد
                                                    </Link>
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

export default Courses;