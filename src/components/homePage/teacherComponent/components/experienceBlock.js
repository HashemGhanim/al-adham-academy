import React, {useEffect, useRef, useState , memo} from 'react';
import SHADOW from "../../../../GlobalTools/shadows";

function ExperienceBlock(props) {
    const [isVisible , setIsVisible] = useState(false);
    const containerRef = useRef();

    const callbackFunction = (entries) =>{
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }
    const options = {
        root:null,
        rootMargin:"0px",
        threshold : 1.0
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction , options);

        if(containerRef.current) observer.observe(containerRef.current);



        return ()=> observer.disconnect();
    } , [containerRef , isVisible])

    useEffect(()=>{
        if(isVisible){
            containerRef.current.classList.add('translate-x-3');
        }
    } , [isVisible])
    return (
        <div className="w-[80%] h-[22%] relative before-one-experience-for-teacher ">
            <div className={"bg-white w-full h-full flex mx-2 relative rounded-[10px] one-experience-for-teacher transition transition-all duration-500  " + SHADOW} ref={containerRef}>
                <div className={"absolute right-2 flex flex-col justify-center pb-3 h-full"}>
                    <h1 className="font-semibold" style={{direction:'rtl'}}>
                        {props.jobIntervel}
                    </h1>
                    <h2 className="font-normal" style={{color:'rgb(134 , 134 , 134)'}}>
                        {props.jobPlace}
                    </h2>
                </div>
                <div style={{direction:'ltr'}} className={"absolute left-2.5 flex flex-col justify-center pb-2 h-full"}>
                    <h2 className="text-[13px] font-normal" style={{color:'rgb(5, 80, 94)'}}>
                        {props.jobTime}
                    </h2>
                    <h3 className="text-[13px] font-normal" style={{color:'rgb(5, 80, 94)'}}>
                        {props.jobAddress}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default memo(ExperienceBlock);