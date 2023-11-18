import React from 'react';
import '../styles/lowerPartOfComments.css';

function LowerPartOfComments(props) {
    return (
        <>
            <div className="w-[200px] h-[178px] absolute bottom-[-125px] left-[0px] lower-part-of-comments-blur">
                <div className="w-[200px] h-[178px] absolute  bg-[#ff74261a] rounded-[100px/89px] blur-[15px] " />
            </div>
            <div className="w-[200px] h-[178px] absolute bottom-[-125px] right-[0px] lower-part-of-comments-blur">
                <div className="w-[200px] h-[178px] absolute  bg-[#ff74261a] rounded-[100px/89px] blur-[15px]" />
            </div>
            <img src={require('../images/casual-life-3d-orange-planet-with-disk 1images.png')} className="absolute lower-part-of-comments-imgs right-[25px] bottom-[-45px]"/>
            <img src={require('../images/Groupimages.png')} className="absolute lower-part-of-comments-imgs left-[25px] bottom-[-65px] -rotate-12"/>
        </>
    );
}

export default LowerPartOfComments;