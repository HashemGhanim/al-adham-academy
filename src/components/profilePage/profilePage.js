import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import colors from "../../GlobalTools/colors";
import PathOfPage from "../common_components/page_path/pathOfPage";
import {UserContext} from "../../App";

import {Chart as ChartJS} from "chart.js/auto";
import {Line, Bar , Doughnut} from "react-chartjs-2";
import getMonthLabels from "../../GlobalTools/Utils";
import CardOfCourse from "./components/cardOfCourse";
import DialogOfCard from "./components/dialogOfCard";

const StudentProfile= ()=>{
    return (
        <div className="w-full h-fit rtl box-border overflow-y-scroll px-4 pt-6">
            <PathOfPage names={['الصفحة الشخصية']} mainName={'الصفحة الشخصية'}/>
            <div className="grid grid-cols-3 gap-4 p-3">
                <div className="xl:col-auto rounded-lg col-span-full">
                    <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4 mb-4">
                        <div className="xl:block block sm:flex">
                            <img src={require('../../GlobalTools/avatarLogo/9439775.jpg')} className="h-20 w-20 mb-2 rounded-lg"/>
                            <div className="sm:mr-4 mr-0 xl:mr-0">
                                <h2 className="font-bold text-xl m-0 ">
                                    هاشم زرعي
                                </h2>
                                <ul className="list-none m-0 p-0 mt-2 profile-font-color">
                                    <li className="font-normal text-sm flex items-center">
                                        <svg
                                            className="ml-2 w-4 h-4 text-black"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                  clip-rule="evenodd"></path>
                                            <path
                                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                        </svg>
                                        طالب توجيهي
                                    </li>
                                    <li className="font-normal text-sm flex items-center mt-1">
                                        <svg
                                            className="ml-2 w-4 h-4 text-black"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        طولكرم - فلسطين
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-4">
                            <address className="not-italic font-normal text-sm ">
                                <div className="mt-4 profile-font-color">
                                    الجنس
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    ذكر
                                </i>
                                <div className="mt-4 profile-font-color">
                                    رقم الهوية
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    406722470
                                </i>
                                <div className="mt-4 profile-font-color">
                                    البريد الالكتروني
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    hashemzerei45@gmail.com
                                </i>
                                <div className="mt-4 profile-font-color">
                                    رقم الهاتف
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    0569922586
                                </i>
                            </address>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg col-span-full h-[345px] sm:col-span-1 shadow xl:p-8 sm:p-6 p-4">
                        <h3 className="font-bold text-xl ">
                            تقييم
                        </h3>
                        <div className="">
                            <div className="flex justify-between mb-2 mt-4">
                                <span className="text-base font-medium text-blue-700">الأمتحان الأخير</span>
                                <span className="text-sm font-medium text-blue-700 ">9/10</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'90%'}}></div>
                            </div>
                            <div className="flex justify-between mb-2 mt-8">
                                <span className="text-base font-medium text-blue-700 ">معدل الأمتحانات</span>
                                <span className="text-sm font-medium text-blue-700 ">8.2/10</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'82%'}}></div>
                            </div>
                            <div className="flex justify-between mb-2 mt-8">
                                <span className="text-base font-medium text-blue-700 ">المشاركة</span>
                                <span className="text-sm font-medium text-blue-700 ">9.3/10</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'93%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-full rounded-lg grid grid-cols-2 gap-4 box-border">
                    <div className="bg-white rounded-lg col-span-full max-h-[425.81px] sm:col-span-1 shadow xl:p-8 sm:p-6 p-4 relative">
                        <h3 className="font-bold text-xl ">
                            محفظتي
                        </h3>
                        <div className="w-full h-[248px] box-border  flex justify-center items-center mt-4">
                            <div className="w-[100%] h-[100%] bg-gradient-to-tr to-[#B469FF] from-[#8555C1] max-w-[410px] h-[230px] rounded-xl relative">
                                <h3 className="text-[#FFEF60] ltr poppins-font font-bold min-[390px]:font-semibold tracking-[5px] absolute bottom-5 left-5 max-[390px]:text-[9px] max-[390px]:left-3 max-[390px]:bottom-7">
                                    444 221 224 ***
                                </h3>
                                <img src={require('./images/logo.png')} className="absolute bottom-5 right-5"/>
                                <h1 className="ltr poppins-font absolute top-10 left-5" style={{color:'rgba(255, 255, 255, 0.6)'}}>
                                    Main Wallet
                                </h1>
                                <h1 className="absolute top-20 left-5 ltr text-4xl font-semibold poppins-font text-white max-[390px]:text-3xl">
                                    ₪ 150.00
                                </h1>
                                <div className="absolute top-0 -left-6">
                                    <img src={require('./images/waveElements.png')} className="w-[600px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg col-span-full max-h-[425.81px] overflow-hidden sm:col-span-1 shadow xl:p-8 sm:p-6 p-4">
                        <h3 className="font-bold text-xl">
                            نشاط المحفظة
                        </h3>
                        <div className="h-full w-full relative overflow-y-scroll no-scrollbar">
                            <div className="border-b pb-3 w-full h-fit relative bg-white box-border mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none" className="inline-block my-1 mr-1">
                                    <rect x="2.00027" y="1.99998" width="59" height="59" rx="12" stroke="#EBEBEB" stroke-width="4"/>
                                    <path d="M37.2694 38.9907L37.2694 38.9907L32.3964 43.8874C32.3937 43.8901 32.3912 43.8927 32.3888 43.8949M37.2694 38.9907L32.0391 43.5375L32.3921 43.8917C32.3828 43.9009 32.3751 43.9078 32.3719 43.9107L32.3708 43.9117C32.3732 43.9095 32.3799 43.9036 32.388 43.8957C32.3883 43.8954 32.3885 43.8952 32.3888 43.8949M37.2694 38.9907C37.8294 38.428 37.8273 37.5179 37.2646 36.9578C36.7018 36.3977 35.7917 36.3999 35.2316 36.9626L35.2316 36.9626L32.813 39.393M37.2694 38.9907L32.813 39.393M32.3888 43.8949C31.8295 44.4509 30.9229 44.4526 30.3618 43.8945C30.3606 43.8934 30.3593 43.8921 30.3581 43.8909L30.3566 43.8894L30.3445 43.8772L25.4816 38.9908L25.836 38.6381L25.4816 38.9908C24.9217 38.4282 24.9236 37.518 25.4865 36.9578C26.0492 36.3978 26.9594 36.3999 27.5194 36.9626L27.5194 36.9627L29.938 39.393L29.938 20.75C29.938 19.956 30.5816 19.3125 31.3755 19.3125C32.1694 19.3125 32.813 19.956 32.813 20.75L32.813 39.393M32.3888 43.8949C32.3902 43.8935 32.3917 43.8921 32.3931 43.8907L32.813 39.393M30.358 43.8908C30.3576 43.8903 30.3571 43.8898 30.3566 43.8894L30.358 43.8908Z" fill="#61C277" stroke="#61C277"/>
                                </svg>
                                <h2 className="inline-block font-bold mr-8">
                                    سحب
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    06:24:45 AM
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    -₪500
                                </h2>
                                <h2 className="inline-block mr-8 ltr text-[#2BC155] poppins-font font-medium">
                                    عملية مكتملة
                                </h2>
                            </div>
                            <div className="border-b pb-3 w-full h-fit relative bg-white box-border mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none" className="inline-block my-1 mr-1">
                                    <rect x="2.00027" y="2" width="59" height="59" rx="12" stroke="#EBEBEB" stroke-width="4"/>
                                    <path d="M25.4816 24.6342L25.4816 24.6342L30.3547 19.7376C30.3573 19.7348 30.3599 19.7323 30.3622 19.73M25.4816 24.6342L30.7119 20.0875L30.3589 19.7333C30.3682 19.7241 30.3759 19.7172 30.3791 19.7143L30.3802 19.7133C30.3778 19.7155 30.3711 19.7214 30.363 19.7293C30.3627 19.7295 30.3625 19.7298 30.3622 19.73M25.4816 24.6342C24.9216 25.1969 24.9237 26.1071 25.4865 26.6672C26.0492 27.2272 26.9593 27.2251 27.5194 26.6624L27.5194 26.6623L29.938 24.232M25.4816 24.6342L29.938 24.232M30.3622 19.73C30.9215 19.1741 31.8281 19.1724 32.3892 19.7304C32.3904 19.7316 32.3917 19.7328 32.393 19.7341L32.3944 19.7356L32.4065 19.7477L37.2694 24.6342L36.915 24.9869L37.2694 24.6342C37.8293 25.1968 37.8274 26.107 37.2645 26.6672C36.7018 27.2272 35.7917 27.225 35.2316 26.6623L35.2316 26.6623L32.813 24.232L32.813 42.875C32.813 43.6689 32.1694 44.3125 31.3755 44.3125C30.5816 44.3125 29.938 43.6689 29.938 42.875L29.938 24.232M30.3622 19.73C30.3608 19.7315 30.3594 19.7329 30.358 19.7343L29.938 24.232M32.393 19.7342C32.3935 19.7347 32.3939 19.7351 32.3944 19.7356L32.393 19.7342Z" fill="#363062" stroke="#363062"/>
                                </svg>
                                <h2 className="inline-block font-bold mr-8">
                                    اضافة
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    06:24:45 AM
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    +₪750
                                </h2>
                                <h2 className="inline-block mr-8 ltr text-[#2BC155] poppins-font font-medium">
                                    عملية مكتملة
                                </h2>
                            </div>
                            <div className="border-b pb-3 w-full h-fit relative bg-white box-border mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none" className="inline-block my-1 mr-1">
                                    <rect x="2.00027" y="1.99998" width="59" height="59" rx="12" stroke="#EBEBEB" stroke-width="4"/>
                                    <path d="M37.2694 38.9907L37.2694 38.9907L32.3964 43.8874C32.3937 43.8901 32.3912 43.8927 32.3888 43.8949M37.2694 38.9907L32.0391 43.5375L32.3921 43.8917C32.3828 43.9009 32.3751 43.9078 32.3719 43.9107L32.3708 43.9117C32.3732 43.9095 32.3799 43.9036 32.388 43.8957C32.3883 43.8954 32.3885 43.8952 32.3888 43.8949M37.2694 38.9907C37.8294 38.428 37.8273 37.5179 37.2646 36.9578C36.7018 36.3977 35.7917 36.3999 35.2316 36.9626L35.2316 36.9626L32.813 39.393M37.2694 38.9907L32.813 39.393M32.3888 43.8949C31.8295 44.4509 30.9229 44.4526 30.3618 43.8945C30.3606 43.8934 30.3593 43.8921 30.3581 43.8909L30.3566 43.8894L30.3445 43.8772L25.4816 38.9908L25.836 38.6381L25.4816 38.9908C24.9217 38.4282 24.9236 37.518 25.4865 36.9578C26.0492 36.3978 26.9594 36.3999 27.5194 36.9626L27.5194 36.9627L29.938 39.393L29.938 20.75C29.938 19.956 30.5816 19.3125 31.3755 19.3125C32.1694 19.3125 32.813 19.956 32.813 20.75L32.813 39.393M32.3888 43.8949C32.3902 43.8935 32.3917 43.8921 32.3931 43.8907L32.813 39.393M30.358 43.8908C30.3576 43.8903 30.3571 43.8898 30.3566 43.8894L30.358 43.8908Z" fill="#61C277" stroke="#61C277"/>
                                </svg>
                                <h2 className="inline-block font-bold mr-8">
                                    سحب
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    06:24:45 AM
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    -₪500
                                </h2>
                                <h2 className="inline-block mr-8 ltr text-[#2BC155] poppins-font font-medium">
                                    عملية مكتملة
                                </h2>
                            </div>
                            <div className="border-b pb-3 w-full h-fit relative bg-white box-border mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none" className="inline-block my-1 mr-1">
                                    <rect x="2.00027" y="1.99998" width="59" height="59" rx="12" stroke="#EBEBEB" stroke-width="4"/>
                                    <path d="M37.2694 38.9907L37.2694 38.9907L32.3964 43.8874C32.3937 43.8901 32.3912 43.8927 32.3888 43.8949M37.2694 38.9907L32.0391 43.5375L32.3921 43.8917C32.3828 43.9009 32.3751 43.9078 32.3719 43.9107L32.3708 43.9117C32.3732 43.9095 32.3799 43.9036 32.388 43.8957C32.3883 43.8954 32.3885 43.8952 32.3888 43.8949M37.2694 38.9907C37.8294 38.428 37.8273 37.5179 37.2646 36.9578C36.7018 36.3977 35.7917 36.3999 35.2316 36.9626L35.2316 36.9626L32.813 39.393M37.2694 38.9907L32.813 39.393M32.3888 43.8949C31.8295 44.4509 30.9229 44.4526 30.3618 43.8945C30.3606 43.8934 30.3593 43.8921 30.3581 43.8909L30.3566 43.8894L30.3445 43.8772L25.4816 38.9908L25.836 38.6381L25.4816 38.9908C24.9217 38.4282 24.9236 37.518 25.4865 36.9578C26.0492 36.3978 26.9594 36.3999 27.5194 36.9626L27.5194 36.9627L29.938 39.393L29.938 20.75C29.938 19.956 30.5816 19.3125 31.3755 19.3125C32.1694 19.3125 32.813 19.956 32.813 20.75L32.813 39.393M32.3888 43.8949C32.3902 43.8935 32.3917 43.8921 32.3931 43.8907L32.813 39.393M30.358 43.8908C30.3576 43.8903 30.3571 43.8898 30.3566 43.8894L30.358 43.8908Z" fill="#61C277" stroke="#61C277"/>
                                </svg>
                                <h2 className="inline-block font-bold mr-8">
                                    سحب
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    06:24:45 AM
                                </h2>
                                <h2 className="inline-block text-sm mr-8 ltr">
                                    -₪500
                                </h2>
                                <h2 className="inline-block mr-8 ltr text-[#2BC155] poppins-font font-medium">
                                    عملية مكتملة
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg col-span-full shadow xl:p-8 sm:p-6 p-4 h-[45vh]">
                        <h3 className="font-bold text-xl ">
                            البطاقات الخاصة
                        </h3>
                        <div className="w-full h-full  flex justify-center items-center">
                            <div className="text-2xl text-gray-300">
                                لا يوجد
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const InstructorProfile = ()=>{
    const [show , setShow] = useState(false);

    return(
        <div className="w-full h-fit rtl box-border overflow-y-scroll px-4 pt-6">
            <PathOfPage names={['الصفحة الشخصية']} mainName={'الصفحة الشخصية'}/>
            <div className="grid grid-cols-3 gap-4 p-3">
                <div className="xl:col-auto rounded-lg col-span-full">
                    <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4 mb-4">
                        <div className="xl:block block sm:flex">
                            <img src={require('../homePage/teacherComponent/images/adhamKhalaliaPhoto.jpg')} className="h-20 w-20 mb-2 rounded-lg"/>
                            <div className="sm:mr-4 mr-0 xl:mr-0">
                                <h2 className="font-bold text-xl m-0 ">
                                    أدهم خليلية
                                </h2>
                                <ul className="list-none m-0 p-0 mt-2 profile-font-color">
                                    <li className="font-normal text-sm flex items-center">
                                        <svg
                                            className="ml-2 w-4 h-4 text-black"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                  clip-rule="evenodd"></path>
                                            <path
                                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                        </svg>
                                        أستاذ كيمياء
                                    </li>
                                    <li className="font-normal text-sm flex items-center mt-1">
                                        <svg
                                            className="ml-2 w-4 h-4 text-black"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        طولكرم - فلسطين
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-4">
                            <address className="not-italic font-normal text-sm ">
                                <div className="mt-4 profile-font-color">
                                    الجنس
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    ذكر
                                </i>
                                <div className="mt-4 profile-font-color">
                                    رقم الهوية
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    406722470
                                </i>
                                <div className="mt-4 profile-font-color">
                                    البريد الالكتروني
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    example@gmail.com
                                </i>
                                <div className="mt-4 profile-font-color">
                                    رقم الهاتف
                                </div>
                                <i className="font-medium text-sm text-black not-italic">
                                    0599547282
                                </i>
                            </address>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg col-span-full h-[345px] sm:col-span-1 shadow xl:p-8 sm:p-6 p-4">
                        <h3 className="font-bold text-xl ">
                            عدد الطلبة
                        </h3>
                            <Bar className={"mx-auto my-auto"} data={{
                                 labels:getMonthLabels(12),
                                datasets : [
                                    {
                                        label:'عدد الطلبة',
                                        data:[130, 145 , 483, 130, 145 , 390, 130, 145 , 100, 430, 245 , 400],
                                        backgroundColor:colors.secondColor
                                    }
                                ]
                                }}/>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-full rounded-lg grid grid-cols-2 gap-4 box-border">
                    <div className="bg-white rounded-lg col-span-full h-[425.81px] shadow xl:p-8 sm:p-6 p-4 relative">
                        <h3 className="font-bold text-xl ">
                            الإيرادات
                        </h3>
                        <Bar className="mx-auto" data={{
                            labels:getMonthLabels(12),
                            datasets : [
                                {
                                    label:'الأرباح الشهرية',
                                    data:[130, 145 , 483, 130, 145 , 390, 130, 145 , 100, 430, 245 , 400],
                                    backgroundColor:colors.secondColor
                                },
                                {
                                    label:'أرباح المطورين',
                                    data:[130/4, 145/4 , 483/4, 130/4, 145/4 , 390/4, 130/4, 145/4 , 100/4, 430/4, 245/4 , 400/4],
                                    backgroundColor:colors.secondTextColor
                                }
                            ]
                        }}/>
                    </div>
                    <div className="bg-white rounded-lg col-span-full shadow xl:p-8 sm:p-6 p-4 h-[425.81px]">
                        <h3 className="font-bold text-xl inline-block">
                                بطاقات الدورات
                        </h3>
                        <div className="w-full h-[80%] flex flex-row overflow-x-scroll items-center">
                            <CardOfCourse nameOfCard={"اشتراك فصل"} priceOfCard={"400"} intervalOfCard={"نصف سنة"} numberOfLessonsOfCard={100}/>
                            <CardOfCourse nameOfCard={"اشتراك وحدة"} priceOfCard={"150"} intervalOfCard={"شهر"} numberOfLessonsOfCard={20}/>
                            <CardOfCourse nameOfCard={"اشتراك سنة"} priceOfCard={"700"} intervalOfCard={"سنة كاملة"} numberOfLessonsOfCard={200}/>
                            <CardOfCourse nameOfCard={"اشتراك حصة خاصة"} priceOfCard={"100"} intervalOfCard={"ساعة ونصف"} numberOfLessonsOfCard={1}/>
                        </div>
                        <DialogOfCard show={show} setShow={setShow}/>
                        <button className="inline-block rounded-lg text-white p-2" style={{backgroundColor : colors.secondColor}} onClick={()=> setShow(true)}>
                            اضافة بطاقة
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProfilePage(props) {
    const {user, setUser} = useContext(UserContext);
    return (
        user.login && user.role === 1 ? <InstructorProfile/> : <StudentProfile/>
    );
}

export default ProfilePage;