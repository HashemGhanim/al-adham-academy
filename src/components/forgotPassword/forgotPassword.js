import React, {memo} from 'react';
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";

function ForgotPassword(props) {
    return (
        <div className="w-full h-[100vh] top-0 flex justify-center items-center absolute z-50" style={{backgroundColor:colors.mainColor}}>
            <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12 min-[1023px]:h-[600px]">
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        style={{backgroundImage:'url(\'https://img.freepik.com/free-psd/3d-background-male-scientist-poses-lab-coat_23-2150233900.jpg?w=1380&t=st=1700316373~exp=1700316973~hmac=49698b6fa6187d6f9e3d95d1c1d4864920d4c86f6da3917bd31bc45e3e4c048d\')' , backgroundPosition:'center'}}
                    ></div>
                    <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <div className="w-full h-fit min-[1023px]:my-[90px]">
                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                                <p className="mb-4 text-sm text-gray-700">
                                    We get it, stuff happens. Just enter your email address below and we'll send you a
                                    link to reset your password!
                                </p>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="post">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Enter Email Address..."
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-[#46a2c9] rounded-full hover:bg-[#3d93b7] focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Reset Password
                                    </button>
                                </div>
                                <hr className="mb-6 border-t"/>
                                <div className="text-center">
                                    <Link
                                        to={"/signup"}
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    >
                                        Create an Account!
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link to={"/login"} className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                        Already have an account? Login!
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