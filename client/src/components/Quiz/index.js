import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";

import { useQuery } from "@apollo/client";
import { QUERY_QUESTIONS } from "../../utils/queries";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState('')
  const { loading, data } = useQuery(QUERY_QUESTIONS);

  const [isDisabled, setDisabled] = useState(true);
  
  const questions = data?.questions || [];
  console.log(questions);

  useEffect( () => {
    if (data) {

    } else if (loading) {
      console.log("LOADING..");
    
    }
  }, [data, loading])

  const onClickNext = (event) => {
    event.preventDefault();
    if (activeQuestion !== questions.length - 1) { setActiveQuestion((prev) => prev + 1)
      setDisabled(false)
   } else {
     setActiveQuestion(0)
   }
   }

   const currentQuestion = questions[activeQuestion]

const text = questions.map((question) => question.text)
console.log(text[activeQuestion])
const images = questions.map((image) => image.image)

console.log(images[activeQuestion])
  
const startQuiz = () => {
  setDisabled(false)
}

  return (
  
    <div>
      <h2>Find your style</h2>

      <div>
      {loading ? (<div>Loading...</div>) : (
       
          <div key={text}>
          <p> {text[activeQuestion] } </p> 
          {images[activeQuestion].map((image) => {
            return <button onClick={onClickNext}> <img src={image} alt={image} height = '200' width = '200' margin = '10px' padding = '10px'></img> </button>
          
          })
          }   
          <p> Question {activeQuestion + 1 } of {questions.length}</p>
          </div>
        )
        }
  
      </div>
    </div>
  );

};

export default Quiz;
