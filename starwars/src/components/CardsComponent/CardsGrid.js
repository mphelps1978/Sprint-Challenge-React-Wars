import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import "../../App";
const url =
  "https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json";

export default function CardsGrid() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.log("Something went wrong: ", error);
      });
  }, []);

  return (
    <>
      {character.length ? (
        character.map(item => {
          return (
            <Cards
              key={item.id}
              name={item.name}
              height={item.height}
              weight={item.mass}
              gender={item.gender}
              homeworld={item.homeworld}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
