import react, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const Playing = ({ info }) => {
  console.log(info);
  const [mergedPokemons, setMergedPokemons] = useState();
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();
  const [game, setGame] = useState([
    { id: 1, name: "Bulbasaur", hp: 45, attack: 49, spAttack: 20 },
    { id: 2, name: "Ivysaur", hp: 60, attack: 62, spAttack: 30 },
    { id: 3, name: "Venusaur", hp: 80, attack: 82, spAttack: 40 },
    { id: 4, name: "Charmander", hp: 39, attack: 52, spAttack: 50 },
    { id: 5, name: "Charmeleon", hp: 58, attack: 2, spAttack: 50 },
    { id: 6, name: "Charizard", hp: 78, attack: 2, spAttack: 50 },
    { id: 7, name: "Squirtle", hp: 44, attack: 2, spAttack: 50 },
    { id: 8, name: "Wartortle", hp: 59, attack: 2, spAttack: 50 },
    { id: 9, name: "Blastoise", hp: 79, attack: 2, spAttack: 50 },
    { id: 9, name: "Caterpie", hp: 45, attack: 2, spAttack: 50 },
  ]);

  const [winner, setWinner] = useState();
  const handleFight = () => {
    // const winner = Math.random();
    // if (winner > 0.5) {
    //   setWinner(playerOne);
    // } else {
    //   setWinner(playerTwo);
    // }
    if (playerOne.base.HP > playerTwo.hp) {
      setWinner(playerOne);
    } else {
      setWinner(playerTwo);
    }
  };

  return (
    <div className="bb">
      <div className="bb1">
        {playerOne && (
          <div>
            <h1>{playerOne.name.english}</h1>
          </div>
        )}

        {playerOne && playerTwo && <h1>Vs</h1>}
        {playerTwo && (
          <div>
            <h1>{playerTwo.name}</h1>
          </div>
        )}
        {playerOne && playerTwo && (
          <button onClick={handleFight}>FIGHT !</button>
        )}
        {winner && (
          <h2>And the winner is: {winner.name || winner.name.english}</h2>
        )}
      </div>
    </div>
  );
};

export default Playing;
