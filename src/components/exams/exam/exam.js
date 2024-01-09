import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import PathOfPage from "../../common_components/page_path/pathOfPage";

function Exam(props) {
    const { examId } = useParams();
    const location = useLocation();
    const {examName} = location.state || {};
    return (
        <div className="h-[100vh]">
            <div className="px-4 pt-6 rtl flex justify-between items-end">
                <PathOfPage names={['الأختبارات',examName]} mainName={examName}/>
            </div>
            <main
                className="mx-auto text-center h-fit"
                style={{
                    height: "",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
            </main>
        </div>

    );
}

export default Exam;