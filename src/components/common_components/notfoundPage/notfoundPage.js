import React, {memo} from 'react';
import colors from "../../../GlobalTools/colors";
import {Link} from "react-router-dom";

function NotfoundPage(props) {
    return (
        <div className="w-full  h-[100vh] top-0 flex justify-center items-center absolute z-50 bg-[#F5F5F5]">
        <div class="text-center">
            <h1 class="mb-4 text-6xl font-semibold text-[#4d2c5e]">404</h1>
            <p class="mb-4 text-lg text-[#4d2c5e] rtl">أُووبس! يبدو أنك ضائع.</p>
            <div class="animate-bounce">
                <svg class="mx-auto h-16 w-16 text-[#4d2c5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <p class="mt-4 text-gray-600 rtl">لنعيدك إلى<Link to={"/"} class="text-blue-500 rtl"> الرئيسية</Link>.</p>
        </div>
        </div>
    );
}

export default memo(NotfoundPage);