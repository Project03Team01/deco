import React, {  useState } from 'react';


 import { useQuery } from '@apollo/client';
 import { QUERY_QUESTIONS } from '../../utils/queries';
 
const Quiz = () => {
 const [activeQuestion, setActiveQuestion] = useState(0)
 const { data } = useQuery(QUERY_QUESTIONS);
 
  // const [selectedAnswer, setSelectedAnswer] = useState('')
console.log(data)
  const questions = data?.questions || [];
  
  console.log(questions)
  const quizData = questions.map(question =>({
    text: question.text,
    image: question.image,
    category: question.category,
    answerId: question.answerId
  }) )
  console.log(quizData)
  // const currentQuestion = quizData[activeQuestion];
 


  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
  }


  return (
  
    <div>
      <h2>This is the quiz</h2>
      <div>
      <ul>
        <li>{quizData.text}</li>
        
      </ul>
        
         <button onClick={onClickNext}>Next</button>
       
     
      </div>
   
    </div>   

  );

  }
  
export default Quiz;
