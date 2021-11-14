import react from "react";
import { useParams } from "react-router-dom";

const Details = ({ info }) => {
  const { id } = useParams();
  if (!info) return null;
  console.log(info);

  const foundPokemon = info && info.find((pokemon) => Number(id) === pokemon.id);
  console.log(foundPokemon);

  return(
      <div className="container3">
      <div className="child3">
           <h4> English name : </h4>  <p> {foundPokemon.name.english} </p>
           <h4> Chinese name : </h4> <p> {foundPokemon.name.chinese} </p>
           <h4> French name : </h4>  <p> {foundPokemon.name.french} </p>
           <h4> Japanese name : </h4> <p> {foundPokemon.name.japanese} </p>
           <h4> Pokemon type : </h4> <p>{foundPokemon.type[0]} </p>
           <h4> Pokemon base : </h4>   <p>{foundPokemon.base.HP} </p>
       

         

          </div>
          </div>
  )
};

export default Details;
