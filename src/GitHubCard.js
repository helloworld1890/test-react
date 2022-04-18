import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Img from './me.jpeg'

function GitHubCard() {
  return (
    <Container style= {{ display: "flex", justifyContent: "center"}}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Img} />
        <Card.Body>
          <Card.Title>Me</Card.Title>
          <Card.Text>
            this is me, about me and only me
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GitHubCard;
