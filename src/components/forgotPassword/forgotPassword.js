import React, {memo} from 'react';
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";
import './forgotPassword.css';

function ForgotPassword(props) {
    return (
        <div className="w-full h-[100vh] top-0 flex justify-center items-center absolute z-50" style={{backgroundColor:colors.mainColor}}>
            <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12 min-[1023px]:h-[600px]">
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg main-forgot-password-image-jpg"
                    ></div>
                    <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <div className="w-full h-fit min-[1023px]:my-[90px]">
                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl">نسيت كلمة السر ؟</h3>
                                <p className="mb-4 rtl text-sm text-gray-700">
                                    لقد حصلنا على ذلك، هذه أشياء تحدث. فقط أدخل عنوان بريدك الإلكتروني أدناه وسنرسل لك
                                    رابط لإعادة تعيين كلمة المرور الخاصة بك!
                                </p>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="post">
                                <div className="mb-4">
                                    <label className="block mb-2 rtl text-sm font-bold text-gray-700" htmlFor="email">
                                        البريد الإلكتروني
                                    </label>
                                    <input
                                        className="w-full rtl px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="ادخل البريد الإلكتروني..."
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-[#46a2c9] rounded-full hover:bg-[#3d93b7] focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        إعادة تعيين كلمة المرور
                                    </button>
                                </div>
                                <hr className="mb-6 border-t"/>
                                <div className="text-center">
                                    <Link
                                        to={"/signup"}
                                        className="inline-block rtl text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    >
                                        إنشاء حساب!
                                    </Link>
                                </div>
                                <div className="text-center">
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
        </div>
    );
}

export default memo(ForgotPassword);