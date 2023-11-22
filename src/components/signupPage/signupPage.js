import React, {memo} from 'react';
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";
import './signupPage.css';


function SignupPage(props) {
    return (
        <div className="w-full  h-[100vh] top-0 flex justify-center items-center absolute  z-50" style={{backgroundColor:colors.mainColor}}>
        <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg main-signup-image-jpg"
                    ></div>
                    <div class="w-10/12  max-[450px]:w-full mx-auto lg:w-1/2 lg:mx-0 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="pt-4 text-2xl text-center">إنشاء حساب</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="post">
                            <div class="mb-4 mx-4 flex flex-wrap md:flex-nowrap max-[450px]:mx-0 md:justify-between">
                                <div class="md:mr-2 md:mb-0 order-2 md:order-1 md:w-auto w-full">
                                    <label class="block mb-2 rtl text-sm font-bold text-gray-700" for="firstName">
                                        الأسم الأخير
                                    </label>
                                    <input
                                        class="w-full px-3 rtl py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        type="text"
                                        placeholder="الأسم الأخير"
                                    />
                                </div>
                                <div class="md:ml-2 mb-4 order-1 w-full md:order-2 md:w-auto md:mb-0">
                                    <label class="block mb-2 rtl text-sm font-bold text-gray-700" for="lastName">
                                        الأسم الأول
                                    </label>
                                    <input
                                        class="w-full rtl px-3 py-2 rtl  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        type="text"
                                        placeholder="الأسم الأول"
                                    />
                                </div>
                            </div>
                            <div class="mb-4 mx-4 max-[450px]:mx-0">
                                <label class="block rtl mb-2 text-sm font-bold text-gray-700" for="email">
                                    البريد الألكتروني
                                </label>
                                <input
                                    class="w-full px-3 rtl py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="البريد الألكتروني"
                                />
                            </div>
                            <div class="mb-4 mx-4 flex flex-wrap md:flex-nowrap md:justify-between max-[450px]:mx-0">
                                <div class="md:mr-2 md:mb-0 md:order-1 order-2 w-full md:w-auto">
                                    <label class="block rtl mb-2 text-sm font-bold text-gray-700" for="password">
                                        تأكيد كلمة السر
                                    </label>
                                    <input
                                        required
                                        class="w-full rtl px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                    />

                                </div>
                                <div class="md:ml-2 md:w-auto w-full order-1 md:order-2 mb-4 md:mb-0">
                                    <label class="block mb-2 rtl text-sm font-bold text-gray-700" for="c_password">
                                        كلمة السر
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 rtl mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div>
                            </div>
                            <div class="mb-6 mx-4 text-center max-[450px]:mx-0">
                                <button
                                    class="w-full px-4 py-2 bg-[#0b5471] font-bold text-white rounded-full hover:bg-[#0c5e7e] focus:outline-none focus:shadow-outline"
                                    type="button"
                                    type="submit"
                                >
                                    تسجيل حساب
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <Link
                                    to={"/forgot-password"}
                                    class="inline-block text-sm rtl text-blue-500 align-baseline hover:text-blue-800"
                                >
                                    هل نسيت كلمة السر ؟
                                </Link>
                            </div>
                            <div class="text-center">
                                <Link to={"/login"} className="inline-block rtl text-sm text-blue-500 align-baseline hover:text-blue-800">
                                    هل لديك حساب؟ تسجيل الدخول
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default memo(SignupPage);

/*
                 <div className="mb-4 mx-4 max-[450px]:mx-0">
                                <label className="block rtl mb-2 text-sm font-bold text-gray-700" for="studentId">
                                    رقم الهوية
                                </label>
                                <input
                                    className="w-full px-3 rtl py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="studentId"
                                    type="text"
                                    placeholder="رقم الهوية"
                                />
                            </div>
                            <div className="mb-4 mx-4 md:flex max-[450px]:mx-0 md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label htmlFor="gender" className="block mb-2 rtl text-sm font-bold text-gray-700">
                                        الجنس
                                    </label>
                                    <select id="gender"
                                            className="pl-[4.952rem] pr-3 rtl leading-tight  border rounded shadow text-gray-700 text-sm  focus:outline-none focus:shadow-outline py-[10px] w-full py-2 ">
                                        <option selected >اختر الجنس</option>
                                        <option value="male">ذكر</option>
                                        <option value="female">أنثى</option>
                                    </select>
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 rtl text-sm font-bold text-gray-700"
                                           htmlFor="city">
                                        المدينة
                                    </label>
                                    <input
                                        className="w-full rtl px-3 py-2rtl  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="city"
                                        type="text"
                                        placeholder="المدينة"
                                    />
                                </div>
                            </div>
 */