import React from 'react';
import PathOfPage from "../common_components/page_path/pathOfPage";
import colors from "../../GlobalTools/colors";
import {useLocation, useParams} from "react-router-dom";

function RecordPage(props) {
    const { recordId } = useParams();
    const location = useLocation();
    const {lessonName} = location.state || {};
    return (
        <div className="h-[100vh]">
            <div className="px-4 pt-6 rtl border-b flex justify-between items-end">
                <PathOfPage names={['التسجيلات',lessonName]} mainName={lessonName}/>
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

export default RecordPage;

