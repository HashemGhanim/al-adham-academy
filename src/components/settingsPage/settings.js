import React from 'react';
import {Link} from "react-router-dom";
import colors from "../../GlobalTools/colors";


function Settings(props) {
    const styleInput = {color:'rgba(17,24,39,1)' , borderColor:'rgba(209,213,219,1)' , backgroundColor:'rgba(249,250,251,1)'};
    const classNameForInput = () => {return "text-sm shadow-sm	border rounded-lg w-full block"};
    const classNameForLabel = () => {return "font-medium text-sm block mb-2"};

    return (
        <div className="w-full h-fit rtl box-border overflow-y-scroll px-4 pt-6">
            <div className="mb-4 path">
                <span>
                    <i className="fa-solid fa-house px-3" ></i>
                    <Link to={"/"}>
                        الرئيسية
                    </Link>
                </span>
                <span className="mx-1">
                    <svg className="w-6 h-6 rotate-180 inline" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"></path>
                </svg>
                </span>
                <span>
                    الأعدادات
                </span>
                <div className="mt-5 p-3">
                    <h1 className="font-semibold sm:text-2xl text-xl">اعدادات المستخدم</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-3">
                <div className="xl:col-auto rounded-lg col-span-full">
                    <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4 mb-4">
                        <div className="xl:block block sm:flex">
                            <img src={require('../../GlobalTools/avatarLogo/9439775.jpg')} className="h-28 w-28 mb-2 rounded-lg"/>
                            <div className="sm:mr-4 mr-0 xl:mr-0">
                                <h2 className="font-bold text-2xl mb-1 text-[#111827]">
                                    هاشم زرعي
                                </h2>
                                <div className="font-normal text-base mb-4 text-[#6B7280]">
                                    طالب توجيهي
                                </div>
                                <a className="font-medium cursor-pointer text-base text-center inline-flex rounded-lg py-2 px-3 text-white transition-all hover:scale-105 duration-300" style={{backgroundColor:colors.secondColor}}>
                                    <svg
                                        className="w-4 h-4 mt-0.5 ml-2"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                                    </svg>
                                    تغير الصورة
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg col-span-full h-[345px] sm:col-span-1 shadow xl:p-8 sm:p-6 p-4">
                        <h3 className="font-bold text-xl ">
                            تقييم
                        </h3>
                        <div className="">
                            <div className="flex justify-between mb-2 mt-4">
                                <span className="text-base font-medium text-blue-700 dark:text-white">الأمتحان الأخير</span>
                                <span className="text-sm font-medium text-blue-700 dark:text-white">9/10</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'90%'}}></div>
                            </div>
                            <div className="flex justify-between mb-2 mt-8">
                                <span className="text-base font-medium text-blue-700 dark:text-white">معدل الأمتحانات</span>
                                <span className="text-sm font-medium text-blue-700 dark:text-white">8.2/10</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'82%'}}></div>
                            </div>
                            <div className="flex justify-between mb-2 mt-8">
                                <span className="text-base font-medium text-blue-700 dark:text-white">المشاركة</span>
                                <span className="text-sm font-medium text-blue-700 dark:text-white">9.3/10</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width:'93%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-full rounded-lg grid grid-cols-2 gap-4 box-border">
                    <div className="bg-white rounded-lg col-span-full shadow xl:p-8 sm:p-6 p-4">
                        <h3 className="font-bold text-xl mb-4">
                            المعلومات العامة
                        </h3>
                            <form action="#">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name"
                                               className={classNameForLabel()}>الاسم الاول</label>
                                        <input type="text" name="first-name" id="first-name"
                                               className={classNameForInput()}
                                               placeholder="هاشم" required="" styleInput/>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name"
                                               className={classNameForLabel()}>الاسم الاخير</label>
                                        <input type="text" name="last-name" id="last-name"
                                               className={classNameForInput()}
                                               placeholder="زرعي" required="" styleInput/>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country"
                                               className={classNameForLabel()}>الدولة</label>
                                        <input type="text" name="country" id="country"
                                               value={"فلسطين"}
                                               className={classNameForInput()}
                                               required="" styleInput disabled={true}/>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="city"
                                               className={classNameForLabel()}>المدينة</label>
                                        <input type="text" name="city" id="city"
                                               className={classNameForInput()}
                                               placeholder="طولكرم" required="" styleInput/>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="adress"
                                        className={classNameForLabel()}>العنوان</label>
                                        <input type="text" name="adress" id="adress"
                                               className={classNameForInput()}
                                               placeholder="دير الغصون"  styleInput/>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="email"
                                        className={classNameForLabel()}>البريد الالكتروني</label>
                                        <input type="email" name="email" id="email"
                                               className={classNameForInput()}
                                               placeholder="example@company.com" required="" styleInput/>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="phone-number"
                                        className={classNameForLabel()}>رقم الهاتف</label>
                                        <input type="number" name="phone-number" id="phone-number"
                                               className={classNameForInput()}
                                               placeholder="مثل : 0591234567" required="" styleInput/>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="birthday"
                                        className={classNameForLabel()}>تاريخ الميلاد</label>
                                        <input type="date" name="birthday" id="birthday"
                                               className={classNameForInput()}
                                               placeholder="15/08/1990" required="" styleInput/>
                                    </div>
                                    <div className="col-span-6 sm:col-full">
                                        <input
                                            value="حفظ الكل"
                                            className="font-medium text-sm text-center py-2.5 px-5 text-white rounded-lg cursor-pointer transition transition-all hover:scale-105 duration-300"
                                            type="submit"
                                            style={{backgroundColor:colors.secondColor}}/>

                                    </div>
                                </div>
                            </form>
                    </div>
                    <div className="bg-white rounded-lg col-span-full shadow xl:p-8 sm:p-6 p-4">
                        <h3 className="font-bold text-xl mb-4">
                            معلومات كلمة المرور
                        </h3>
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className={classNameForLabel()}>كلمة السر الحالية</label>
                                    <input type="password" name="first-name" id="first-name"
                                           className={classNameForInput()}
                                           placeholder="هاشم" required="" styleInput
                                           placeholder="••••••••"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className={classNameForLabel()}>كلمة السر الجديدة</label>
                                    <input type="password" name="last-name" id="last-name"
                                           className={classNameForInput()}
                                           placeholder="زرعي" required={true} styleInput
                                           placeholder="••••••••"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="country"
                                           className={classNameForLabel()}>تأكيد كلمة السر</label>
                                    <input type="password" name="country" id="country"
                                           className={classNameForInput()}
                                           required={true} styleInput
                                           placeholder="••••••••"/>
                                </div>
                                <div className="col-span-full">
                                    <div className="font-medium	text-sm">
                                        متطلبات كلمة المرور:
                                    </div>
                                    <div className="font-normal	text-sm mb-1" style={{color:'rgba(107,114,128,1)'}}>
                                        التأكد من استيفاء هذه المتطلبات:
                                    </div>
                                    <ul className="pr-4 list-none" style={{color:'rgba(107,114,128,1)'}}>
                                        <li className="font-normal text-xs my-1">10 أحرف على الأقل (وحتى 100 حرف)</li>
                                        <li className="font-normal text-xs my-1">حرف صغير واحد على الأقل</li>
                                        <li className="font-normal text-xs my-1">تضمين حرف خاص واحد على الأقل، على سبيل المثال، ! @ # ؟</li>
                                    </ul>
                                </div>
                                <div className="col-span-6 sm:col-full">
                                    <input
                                        value="حفظ الكل"
                                        className="font-medium text-sm text-center py-2.5 px-5 text-white rounded-lg cursor-pointer transition transition-all hover:scale-105 duration-300"
                                        type="submit"
                                        style={{backgroundColor:colors.secondColor}}/>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;