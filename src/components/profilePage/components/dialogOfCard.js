import React, {Fragment} from 'react';
import {Dialog, Transition} from "@headlessui/react";

function DialogOfCard({show , setShow , details= null}){
    return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={()=> setShow(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto p-4">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all">

                                    <h1 className={"text-xl font-bold "}>تعديل البطاقة</h1>

                                    <form>
                                        <div className="mt-4">
                                            <label htmlFor={"name-of-card"}
                                                   className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                                العنوان :
                                            </label>
                                            <input type={"text"} name={"name-of-card"} id="name-of-card"
                                                   value={details === null ? "" : details.nameOfCard} required
                                                   placeholder={"اسم البطاقة"}
                                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor={"price-of-card"}
                                                   className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                                سعر البطاقة :
                                            </label>
                                            <input type={"text"} name={"price-of-card"} id="price-of-card"
                                                   value={details === null ? "" : details.priceOfCard} required
                                                   placeholder={"سعر البطاقة"}
                                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor={"interval-of-card"}
                                                   className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                                المدة :
                                            </label>
                                            <input type={"text"} name={"interval-of-card"} id="interval-of-card"
                                                   value={details === null ? "" : details.intervalOfCard} required
                                                   placeholder={"مدة البطاقة"}
                                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor={"number-of-lessons-of-card"}
                                                   className="text-[#111827] font-medium text-sm block mb-2 rtl">
                                                عدد المحاضرات :
                                            </label>
                                            <input type={"number"} name={"number-of-lessons-of-card"} id="number-of-lessons-of-card"
                                                   value={details === null ? "" : details.numberOfLessonsOfCard} required
                                                   placeholder={"عدد المحاضرات"}
                                                   className="rtl sm:text-sm text-[#111827] p-2.5 bg-[#f9fafb] border-[#d1d5db] border rounded-lg w-full block "/>
                                        </div>
                                    </form>

                                    <div className="mt-4 rtl w-full flex justify-start items-center">
                                        <button
                                            type="button"
                                            className="inline-block rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            تعديل
                                        </button>
                                        <button
                                            type="button"
                                            className="mr-2 inline-block rounded-md border border-transparent bg-[#dc3545] px-4 py-2 text-sm font-medium text-white hover:bg-[#e35c6a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={()=> setShow(false)}
                                        >
                                            أغلاق
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default DialogOfCard;