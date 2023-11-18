import React, {memo} from 'react';
import colors from "../../GlobalTools/colors";
import {Link} from "react-router-dom";
import './signupPage.css';


function SignupPage(props) {
    return (
        <div className="w-full  h-[100vh] top-0 flex justify-center items-center absolute z-50" style={{backgroundColor:colors.mainColor}}>
        <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg main-signup-image-jpg"
                    ></div>
                    <div class="w-10/12 max-[450px]:w-full mx-auto lg:w-1/2 lg:mx-0 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="post">
                            <div class="mb-4 mx-4 md:flex max-[450px]:mx-0 md:justify-between">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                        First Name
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div class="md:ml-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div class="mb-4 mx-4 max-[450px]:mx-0">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                    Email
                                </label>
                                <input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div class="mb-4 mx-4 md:flex md:justify-between max-[450px]:mx-0">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                        Password
                                    </label>
                                    <input
                                        required
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />

                                </div>
                                <div class="md:ml-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                        Confirm Password
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password"
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
                                    Register Account
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <Link
                                    to={"/forgot-password"}
                                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div class="text-center">
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
    );
}

export default memo(SignupPage);