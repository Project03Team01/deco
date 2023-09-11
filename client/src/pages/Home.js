import React from "react";
import { Container } from "semantic-ui-react";
import { Frame } from "../components/Frame";

const Home = () => {
  return (
    <Container>
      <Frame />
      <h1>Welcome to Deco!</h1>
      <p>Take our quiz to learn about your art preferences.</p>
      </Container>
  );
};

export default Home;
