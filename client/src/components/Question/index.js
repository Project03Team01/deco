import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, Header, Radio } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../../utils/queries';



function Question() {
// const [activeQuestion, setActiveQuestion] = useState(0)
  // const [selectedAnswer, setSelectedAnswer] = useState('')

  // const [ questions ] = useQuery(QUERY_QUESTIONS);

  // {activeQuestion.questions.map((question) => (

  // ))}

  // const questionNum = questions[0] + 1

  /* const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
  } */


  return (
    <Container>
    <Header as='h3' textAlign='center'>
      This should be the question text
    </Header>
    <Grid textAlign='center'>
      <Grid.Row>
        {/* Map question to a single column object */}
        <Grid.Column>
          <image src=""></image>
          <Radio />
          <p>
            <span>This one</span>
          </p>            
        </Grid.Column>
        
      </Grid.Row>
    </Grid>  
    </Container>
  );
}

export default Question;
