import React from 'react';
import './images/Group 380.png';
import './styles/emailUs.css';
import colors from "../../../GlobalTools/colors";
import fonts from "../../../GlobalTools/fonts";
import SHADOW from "../../../GlobalTools/shadows";

function EmailUs(props) {
    return (
        <div className="w-full h-fit my-24 ">
            <div>
                <h1 className={"text-2xl font-bold mt-[60px] box-border w-full text-center"} style={{fontFamily:fonts.LEMONADA}}>تواصل معنا</h1>
                <h2 className={"font-medium translate-y-1.5 box-border w-full text-center"} style={{color:colors.secondTextColor}}>يمكنك ارسال ايميل للتواصل مع افراد الاكاديمية </h2>
            </div>
            <div className={" w-[100%] py-7 email-us-home-page-container mx-auto mt-14  " + SHADOW}>
                <div className="flex items-center justify-center p-3">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form>
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#F5F5F5]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-base font-medium text-[#F5F5F5]"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="subject"
                                    className="mb-3 block text-base font-medium text-[#F5F5F5]"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="message"
                                    className="mb-3 block text-base font-medium text-[#F5F5F5]"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    className="hover:shadow-form rounded-md py-3 px-8 text-base font-semibold text-white outline-none"
                                    style={{backgroundColor: colors.thirdColorBold}}
                                >
                                    Send message
                                    <i className="fa-solid fa-paper-plane translate-x-1.5 rotate-[20deg]"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailUs;

/*

 */