import React, {memo, useState} from 'react'
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";

import './loginPage.css'

function LoginPage(props) {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [isEmailEmpty , setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty , setIsPasswordEmpty] = useState(false);

    const loginFormHandler = (event)=>{
        event.preventDefault();
        if(password === ""){
            setIsPasswordEmpty(true);
            document.querySelector(".password-login").classList.add("mb-3");
            document.querySelector(".password-login").classList.add("border-red-500");
        }
        if(email === ""){
            setIsEmailEmpty(true);
            document.querySelector(".email-login").classList.add("mb-3");
            document.querySelector(".email-login").classList.add("border-red-500");
        }
    }

    const handleChangePassword = (event)=>{
        setPassword(event.target.value);
        setIsPasswordEmpty(false);
        document.querySelector(".password-login").classList.remove("mb-3");
        document.querySelector(".password-login").classList.remove("border-red-500");
    }

    const handleChangeEmail = (event)=>{
        setEmail(event.target.value);
        setIsEmailEmpty(false);
        document.querySelector(".email-login").classList.remove("mb-3");
        document.querySelector(".email-login").classList.remove("border-red-500");
    }

    return (
        <main className="w-full h-[100vh] pt-8 px-6 flex flex-col justify-center items-center mx-auto">
            <Link to={"/"} className="lg:mb-10 mb-8 font-semibold text-2xl flex justify-center items-center">
                <img src={require('./images/mainLogo.png')} className="h-22  max-w-full self-center justify-self-center"/>
            </Link>
            <div className="xl:p-0 lg:max-w-screen-lg lg:flex md:mt-0 shadow bg-white rounded-lg items-center justify-center w-full ">
                <div className="lg:flex w-8/12 hidden h-full">
                    <img src={require('./images/login-main-image.jpg')} className="rounded-l-lg object-cover"/>
                </div>
                <div className=" lg:p-16 sm:p-8 p-6 w-full">
                    <h2 className="lg:text-3xl text-[#111827] font-bold text-2xl rtl">
                        تسجيل الدخول
                    </h2>
                    <form action={'#'} className="mt-8">
                        <div>
                            <label for={"email"} className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                البريد الالكتروني
                            </label>
                            <input type={"email"} name={"email"} id="email" placeholder="name@company.com" required className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                        </div>
                        <div className="mt-6">
                            <label htmlFor={"password"} className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                كلمة المرور
                            </label>
                            <input type={"password"} name={"password"} id="password" placeholder="••••••••" required
                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                        </div>
                        <div className="flex items-start mt-6 rtl">
                            <div className="items-center h-5 flex">
                                <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="text-[#f9fafb] border-[#d1d5db] rounded w-4 h-4 " required style={{color:colors.secondColor}}/>
                            </div>
                            <div className="text-sm mr-3">
                                <label htmlFor="remember" className="text-[#111827] font-medium">تذكرنى</label>
                            </div>
                            <Link to={"/forgot-password"} className="text-[#0694a2] text-sm mr-auto ">
                                نسيت كلمة المرور ؟
                            </Link>
                        </div>
                        <button type={"submit"} className="mt-6 sm:w-auto text-white font-medium text-base text-center py-3 px-5 rounded-lg ml-auto block bg-[#075471] transition transition-all duration-300 hover:scale-95">
                            تسجيل دخول
                        </button>
                        <div className="pt-6 text-[#6b7280] font-medium text-sm rtl">
                            غير مسجل؟
                            <Link to={"/signup"} className="text-[#0694a2]">
                                إنشاء حساب
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default memo(LoginPage);
