import React from 'react';
import {Link} from "react-router-dom";

function PathOfPage(props) {
    return (
            <div className="mb-4 path">
                <span className="text-[#374151]">
                    <Link to={"/"}>
                    <i className="fa-solid fa-house px-3 hover:text-black" ></i>
                        الرئيسية
                    </Link>
                </span>
                {
                    props.names.map((name) => {
                        return(
                            <>
                            <span className="mx-1">
                                <svg className="w-6 h-6 rotate-180 inline" fill="gray"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd"></path>
                                </svg>
                            </span>
                                <span className="text-[#374151]">
                                {name}
                            </span>
                            </>
                        );
                    })
                }
            <div className="mt-5 p-3">
                <h1 className="font-semibold sm:text-2xl text-xl">{props.mainName}</h1>
            </div>
        </div>
    );
}

export default PathOfPage;