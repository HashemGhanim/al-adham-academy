import React, {useEffect, useState} from 'react';
import {Navigate, useLocation, useNavigate, useNavigation, useParams} from "react-router-dom";
import PathOfPage from "../../common_components/page_path/pathOfPage";
import colors from "../../../GlobalTools/colors";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import classNames from "classnames";

function Exam(props) {
    const [questions, setQuestions] = useState([
        {
            question:'ما هو العدد الذري للهيدروجين ؟',
            type:1,
            choices:{
                correctChoice:'1',
                values:[
                    '42',
                    '2',
                    '12',
                    '3'
                ]
            }
        },
        {
            question:'اشرح كيف يتم التوزيع الالكتروني في الافلاك ؟',
            type:0,
            choices:{
                correctChoice:'',
                values:[]
            }
        }
    ])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const { examId } = useParams();
    const location = useLocation();
    const {examName, exam_id} = location.state || {};

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', 'image'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];
    const module = {
        toolbar: toolbarOptions
    }

    useEffect(() => {
        window.addEventListener('popstate', function(event) {
            navigate("/exams" , {replace:true})
        });
    }, []);
    return (
        <div className="h-fit mb-16">
            <div className="px-4 pt-6 rtl flex justify-between items-end">
                <PathOfPage names={['الأختبارات',examName]} mainName={examName}/>
            </div>
            <form>
                <div className="grid grid-cols-3 gap-4 p-3 ltr">
                    <div className="col-span-full rounded-lg">
                        <div className="px-4 flex justify-between items-center ">
                            <div className="w-1/5 h-[65px] flex justify-start items-center">
                                <input type={"submit"} className={"text-white flex justify-center items-center inline-block h-full px-6 rounded-lg cursor-pointer font-semibold mr-3"} style={{backgroundColor:colors.secondColor}} value={"إنهاء الامتحان"}/>
                                <span className="inline-block font-semibold" style={{color:colors.secondColor}}>المجموع : 20</span>
                            </div>
                            <div className="w-1/5 h-[70px] flex justify-center items-center text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-7 h-7">
                                    <path fill-rule="evenodd"
                                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <span  className={"font-semibold pr-2"} style={{color:colors.secondColor}}>20m: 42s متبقية</span>
                            </div>
                            <div className="w-1/5 h-[70px] flex justify-end items-center">
                                <span className="inline-block text-red-500 font-semibold text-xl" style={{color:colors.secondColor}}>امتحان الكيمياء الأول</span>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-auto rounded-lg col-span-full min-h-[500px]">
                        <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4 h-full">
                            <div className="xl:block block sm:flex rtl">
                                <div className="sm:mr-4 mr-0 xl:mr-0">
                                    <h2 className="font-bold text-2xl mb-1  flex items-center" style={{color:colors.secondColor}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-10 h-10 inline-block ml-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                        </svg>
                                        قائمة الأسئلة
                                    </h2>
                                </div>
                            </div>
                            <div className="my-8 rtl flex justify-start items-center mr-1.5">
                                <div className="w-fit flex  items-center">
                                    <div className="w-6 h-6 rounded text-white inline-flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}></div>
                                    <span className="mr-2.5 text-base font-medium">أجاب</span>
                                    <span className="mr-2.5 text-xl font-bold text-[#663e7a]">7</span>
                                </div>
                                <div className="w-fit flex  items-center mx-8">
                                    <div className="w-6 h-6 rounded text-white inline-flex justify-center items-center font-bold bg-[#d16464]"></div>
                                    <span className="mr-2.5 text-base font-medium">بدون إجابة</span>
                                    <span className="mr-2.5 text-xl font-bold text-[#663e7a]">5</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-4 rtl mr-1.5">
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}>1</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}>2</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}>3</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold bg-[#d16464]">4</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}>5</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold bg-[#d16464]">6</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}>7</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold bg-[#d16464]">8</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold bg-[#d16464]">9</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}>10</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold bg-[#d16464]">11</div>
                                <div className="w-10 h-10 rounded-lg text-white flex justify-center items-center font-bold" style={{backgroundColor:colors.secondColor}}>12</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">13</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">14</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">15</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">16</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">17</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">18</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">19</div>
                                <div className="w-10 h-10 rounded-lg text-[#663e7a] flex justify-center items-center font-bold ml-0 border border-[#663e7a] border-2">20</div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-full rounded-lg grid grid-cols-2 gap-4 box-border min-h-[500px]">
                        <div className="bg-white rounded-lg col-span-full shadow xl:p-8 sm:p-6 p-4">
                            <div className="grid grid-cols-6 gap-6 rtl">
                                <div className={"my-4 flex items-center w-full col-span-full"}>
                                    <div className="w-6 h-6 rounded-full bg-gray-300 text-center">{currentQuestion % questions.length + 1}</div>
                                    <div className="text-lg font-semibold inline mr-4">
                                        {questions[currentQuestion].question}
                                    </div>
                                </div>
                                <div className={classNames(questions[currentQuestion].type === 1 ? 'rtl':'ltr' , 'w-full col-span-full mx-1')}>
                                    {
                                        questions[currentQuestion].type === 0 ? <ReactQuill modules={module} theme={"snow"} value={value} onChange={setValue}/>:
                                            <>
                                                <label className="block my-8 relative">
                                                    <input type="radio"  name="radio" className={"opacity-0 absolute cursor-pointer right-0 top-0 z-10 peer"} value={questions[currentQuestion].choices.values[0]}/>
                                                    <span className="relative -top-1 right-7">{questions[currentQuestion].choices.values[0]}</span>
                                                    <span className="absolute top-0 right-0 w-5 h-5 bg-[#eee] rounded cursor-pointer transition transition-all duration-100 peer-checked:bg-[#4d2c5e] peer-checked:after:content-['✔'] peer-checked:after:absolute peer-checked:after:-top-0.5 peer-checked:after:right-0.5 peer-checked:after:text-white"></span>
                                                </label>
                                                <label className="block my-8 relative">
                                                    <input type="radio"  name="radio" className={"opacity-0 absolute cursor-pointer right-0 top-0 z-10 peer"} value={questions[currentQuestion].choices.values[1]}/>
                                                    <span className="relative -top-1 right-7">{questions[currentQuestion].choices.values[1]}</span>
                                                    <span className="absolute top-0 right-0 w-5 h-5 bg-[#eee] rounded cursor-pointer transition transition-all duration-100 peer-checked:bg-[#4d2c5e] peer-checked:after:content-['✔'] peer-checked:after:absolute peer-checked:after:-top-0.5 peer-checked:after:right-0.5 peer-checked:after:text-white"></span>
                                                </label>
                                                <label className="block my-8 relative">
                                                    <input type="radio"  name="radio" className={"opacity-0 absolute cursor-pointer right-0 top-0 z-10 peer"} value={questions[currentQuestion].choices.values[2]}/>
                                                    <span className="relative -top-1 right-7">{questions[currentQuestion].choices.values[2]}</span>
                                                    <span className="absolute top-0 right-0 w-5 h-5 bg-[#eee] rounded cursor-pointer transition transition-all duration-100 peer-checked:bg-[#4d2c5e] peer-checked:after:content-['✔'] peer-checked:after:absolute peer-checked:after:-top-0.5 peer-checked:after:right-0.5 peer-checked:after:text-white"></span>
                                                </label>
                                                <label className="block my-8 relative">
                                                    <input type="radio"  name="radio" className={"opacity-0 absolute cursor-pointer right-0 top-0 z-10 peer"} value={questions[currentQuestion].choices.values[3]}/>
                                                    <span className="relative -top-1 right-7">{questions[currentQuestion].choices.values[3]}</span>
                                                    <span className="absolute top-0 right-0 w-5 h-5 bg-[#eee] rounded cursor-pointer transition transition-all duration-100 peer-checked:bg-[#4d2c5e] peer-checked:after:content-['✔'] peer-checked:after:absolute peer-checked:after:-top-0.5 peer-checked:after:right-0.5 peer-checked:after:text-white"></span>
                                                </label>
                                            </>
                                    }
                                </div>
                                <div className="col-span-full flex justify-center items-center">
                                    <div className="grid grid-cols-2 ltr gap-1">
                                        <div className="col-span-1 bg-gray-100 flex justify-center items-center p-2 rounded-lg hover:bg-gray-200 transition-all transition duration-100 cursor-pointer " onClick={()=>{
                                            setCurrentQuestion((currentQuestion + 1) % questions.length);
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15.75 19.5L8.25 12l7.5-7.5"/>
                                            </svg>
                                        </div>
                                        <div className="col-span-1 bg-gray-100 flex justify-center items-center p-2 rounded-lg hover:bg-gray-200 transition-all transition duration-100 cursor-pointer" onClick={()=>{
                                            setCurrentQuestion((currentQuestion - 1 + questions.length) % questions.length);
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Exam;
