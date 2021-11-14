import React from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Getbyid = ({ info }) => {
  const { id } = useParams();
  if (!info) return null;
  console.log(info);
const arr5 = info.slice(0,10)
  const foundPokemon =
   arr5 && arr5.find((pokemon) => Number(id) === pokemon.id);
  console.log(foundPokemon);

  // const foundPokemon = info && info.find((pokemon)=> id === id )
  return (
    <div className="container2">
      <div className="child2">
        <h1> Pokemon name </h1>
        <p>
          <Link to={`/pokemon/${id}/info`}>{foundPokemon.name.english}</Link>
        </p>
        <h1> Pokemon type </h1> <p>{foundPokemon.type[0]} </p>
        {/* maybe include a button that will take you to the more detailedinfo */}
      </div>
    </div>
  );
};

export default Getbyid;
