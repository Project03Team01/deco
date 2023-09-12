import React, { useEffect, useState } from 'react';
import { Card, Grid, Header, Radio } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../../utils/queries';



function Question() {

  const [ loading, data ] = useQuery(QUERY_QUESTIONS);
  console.log(data);

  const question = data?.questions || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Header as='h3' textAlign='center'>
        {question.text}
      </Header>
      <Grid textAlign='center'>
        <Grid.Row>
          {question.map((option, index) => (
            <Grid.Column key={index}>
              <img src={option.image} alt={`Option ${index + 1}`} />
              <Radio />
              <p>{option.text}</p>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Card>
  );
}

export default Question;
