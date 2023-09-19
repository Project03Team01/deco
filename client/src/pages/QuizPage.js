import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Grid, Header } from 'semantic-ui-react';
import Question from '../components/Question';

function QuizPage() {

return (
  <Container>
      
        <div key={'index'}>
          <Header as='h2' textAlign='center'>
          </Header>
          <Grid textAlign='center'>
            <Grid.Row>
              <Question  />
            </Grid.Row>
          </Grid>
        </div>
      
    </Container>

  
  );
}
export default QuizPage;
