import React from 'react';
import PathOfPage from "../common_components/page_path/pathOfPage";
import colors from "../../GlobalTools/colors";
import {useLocation, useParams} from "react-router-dom";
import {CloudinaryContext, Video} from "cloudinary-react";

function RecordPage(props) {
    const { recordName } = useParams();
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
                <div className={"mt-4"}>
                    <CloudinaryContext cloudName="dqerx3w4l">
                        <Video publicId={recordName}  controls/>
                    </CloudinaryContext>
                </div>
            </main>
        </div>

    );
}

export default RecordPage;

