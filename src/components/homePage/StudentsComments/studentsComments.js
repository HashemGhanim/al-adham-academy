import React, {useEffect, useRef, useState} from "react";
import CommentCard from "./components/commentCard";
import LowerPartOfComments from "./components/lowerPartOfComments";
import UpperPartOfComments from "./components/upperPartOfComments";




function StudentsComments(props){
    const [isLessThanTwoComments , setIsLessThanTwoComments] = useState('');
    const [listOfComments , setListOfComments] = useState([
        <CommentCard commentOfStudent={'Complete account of the system and\n' +
        'expound the actual Contrary to popular\n' +
        'belief, Lorem Ipsum is not simply \n' +
        'random text. It has roots'} nameOfStudent={'هاشم زرعي'}/>,
        <CommentCard commentOfStudent={'There are many variations of passages\n' +
            ' of Lorem Ipsum available, but the majority\n' +
            ' have suffered alteration in some form,\n' +
            ' by injected humour'} nameOfStudent={'سلمان زرعي'}/>,
    <CommentCard commentOfStudent={'There are many variations of passages\n' +
        ' of Lorem Ipsum available, but the majority\n' +
        ' have suffered alteration in some form,\n' +
        ' by injected humour'} nameOfStudent={'سلمان زرعي'}/>,
        <CommentCard commentOfStudent={'There are many variations of passages\n' +
            ' of Lorem Ipsum available, but the majority\n' +
            ' have suffered alteration in some form,\n' +
            ' by injected humour'} nameOfStudent={'سلمان زرعي'}/>
    ]);

    useEffect(()=>{
        let numberOfChildren = document.querySelectorAll('.students-comments-home-page-component div .students-comments-home-page-card').length;
        if(numberOfChildren < 1){
            setIsLessThanTwoComments('justify-center');
        }
        else {
            setIsLessThanTwoComments('');
        }
    } , [listOfComments]);

    const handleAddComment = ()=>{
        setListOfComments([...listOfComments , <CommentCard commentOfStudent={'There are many variations of passages\n' +
            ' of Lorem Ipsum available, but the majority\n' +
            ' have suffered alteration in some form,\n' +
            ' by injected humour'} nameOfStudent={'سلمان زرعي'}/>]);
    }
    return(
        <div className="w-full relative" id={"comments"}>
            <UpperPartOfComments/>
            <div className="students-comments-home-page-component bg-transparent w-[100%] h-[350px] my-12 mx-auto flex flex-row justify-center items-center" >
                <div className={'relative w-[85%] flex snap-x snap-mandatory overflow-x-auto pb-8 gap-6 items-center bg-transparent no-scrollbar ' + isLessThanTwoComments }>
                    {listOfComments}
                </div>
            </div>
            <LowerPartOfComments/>
        </div>
    );
}

export default StudentsComments;