import React, {useEffect, useRef, useState} from 'react';
import SHADOW from "../../../../GlobalTools/shadows";
import colors from "../../../../GlobalTools/colors";
import fonts from "../../../../GlobalTools/fonts";

function MoreDetailsBlockWithNumbers(props) {
    const [count , setCount] = useState(0);
    const [isVisible , setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const constNumber = Number(props.numberOfCard);

    const callbackFunction = (entries)=>{
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }
    const options = {
        root:null,
        rootMargin:"0px",
        threshold:1.0
    }

    useEffect(()=>{
            const observer = new IntersectionObserver(callbackFunction , options);

            if(containerRef.current) observer.observe(containerRef.current);

            return ()=> observer.disconnect();
    } , [isVisible , containerRef])

    useEffect(()=>{
        const incrementCount = () => {
            setCount(count + 1);
        };
        let timer;
        if(!isVisible || count === constNumber){
            return ()=>clearTimeout(timer);
        }
        timer = setTimeout(()=>incrementCount() , 13);
        return ()=> clearTimeout(timer);
    } , [count , isVisible])


    return (
        <div className="flex flex-col justify-center items-center h-[30%] more-details-block-with-numbers " ref={containerRef}>
            <div className="w-full flex justify-center items-center h-[50%]">
                <div className={"w-[23%] h-full text-white rounded-lg flex justify-center items-center text-lg font-semibold " + SHADOW} style={{direction:'ltr' , backgroundColor:colors.secondColor}}>
                    <i className="fa-solid fa-angles-up -translate-x-[2px] text-[15px]"></i>
                    {count}
                </div>
            </div>
            <div className="mt-3 text-[15px] font-medium" style={{color:colors.grayText , fontFamily:fonts.NOTO}}>
                {props.labelOfCard}
            </div>
        </div>
    );
}

export default MoreDetailsBlockWithNumbers;