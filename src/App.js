import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App() {

  const questions = [{
    questionText:"What country has the highest life expectancy?",
    answer:[
      {answerText:"Hong Kong",isCorrect:true},
      {answerText:"Japan",isCorrect:false},
      {answerText:"America",isCorrect:false},
      {answerText:"China",isCorrect:false}
    ]
  },

  {
    questionText:"What year was the United Nations established?",
    answer:[
      {answerText:"1946",isCorrect:false},
      {answerText:"1945",isCorrect:true},
      {answerText:"1944",isCorrect:false},
      {answerText:"1947",isCorrect:false}
    ]
  },

  {
    questionText:"What is the capital of India?",
    answer:[
      {answerText:"Mumbai",isCorrect:false},
      {answerText:"Kolkata",isCorrect:false},
      {answerText:"Chennai",isCorrect:false},
      {answerText:"Delhi",isCorrect:true}
    ]
  }
,
  {
    questionText:"Which planet in the Milky Way is the hottest?",
    answer:[
      {answerText:"Earth",isCorrect:false},
      {answerText:"Venus",isCorrect:true},
      {answerText:"Mars",isCorrect:false},
      {answerText:"Mercury",isCorrect:false}
    ]
  }
]

const [index, setindex] = useState(0);
const [bool, setbool] = useState(false);
const [count, setcount] = useState(0);

function changeQuestion(event){
  if(event){
    setcount(count+1)
    console.log(count)
  }
  if((index+1)<questions.length){
  
    setindex(index+1)
  }

else{
  setbool(true)
}
}

  return (
    <div className="container">
      <div className="quizContainer">
        {bool?( 
        <h5 className="result">Your Score is {count} out of {questions.length}</h5>
        )
        :
        (
        <>
        <h4 className="heading">Questin {index+1} out of {questions.length} :</h4>
        <h3>{questions[index].questionText}</h3>
        {questions[index].answer.map((currOption)=>{
          return <button onClick={()=>{
            changeQuestion(currOption.isCorrect)
          
          
          }
          }>{currOption.answerText}</button>
        })}
        </>
        )
      }

      </div>
    </div>
  );
}

export default App;
