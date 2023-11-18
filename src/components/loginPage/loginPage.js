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
        <div className="w-full  h-[100vh] top-0 flex justify-center items-center absolute z-50" style={{backgroundColor:colors.mainColor}}>
            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg main-login-image-jpg"
                        ></div>
                        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center font-semibold">Sign in to your account</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={loginFormHandler} method='post'>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 text-sm email-login leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Your Email Address"
                                        value={email}
                                        onChange={handleChangeEmail}
                                    />
                                    {isEmailEmpty ? <p className="text-xs italic text-red-500">Please enter the email.</p> : <></>}
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                        Password
                                    </label>
                                    <input
                                        class="w-full password-login px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        value={password}
                                        onChange={handleChangePassword}
                                    />
                                    {isPasswordEmpty ? <p className="text-xs italic text-red-500">Please enter the password.</p> : <></>}
                                </div>
                                <div class="mb-4">
                                    <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                    <label class="text-sm" for="checkbox_id">
                                        Remember Me
                                    </label>
                                </div>
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full bg-[#0b5471] px-4 py-2 font-bold text-white rounded-full hover:bg-[#0c5e7e] focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                <div class="text-center">
                                    <Link to={"/signup"} className={"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"}>
                                        Create an Account!
                                    </Link>
                                </div>
                                <div class="text-center">
                                    <Link
                                        to={"/forgot-password"}
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    >
                                        Forgot Password?
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

export default memo(LoginPage);
