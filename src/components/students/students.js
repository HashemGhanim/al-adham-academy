import React from 'react';
import PathOfPage from "../common_components/page_path/pathOfPage";
import colors from "../../GlobalTools/colors";

function Students(props) {
    return (
        <>
        <div className="w-full min-h-[1000px] rtl box-border overflow-y-scroll relative bg-white">
            <div className="px-4 pt-6">
                <PathOfPage names={['الطلبة']} mainName={'جميع الطلبة'}/>
                <div className="sm:flex">
                    <div className="sm:flex sm:mb-0 items-center mb-3 hidden">
                        <form className="lg:pr-3" action="#" method="GET">
                            <div className="lg:w-64	mt-1 relative">
                                <input type="text" name="filter" className="sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border-[1px] rounded-lg w-full block mb-4" placeholder="ابحث عن الطالب .." />
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center mr-auto sm:mb-0 mb-3">
                        <button className="text-white font-medium text-sm text-center py-2 px-3 rounded-lg justify-center w-full items-center inline-flex" style={{backgroundColor:colors.secondColor}}>
                            <svg
                                className="w-6 h-6 -mr-1 ml-1"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            أضافة طالب
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className={"overflow-x-auto"}>
                    <div className="align-middle min-w-full inline-block">
                        <div className={"overflow-hidden shadow"}>
                            <table className="table-fixed min-w-full border-collapse">
                                <thead className={"bg-[#f3f4f6]"}>
                                    <tr>
                                        <th scope={"col"} className="text-[#6b7280] font-medium text-xs text-right p-4">
                                            الأسم
                                        </th>
                                        <th scope={"col"} className="text-[#6b7280] font-medium text-xs text-right p-4">
                                            رقم الهوية
                                        </th>
                                        <th scope={"col"} className="text-[#6b7280] font-medium text-xs text-right p-4">
                                            المدينة
                                        </th>
                                        <th scope={"col"} className="text-[#6b7280] font-medium text-xs text-right p-4">
                                            الجنس
                                        </th>
                                        <th scope={"col"} className="text-[#6b7280] font-medium text-xs text-right p-4">
                                            مشترك
                                        </th>
                                        <th scope={"col"} className="text-[#6b7280] font-medium text-xs text-right p-4">
                                            وسائل الاتصال
                                        </th>
                                        <th scope={"col"} className="p-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="border-[#e5e7eb] border-t bg-white">
                                    <tr className="border-t">
                                        <td className="p-4 whitespace-nowrap items-center flex ml-12">
                                            <img src={require('../../GlobalTools/avatarLogo/9439682.jpg')} className={"w-10 h-10 rounded-full"} alt={"HASHEM Logo"}/>
                                            <div className={"mr-6 text-[#6b7280] font-normal text-sm "}>
                                                <div className="text-[#111827] font-semibold text-base ">
                                                    هاشم زرعي
                                                </div>
                                                <div className={"text-[#6b7280] font-normal text-sm "}>
                                                    hashemzerei45@gmail.com
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            406722470
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            طولكرم
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            ذكر
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            اشتراك وحدة
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <linearGradient id="CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1" x1="9.993" x2="40.615" y1="-299.993" y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"></path><path d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z" opacity=".05"></path><path d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z" opacity=".05"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"></stop><stop offset="1" stop-color="#0a85d9"></stop></linearGradient><path fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"></path><path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"></path><path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                                            </svg>
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <button className="text-white font-medium text-sm text-center py-2 px-3 bg-[#0891b2] rounded-lg items-center inline-flex hover:bg-[#0582a1]">
                                                <svg className="w-5 h-5 ml-2"
                                                    fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                                    <path fill-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                تعديل الطالب
                                            </button>
                                            <button className="text-white font-medium text-sm text-center py-2 px-3 bg-[#e02424] rounded-lg items-center inline-flex hover:bg-[#d62929] mr-2">
                                                <svg className="w-5 h-5 ml-2"
                                                    fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                حذف الطالب
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="border-t">
                                        <td className="p-4 whitespace-nowrap items-center flex ml-12">
                                            <img src={require('../../GlobalTools/avatarLogo/9439682.jpg')} className={"w-10 h-10 rounded-full"} alt={"HASHEM Logo"}/>
                                            <div className={"mr-6 text-[#6b7280] font-normal text-sm "}>
                                                <div className="text-[#111827] font-semibold text-base ">
                                                    هاشم زرعي
                                                </div>
                                                <div className={"text-[#6b7280] font-normal text-sm "}>
                                                    hashemzerei45@gmail.com
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            406722470
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            طولكرم
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            ذكر
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            اشتراك وحدة
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <linearGradient id="CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1" x1="9.993" x2="40.615" y1="-299.993" y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"></path><path d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z" opacity=".05"></path><path d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z" opacity=".05"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"></stop><stop offset="1" stop-color="#0a85d9"></stop></linearGradient><path fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"></path><path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"></path><path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                                            </svg>
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <button className="text-white font-medium text-sm text-center py-2 px-3 bg-[#0891b2] rounded-lg items-center inline-flex hover:bg-[#0582a1]">
                                                <svg className="w-5 h-5 ml-2"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                                    <path fill-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                تعديل الطالب
                                            </button>
                                            <button className="text-white font-medium text-sm text-center py-2 px-3 bg-[#e02424] rounded-lg items-center inline-flex hover:bg-[#d62929] mr-2">
                                                <svg className="w-5 h-5 ml-2"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                حذف الطالب
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="border-t">
                                        <td className="p-4 whitespace-nowrap items-center flex ml-12">
                                            <img src={require('../../GlobalTools/avatarLogo/9439682.jpg')} className={"w-10 h-10 rounded-full"} alt={"HASHEM Logo"}/>
                                            <div className={"mr-6 text-[#6b7280] font-normal text-sm "}>
                                                <div className="text-[#111827] font-semibold text-base ">
                                                    هاشم زرعي
                                                </div>
                                                <div className={"text-[#6b7280] font-normal text-sm "}>
                                                    hashemzerei45@gmail.com
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            406722470
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            طولكرم
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            ذكر
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            اشتراك وحدة
                                        </td>
                                        <td className="text-[#111827] font-medium text-base p-4 whitespace-nowrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <linearGradient id="CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1" x1="9.993" x2="40.615" y1="-299.993" y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"></path><path d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z" opacity=".05"></path><path d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z" opacity=".05"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"></stop><stop offset="1" stop-color="#0a85d9"></stop></linearGradient><path fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"></path><path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"></path><path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="inline-block w-8 h-8 mx-1">
                                                <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                                            </svg>
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <button className="text-white font-medium text-sm text-center py-2 px-3 bg-[#0891b2] rounded-lg items-center inline-flex hover:bg-[#0582a1]">
                                                <svg className="w-5 h-5 ml-2"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                                    <path fill-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                تعديل الطالب
                                            </button>
                                            <button className="text-white font-medium text-sm text-center py-2 px-3 bg-[#e02424] rounded-lg items-center inline-flex hover:bg-[#d62929] mr-2">
                                                <svg className="w-5 h-5 ml-2"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                حذف الطالب
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className="sm:flex sm:justify-between p-4 bg-white border-t-[1px] border-[#e5e7eb] items-center w-full relative bottom-0 right-0 ">
        <div className="sm:mb-0 flex mb-4 items-center">
                <span className="font-normal text-sm text-[#6b7280]">
                    عرض
                    <span className="text-[#111827] font-semibold px-1 ">1-10</span>
                    من
                    <span className="text-[#111827] font-semibold px-1">245</span>
                </span>
        </div>
        <div className="flex items-center flex-row-reverse">
            <a href={"#"} className="font-medium text-sm py-2 px-3 rounded-lg justify-center items-center inline-flex flex-1 text-white" style={{backgroundColor:colors.secondColor}}>
                السابق
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-5 h-5 ml-1 -mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </a>
            <a href={"#"} className="mr-3 font-medium text-sm py-2 px-3 rounded-lg justify-center items-center inline-flex flex-1 text-white" style={{backgroundColor:colors.secondColor}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-5 h-5 mr-1 -ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
                التالي
            </a>
        </div>
    </div>
    </>
);
}

export default Students;