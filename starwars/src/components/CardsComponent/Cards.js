import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Cards = props => {
  console.log("Props: ", props);
  return (
    <div>
      <Card>
        <CardBody style={{ padding: "20px" }}>
          <CardTitle style={{ fontSize: "2rem" }}>{props.name}</CardTitle>
          <CardSubtitle>From: {props.homeworld}</CardSubtitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
          <CardSubtitle>Height: {props.height}</CardSubtitle>
          <CardSubtitle>Weight: {props.weight}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
