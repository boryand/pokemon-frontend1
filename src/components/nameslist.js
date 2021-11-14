import React from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Names = ({ info }) => {
  const { id } = useParams();
  console.log(info);
  if (!info) return null;
  // const arr1 = info.slice(0,10)
  // const result = arr1 && arr1.find((pokemon) => Number(id) === pokemon.id )




  const filteredNames = info.map((pokemon) => pokemon.name.english);
  console.log(filteredNames);

  return (
    <div className="container1">
    <div className="child1">
    <h1> Pokemons : </h1>  {info.slice(0,10).map((pokemon , index) => (
        <p key={index}>  {pokemon.name.english}  </p>
      ))}
    </div>
    </div>
  );
};

export default Names;
