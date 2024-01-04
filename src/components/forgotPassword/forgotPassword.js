import React, {memo} from 'react';
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";
import './forgotPassword.css';

function ForgotPassword(props) {
    return (
        <main className="w-full h-[100vh] pt-8 px-6 flex flex-col justify-center items-center mx-auto">
            <Link to={"/"} className="lg:mb-10 mb-8 font-semibold text-2xl flex justify-center items-center">
                <img src={require('./images/mainLogo.png')}
                     className="h-22  max-w-full self-center justify-self-center" alt={"main logo"}/>
            </Link>
            <div
                className="xl:p-0 sm:max-w-screen-sm lg:flex md:mt-0 shadow bg-white rounded-lg items-center justify-center w-full ">
                <div className=" lg:p-16 sm:p-8 p-6 w-full">
                    <h2 className="lg:text-3xl text-[#111827] font-bold text-2xl rtl mb-3">
                        نسيت كلمة السر ؟
                    </h2>
                    <p className="font-normal text-base text-[#6b7280] rtl">
                        لا تقلق! فقط اكتب بريدك الإلكتروني وسنرسل لك رمزًا لإعادة تعيين كلمة المرور الخاصة بك!
                    </p>
                    <form action={'#'} className="mt-8">
                        <div>
                            <label htmlFor={"email"} className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                البريد الالكتروني
                            </label>
                            <input type={"email"} name={"email"} id="email" placeholder="name@company.com" required
                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                        </div>
                        <button type={"submit"}
                                className="mt-6 sm:w-auto text-white font-medium text-base text-center py-3 px-5 rounded-lg ml-auto block bg-[#47a3c8] transition transition-all duration-300 hover:scale-95">
                            إعادة تعيين كلمة المرور
                        </button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default ForgotPassword;