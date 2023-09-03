import React, { useState } from 'react'
import {QuestionsResponce} from "./constants/utils";

const Quizz = () => {
    const[currentquestion, setCurrentquestion]=useState(0);
    const[score,setScore]=useState(0);

    const handleCurrentquestion=(iscorrect)=>{
        if(iscorrect===true){

            const x=score+1;
            setScore(x);
        }
        const nextquestion=currentquestion+1;
        if(nextquestion < QuestionsResponce.length){
            return setCurrentquestion(nextquestion)
        }

    }
    const displayScore=()=>{
        return score;
    }
  return (
    <div className="quiz-container">
        <h1>Question{currentquestion+1}/{QuestionsResponce.length}</h1>
        <h1>{QuestionsResponce[currentquestion].Question}</h1>
       <div className="option-section">
      {QuestionsResponce[currentquestion].Options.map((item,index)=>
      
       <button onClick={handleCurrentquestion(item.iscorrect)} key={index}>{item.option}</button>
      )}
    </div>
    <div>
        <button onClick={displayScore}>Your Score </button>
    </div>
   
    </div>
  )
}

export default Quizz