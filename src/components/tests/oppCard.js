import { React } from "react";
import { Card } from "react-bootstrap";
import Title from "./title";

function OppCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Title>{props.name}</Title>
        <Card.Text>M: {props.m}</Card.Text>
        <Card.Text>W: {props.w}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OppCard;
