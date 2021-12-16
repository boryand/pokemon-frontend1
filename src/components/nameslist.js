import React from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import pk from "../pictures/pk.png"

const Names = ({ info }) => {
  const { id } = useParams();
  console.log(info);
  if (!info) return null;
  // const arr1 = info.slice(0,10)
  // const result = arr1 && arr1.find((pokemon) => Number(id) === pokemon.id )

  // const filteredNames = info.map((pokemon) => pokemon.id);
  // console.log(filteredNames);
  const arr5 = info && info.slice(0,10).find((pokemon) => Number(id) === pokemon.id)

  // const foundPokemon =
  //  arr5 && arr5.find((pokemon) => Number(id) === pokemon.base .id);
  console.log(arr5);

 
  return (
    <div className="container1">
      <div className="child1">
        <h1 className="item3"> Take a look at these bad boys :</h1>{" "}
           
            <ul>
        {info.slice(0, 10).map((pokemon, index) => (
          <li className="items2" key={index}>   {pokemon.name.english} </li>
        ))}
        </ul>
       
      </div>
      <img className="img123" src="https://www.pngmart.com/files/19/Darkrai-Pokemon-Transparent-PNG.png"/>
    </div>
  );
};

export default Names;
