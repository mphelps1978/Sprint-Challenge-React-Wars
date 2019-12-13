import React from "react";
// import axios from "axios";
// import CardsGrid from "./CardsGrid";

const Cards = props => {
  console.log("Props: ", props);
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
};

export default Cards;
