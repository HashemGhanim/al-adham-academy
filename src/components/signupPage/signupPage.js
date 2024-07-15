import React, {memo} from 'react';
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";
import './signupPage.css';


function SignupPage(props) {

    return (
        <main className="w-full py-4 px-6 flex flex-col justify-center items-center mx-auto h-[110vh]">
            <div
                className="xl:p-0 lg:max-w-screen-lg lg:flex md:mt-0 shadow bg-white rounded-lg items-center justify-center w-full">
                <div className="lg:block w-8/12 hidden h-full">
                    <img src={require('./images/signup-main-2.png')} className="h-full w-full rounded-l-lg object-cover object-center"/>
                </div>
                <div className="lg:p-10 sm:p-8 p-6 w-full">
                    <h2 className="lg:text-3xl text-[#111827] font-bold text-2xl rtl">
                        انشاء حساب
                    </h2>
                    <form action={'#'} className="mt-8">
                        <div className="sm:flex flex-row-reverse sm:gap-2">
                            <div className="sm:w-1/2">
                                <label htmlFor={"first-name"}
                                       className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                    الاسم الاول
                                </label>
                                <input type={"text"} name={"first-name"} id="first-name" required
                                       placeholder="الاسم الاول"
                                       className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                            </div>
                            <div className="sm:w-1/2 sm:mt-0 mt-6">
                                <label htmlFor={"last-name"}
                                       className="text-[#111827] font-medium text-sm block mb-2 rtl ">
                                    الاسم الاخير
                                </label>
                                <input type={"text"} name={"last-name"} id="last-name" required
                                       placeholder="الاسم الاخير"
                                       className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor={"email"} className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                البريد الالكتروني
                            </label>
                            <input type={"email"} name={"email"} id="email" placeholder="name@company.com" required
                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                        </div>
                        <div className="mt-6">
                            <label htmlFor={"user_phone"} className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                رقم الهاتف
                            </label>
                            <input type={"number"} name={"user_phone"} id="user_phone" placeholder="رقم الهاتف" required
                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                        </div>
                        <div className="sm:flex flex-row-reverse sm:gap-2 mt-4">
                            <div className="sm:w-1/3">
                                <label htmlFor={"account-type"}
                                       className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                    نوع الحساب
                                </label>
                                <select id="account-type" name="account-type"
                                        className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block ">
                                    <option value="student">طالب</option>
                                    <option value="instructor">أستاذ</option>
                                </select>
                            </div>
                            <div className="sm:w-1/3 sm:mt-0 mt-6">
                                <label htmlFor={"password"}
                                       className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                    المحافظة
                                </label>
                                <select id="cars" name="cars"
                                        className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block ">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="sm:w-1/3 sm:mt-0 mt-6">
                            <label htmlFor={"password"}
                                       className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                    الفرع
                                </label>
                                <select id="cars" name="cars"
                                        className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block " disabled={true}>
                                    <option value="volvo">العلمي</option>
                                    <option value="saab">الأدبي</option>
                                    <option value="fiat">التجاري</option>
                                    <option value="audi">الصناعي</option>
                                    <option value="audi">الزراعي</option>
                                    <option value="audi">الفندقي</option>
                                    <option value="audi">الشرعي</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor={"password"} className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                كلمة المرور
                            </label>
                            <input type={"password"} name={"password"} id="password" placeholder="••••••••" required
                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                        </div>
                        <div className="mt-6">
                            <label htmlFor={"confirm-password"}
                                   className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                اعادة كلمة المرور
                            </label>
                            <input type={"password"} name={"confirm-password"} id="confirm-password"
                                   placeholder="••••••••" required
                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                        </div>
                        <div className="flex items-start mt-6 rtl">
                            <div className="text-sm ml-3">
                                <label htmlFor="gender-form" className="text-[#111827] font-medium">الجنس : </label>
                            </div>
                            <div className="items-center h-5 flex">
                                <input id="gender-male" value={"male"} aria-describedby="gender" name="gender"
                                       type="radio" className="text-[#f9fafb] border-[#d1d5db] rounded w-4 h-4 "
                                       required style={{color: colors.secondColor}}/>
                            </div>
                            <div className="text-sm mr-3">
                                <label htmlFor="remember" className="text-[#111827] font-medium">ذكر</label>
                            </div>
                            <div className="items-center h-5 flex mr-3">
                                <input id="gender-female" value={"female"} aria-describedby="gender" name="gender"
                                       type="radio" className="text-[#f9fafb] border-[#d1d5db] rounded w-4 h-4 "
                                       required style={{color: colors.secondColor}}/>
                            </div>
                            <div className="text-sm mr-3">
                                <label htmlFor="remember" className="text-[#111827] font-medium">انثى</label>
                            </div>
                        </div>
                        <button type={"submit"}
                                className="mt-6 sm:w-auto text-white font-medium text-base text-center py-3 px-5 rounded-lg ml-auto block bg-[#1E8A69] transition transition-all duration-300 hover:scale-95">
                            انشاء حساب
                        </button>
                        <div className="pt-6 text-[#6b7280] font-medium text-sm rtl">
                            هل لديك حساب ؟
                            <Link to={"/login"} className="text-[#0694a2]">
                                تسجيل الدخول هنا
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default memo(SignupPage);
