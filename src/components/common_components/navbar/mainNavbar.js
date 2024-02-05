import React, {useState, Fragment, useContext} from 'react';
import './mainNavbarLogo.png';
import './mainNavbar.css';
import {Menu , Transition} from "@headlessui/react";
import {Link} from "react-router-dom";
import colors from "../../../GlobalTools/colors";
import fonts from "../../../GlobalTools/fonts";
import classNames from "classnames";
import {userImageHandler} from "../../../GlobalTools/common";
import {IsAuthenticated} from "../../../ProtectedRoutes/ProtectedFile";
import {UserContext} from "../../../App";


const notificationButton = ()=>{
    return (
        <Menu as="div" className="relative inline-block text-left rtl">
            <div>
                <Menu.Button className="button group/ring w-[30px] h-[30px] relative flex items-center justify-center rounded-full cursor-pointer duration-300 border-none " style={{boxShadow:'2px 2px 10px rgba(0, 0, 0, 0.13)'}}>
                    <svg viewBox="0 0 448 512" className="bell w-[12px] group-hover/ring:bell-ring">
                        <path fill="black"
                              d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-[90] mt-2 w-[17rem] sm:w-[20rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex items-center px-4 py-3 border-b hover:bg-gray-100 ' : 'text-gray-700',
                                        'block px-4 py-2 text-sm flex items-center px-4 py-3 border-b hover:bg-gray-100'
                                    )}
                                >
                                    <img className="h-8 w-8 rounded-full object-cover mx-1"
                                         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                         alt="avatar"/>
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#"> سارة صلاح </span> ردت على <span
                                            className="font-bold text-blue-500" href="#">تحميل الصورة</span> مقالة.
                                            2m
                                        </p>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex items-center px-4 py-3 border-b hover:bg-gray-100' : 'text-gray-700',
                                        'block px-4 py-2 text-sm flex items-center px-4 py-3 border-b hover:bg-gray-100'
                                    )}
                                >
                                    <img className="h-8 w-8 rounded-full object-cover mx-1"
                                         src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                         alt="avatar"/>
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#">Slick Net</span> start following you .
                                            45m
                                        </p>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex items-center px-4 py-3 border-b hover:bg-gray-100' : 'text-gray-700',
                                        'block px-4 py-2 text-sm flex items-center px-4 py-3 border-b hover:bg-gray-100'
                                    )}
                                >
                                    <img className="h-8 w-8 rounded-full object-cover mx-1"
                                         src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                         alt="avatar"/>
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#">Jane Doe</span> Like Your reply
                                            on <span className="font-bold text-blue-500"
                                                     href="#">Test with TDD</span> artical . 1h
                                        </p>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex items-center px-4 py-3 border-b hover:bg-gray-100' : 'text-gray-700',
                                        'block px-4 py-2 text-sm flex items-center px-4 py-3 border-b hover:bg-gray-100'
                                    )}
                                >
                                    <img className="h-8 w-8 rounded-full object-cover mx-1"
                                         src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                                         alt="avatar"/>
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#">Abigail Bennett</span> start following
                                            you . 3h
                                        </p>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'text-gray-900 block  text-white text-center font-bold py-2' : 'text-gray-700',
                                        'block px-4 py-2 text-sm block  text-white text-center font-bold py-2'
                                    )}
                                    style={{backgroundColor:colors.secondColor}}
                                >
                                    اطلع على جميع الإشعارات
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
const loginButton = ()=>{
    return(
        <Link to={"/login"} id="login-button-navbar"  className="text-black bg-black mx-3 px-3 py-2.5 min-[1020px]:my-2.5 flex items-center justify-center font-normal rounded-lg transition-all duration-300 hover:translate-x-1">
                    <span>
                        تسجيل الدخول
                    </span>
            <i className="fa-solid fa-right-to-bracket px-1"></i>
        </Link>
    );
};
const mainLinks = ()=>{
    return (
        [
            <span style={{padding:'8px'}} className="font-medium inline-block  mx-3 relative cursor-pointer hover:-translate-y-0.5 transition-all transition duration-300 ease-in-out">
                    {/*<i className="fa-solid fa-house px-1" ></i>*/}
                    <svg className="w-[17px] h-[17px] mx-1 mb-1 text-gray-800 max-[1020px]:text-white  inline" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                    </svg>
                    <Link to={"/"}>
                        الرئيسية
                    </Link>
                </span>,
            <span style={{padding:'8px'}} className="font-medium inline-block  mx-3 relative cursor-pointer hover:-translate-y-0.5 transition-all transition duration-300 ease-in-out">
                        {/*<i className="fa-solid fa-circle-info px-1"></i>*/}
                        <svg className="w-[17px] h-[17px] mx-1 inline text-gray-800 max-[1020px]:text-white " aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    <a href={"/#information"}>
                        معلومات عنا
                    </a>
                </span>,
            <span style={{padding:'8px'}} className="font-medium inline-block mx-3 relative cursor-pointer hover:-translate-y-0.5 transition-all transition duration-300 ease-in-out">
                        {/*<i className="fa-solid fa-phone fa-rotate-270 px-1"></i>*/}
                <svg className="w-[17px] h-[17px] mx-1 mb-1 inline rotate-[250deg] max-[1020px]:text-white text-gray-800 " aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
  </svg>
                    <a href={"/#contact"}>
                        اتصل بنا
                    </a>
            </span>,
            <span style={{padding:'8px'}} className="font-medium inline-block max-[1020px]:text-white mr-3 ml-8 relative cursor-pointer hover:-translate-y-0.5 transition-all transition duration-300 ease-in-out">
                        {/*<i className="fa-solid fa-ranking-star px-1"></i>*/}
                <svg className="w-[17px] h-[17px] mx-1 inline text-gray-800 max-[1020px]:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
  </svg>
                    <a href={"/#comments"}>
                        تعليق الطلبة
                    </a>
                </span>
        ]
    );
}

