import React, {useState} from 'react';
import colors from "../../../GlobalTools/colors";
import DialogOfCard from "./dialogOfCard";

function CardOfCourse(props) {
    const [show , setShow] = useState(false);
    const shekelSym = '₪';
    return (
        <div className="min-w-[300px] h-[200px] box-border p-4 rounded-lg shadow border ml-4 inline-block relative border-b-0">
            <DialogOfCard show={show} setShow={setShow} details={props}/>
            <h3 className={"text-sm"}>
                كيمياء
            </h3>
            <h1 className={"text-lg font-semibold"}>{props.nameOfCard}</h1>
            <p className={"text-lg font-bold"} style={{color:colors.thirdColor}}>{props.priceOfCard + shekelSym}</p>
            <div>
                <div>
                    <h3 className="inline-block pl-2">المدة : </h3>
                    <h2 className="inline-block">{props.intervalOfCard}</h2>
                </div>
                <div>
                    <h3 className="inline-block pl-2">عدد المحاضرات : </h3>
                    <h2 className="inline-block">{props.numberOfLessonsOfCard + " لقاء"}</h2>
                </div>
            </div>
            <div>
                <button className={"text-white text-center absolute bottom-0 left-0 w-full h-[30px] rounded-br-lg rounded-bl-lg"} style={{backgroundColor:colors.thirdColor}} onClick={()=> setShow(true)}>تعديل</button>
            </div>
        </div>
    );
}

export default CardOfCourse;