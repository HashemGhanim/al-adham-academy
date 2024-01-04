import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import colors from "../../GlobalTools/colors";
import PathOfPage from "../common_components/page_path/pathOfPage";


function Settings(props) {
    const styleInput = {color:'rgba(17,24,39,1)' , borderColor:'rgba(209,213,219,1)' , backgroundColor:'rgba(249,250,251,1)'};
    const classNameForInput = () => {return "text-sm shadow-sm	border rounded-lg w-full block"};
    const classNameForLabel = () => {return "font-medium text-sm block mb-2"};

    useEffect(()=>{
        document.querySelector("#social-accounts-list li:last-child").classList.remove("border-b");
    } , [])

    return (
        <div className="w-full h-fit rtl box-border overflow-y-scroll px-4 pt-6">
                <PathOfPage names={['الأعدادات']} mainName={'اعدادات المستخدم'}/>
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
                    <div className="bg-white rounded-lg col-span-full h-fit sm:col-span-1 shadow xl:p-8 sm:p-6 p-4 mb-4">
                        <h3 className="font-bold text-xl">
                            الحسابات الاجتماعية
                        </h3>
                        <ul className="list-none p-0 m-0" id="social-accounts-list">
                            <li className="py-4 border-b">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="w-5 h-5" aria-hidden="true"
                                             focusable="false" data-prefix="fab" data-icon="facebook-f" role="img"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor"
                                                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0 mr-4">
                                        <span className="text-[#111827] font-semibold text-base text-ellipsis block overflow-hidden whitespace-nowrap">
                                            Facebook
                                        </span>
                                        <a href={"#"} className="text-[#0694a2] font-normal	text-sm text-ellipsis overflow-hidden whitespace-nowrap block hover:underline decoration-solid">
                                            www.facebook.com/hachem.zerei
                                        </a>
                                    </div>
                                    <div className="inline-flex items-center mr-4">
                                        <a href={"#"} className="text-[#111827] font-medium text-sm text-center py-2 px-3 border-[#d1d5db] bg-white hover:bg-[#f3f4f6] border-[1px] rounded-lg mb-3 ml-3">
                                            الغاء الربط
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="py-4 border-b">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                                            <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0 mr-4">
                                        <span className="text-[#111827] font-semibold text-base text-ellipsis block overflow-hidden whitespace-nowrap">
                                            X (Twitter)
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center mr-4">
                                        <a href={"#"} className="text-[#111827] font-medium text-sm text-white text-center py-2 px-3 hover:opacity-95  bg-white rounded-lg mb-3 ml-3" style={{backgroundColor:colors.secondColor}}>
                                            ربط
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="py-4 border-b">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 50 50">
                                            <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0 mr-4">
                                        <span className="text-[#111827] font-semibold text-base text-ellipsis block overflow-hidden whitespace-nowrap">
                                            Telegram
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center mr-4">
                                        <a href={"#"} className="text-[#111827] font-medium text-sm text-white text-center py-2 px-3 hover:opacity-95  bg-white rounded-lg mb-3 ml-3" style={{backgroundColor:colors.secondColor}}>
                                            ربط
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <input
                                value="حفظ الكل"
                                className="font-medium text-sm text-center py-2.5 px-5 text-white rounded-lg cursor-pointer transition transition-all hover:scale-105 duration-300"
                                type="submit"
                                style={{backgroundColor:colors.secondColor}}/>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg col-span-full h-fit sm:col-span-1 shadow xl:p-8 sm:p-6 p-4">
                        <h3 className="font-bold text-xl">
                            التبليغ عن مشكلة
                        </h3>
                        <h2 className="text-sm py-4 text-[#6b7280]">
                            يمكنك من خلال هذا النموذج التبليغ عن اي مشكلة تواجهها وسيتم الرد عليك في اقرب وقت
                        </h2>
                        <textarea placeholder="اكتب التقرير" className="border-2 w-full rounded-lg h-[150px] resize-none p-2 mb-4"/>
                        <div>
                            <input
                                value="ارسال"
                                className="font-medium text-sm text-center py-2.5 px-5 text-white rounded-lg cursor-pointer transition transition-all hover:scale-105 duration-300"
                                type="submit"
                                style={{backgroundColor:colors.secondColor}}/>
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
                    <div className="bg-white rounded-lg col-span-full shadow xl:p-8 sm:p-6 p-4 ">
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