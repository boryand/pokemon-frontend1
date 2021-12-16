import react, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
// import{wartotle , charmander}from "./images"
import lol from '../pictures/lol.gif'

const Game = ({ info }) => {
  // console.log(info);
  const [mergedPokemons, setMergedPokemons] = useState();
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  const [winner, setWinner] = useState();

  useEffect(() => {
    if (info) {
      const getPokeData = (id) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => {
            if (res.ok) return res.json();
          })
          .then((data) => {
            return data;
          })
          .catch((err) => {
            console.log("err");
          });
      };

      const slicedPokemons = info.slice(0, 12);
      console.log(slicedPokemons);

      const pokePromises = slicedPokemons.map((pk) => getPokeData(pk.id));

      Promise.all(pokePromises).then((extraPokeData) => {
        const mergedData = slicedPokemons.map((pk, i) => {
          pk.picture = extraPokeData[i].sprites.front_default;
          return pk;
        });
        setMergedPokemons(mergedData);
      });
      // console.log(pokePromises);

      // const pokeOne = getPokeData(1);
      // console.log(pokeOne);
    }
  }, [info]);

  useEffect(() => {
    if (playerOne) {
      // console.log(playerOne.id);
      let randomOpponent;
      setMergedPokemons((prevMergedPokemons) => {
        const filteredPokemons = prevMergedPokemons.filter(
          (c) => c.id !== playerOne.id
        );
        randomOpponent =
          filteredPokemons[Math.floor(Math.random() * filteredPokemons.length)];
        setPlayerTwo(randomOpponent);
        return filteredPokemons;
      });
    }
  }, [playerOne]);

  const handleFight = () => {
    // console.log(playerTwo.base.HP)
    // console.log(playerOne.base.HP)
    // const winner = Math.random();
    // if (winner > 0.5) {
    //   setWinner(playerOne);
    // } else {
    //   setWinner(playerTwo);
    // }
    if (playerOne.base.HP > playerTwo.base.HP) {

      // if (12 > undefined) {
      setWinner(playerOne);
    } else {
      setWinner(playerTwo);
    }
  };
 

  // if (!info) return null;
  //   const [names, setNames] = useState();

  // const arr1 = info && info.slice(0, 10).map((pokemon) => pokemon.name.english);
  // const arr2 = info && info.slice(0, 10).map((pokemon) => pokemon.base);
  // console.log(arr2);

  // const slicedPokemons = info.slice(0, 10);

  if (!mergedPokemons) return null;

  //   const random = arr1 && arr1[Math.floor(Math.random() * arr1.length)];
  //   console.log(random)

  //   if (!info) return null;
  // const arr1 =  info.slice(0,10).map((pokemon) => pokemon);

  //   const random = arr1[Math.floor(Math.random() * arr1.length)];
  // console.log(slicedPokemons);
  return (
    // <div className="wrapper2">
    // <h1> Choose your pokemon </h1>
 
    <div className="wrapper1">
   
      {!playerOne &&
        !playerTwo &&
        mergedPokemons.map((pk, i) => {
          return (
            <div className="box1" key={i}>
              <h1 className="pk_names">{pk.name.english}</h1>{" "}
              <img
                onClick={() => setPlayerOne(pk)}
                className="pokemon"
                src={pk.picture}
              />
              <p className="button"> ↑CLICK ME ↑</p>
              <p className="info11"> HP : {pk.base.HP} </p>
              <p className="info11"> Defense : {pk.base.Defense} </p>
              <p className="info11"> Attack : {pk.base.Attack} </p>
              <p className="info11" > Special Attack: {pk.base["Sp. Attack"]}</p>
            </div>
          );
        })}

      <div className="bb">
     
        <h1 className="ann1"> You choose to fight with : </h1>
          {playerOne && (
            <div>
              <h1>{playerOne.name.english}</h1>
            </div>
          )}
              <img className="img_12" src={lol} />
         
          {playerOne && playerTwo && <h1>Vs</h1>}
          {playerTwo && (
            <div>
              <h1>{playerTwo.name.english}</h1>
            </div>
          )}
          {playerOne && playerTwo && (
            <button className="btn1" onClick={handleFight}>FIGHT !</button>
          )}
          {winner && <h2>And the winner is: {winner.name.english} </h2>}
   
      </div>
    </div>
  );
};

export default Game;