function MainNavbar(props) {
    const [authenticated , setAuthenticated] = useState(true);
    const {user , setUser} = useContext(UserContext);
    return (
        <nav className="flex justify-between my-0 h-[70px] relative"  id="nav-bar-main" style={{background:colors.mainColor}}>
            <div className="flex flex-grow-0 order-2 items-center" id="nav-bar-main-logo">
                <div className="text-black my-auto font-bold text-lg max-[390px]:display-none" style={{fontFamily:fonts.IBM}}>
                    أكاديمية الأدهم
                </div>
                <img src={require('./mainNavbarLogo.png')} className="w-24 h-16" alt={"main Logo"}/>
                <div className="h-fit my-[15px] mx-2" id="responsive-lines">
                    <span className="icon w-[30px] h-[20px] flex flex-wrap justify-end">
                        <span className="w-full h-[2px] bg-black mb-[5px]"></span>
                        <span className="w-[65%] h-[2px] bg-black mb-[5px] transition-all duration-200"></span>
                        <span className="w-full h-[2px] bg-black"></span>
                    </span>
                    <ul className="m-0 p-0 list-none bg-[#4d2c5e] min-w-[150px] absolute right-[10px] z-50 top-[60px]" style={{direction:'rtl'}}>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[0]}</li>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[1]}</li>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[2]}</li>
                        <li className="p-[10px] hover:-translate-x-1 transition-all duration-300 cursor-pointer">{mainLinks()[3]}</li>
                    </ul>
                </div>
            </div>

            <div style={{color:colors.whiteColor}} className="my-auto flex justify-center">
                {IsAuthenticated() ?
                    <div className="flex justify-center items-center">
                        <div onClick={userImageHandler} className="w-11 h-11 rounded-full mx-3 ml-8 hover:scale-105 cursor-pointer transition transition-all duration-200">
                            <img src={user.role === 0 ? require('../../../GlobalTools/avatarLogo/9439775.jpg') : require('../../homePage/teacherComponent/images/adhamKhalaliaPhoto.jpg')} className="object-cover rounded-full"/>
                        </div>
                        {
                            notificationButton()
                        }
                    </div> : loginButton()
                }
                <div className="py-2.5 flex-row-reverse text-black" style={{direction:'rtl'}} id="nav-bar-main-items">
                    {
                        mainLinks()
                    }
                </div>

            </div>

        </nav>


    );
}

export default MainNavbar;