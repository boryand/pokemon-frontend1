import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
// import{wartotle , charmander}from "./images"

const Game = ({ info }) => {
  console.log(info);
  if (!info) return null;
  //   const [names, setNames] = useState();

  const arr1 = info && info.slice(0, 10).map((pokemon) => pokemon.name.english);
  const arr2 = info && info.slice(0, 10).map((pokemon) => pokemon.base);
  console.log(arr2);

  //   const random = arr1 && arr1[Math.floor(Math.random() * arr1.length)];
  //   console.log(random)

  //   if (!info) return null;
  // const arr1 =  info.slice(0,10).map((pokemon) => pokemon);

  //   const random = arr1[Math.floor(Math.random() * arr1.length)];

  return (
    <div className="wrapper2">
      <h1> Choose your pokemon </h1>
      <div className="wrapper1">
        <div classname="box1">
          <h1>{arr1[0]}</h1>
         <Link to="/play/now"> <img
            className="pokemon"
            src="https://i.pinimg.com/originals/3f/d7/a0/3fd7a0503272ce51922b098ad7e0c24d.gif"
          /> </Link>
           <p> HP :{arr2[0].HP} </p>
           <p> Defense :{arr2[0].Defense} </p>
           <p> Attack :{arr2[0].Attack} </p>

        
        </div>

        <div classname="box1">
          <h1>{arr1[1]}</h1>
          <Link to="/play/now"> <img
            className="pokemon"
            src="https://25.media.tumblr.com/999093664100d6eba535b67f1ce67d79/tumblr_msxdapHUGf1ssmjh5o1_500.gif"
          /> </Link>
           <p> HP :{arr2[1].HP} </p>
           <p> Defense :{arr2[1].Defense} </p>
           <p> Attack :{arr2[1].Attack} </p>


        </div>
        <div classname="box1">
          {" "}
          <h1>{arr1[2]}</h1>
          <Link to="/play/now"> <img
            className="pokemon"
            src="https://66.media.tumblr.com/tumblr_m9ydybCqeu1rfjowdo1_500.gif"
          />  </Link>
           <p> HP :{arr2[2].HP} </p>
           <p> Defense :{arr2[2].Defense} </p>
           <p> Attack :{arr2[2].Attack} </p>

        </div>
        <div classname="box1">
          {" "}
          <h1>{arr1[3]}</h1>
          <Link to="/play/now"><img
            className="pokemon"
            src="https://66.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif"
          />  </Link>
           <p> HP :{arr2[3].HP} </p>
           <p> Defense :{arr2[3].Defense} </p>
           <p> Attack :{arr2[3].Attack} </p>

        </div>

        <div classname="box1">
          {" "}
          <h1>{arr1[4]}</h1>
          <Link to="/play/now"> <img
            className="pokemon"
            src="https://thumbs.gfycat.com/DamagedCookedKitfox-max-1mb.gif"
          />  </Link>
           <p> HP :{arr2[4].HP} </p>
           <p> Defense :{arr2[4].Defense} </p>
           <p> Attack :{arr2[4].Attack} </p>

        </div>
        <div classname="box1">
          {" "}
          <h1>{arr1[5]}</h1>
          <Link to="/play/now"> <img className="pokemon" src="https://i.gifer.com/4hsh.gif" />  </Link>
          <p> HP :{arr2[5].HP} </p>
           <p> Defense :{arr2[5].Defense} </p>
           <p> Attack :{arr2[5].Attack} </p>

        </div>
        <div classname="box1">
          {" "}
          <h1>{arr1[6]}</h1>
          <Link to="/play/now"> <img className="pokemon" src="https://i.imgur.com/uIrFTd1.gif" />  </Link>
          <p> HP :{arr2[6].HP} </p>
           <p> Defense :{arr2[6].Defense} </p>
           <p> Attack :{arr2[6].Attack} </p>

        </div>

        <div classname="box1">
          <h1>{arr1[7]}</h1>
          <Link to="/play/now"><img
            className="pokemon"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/906e6198-505c-4249-996c-6fd79c1fec69/d4or6cf-8b7a4631-cf63-4273-8d31-2b2ecb24f899.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwNmU2MTk4LTUwNWMtNDI0OS05OTZjLTZmZDc5YzFmZWM2OVwvZDRvcjZjZi04YjdhNDYzMS1jZjYzLTQyNzMtOGQzMS0yYjJlY2IyNGY4OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u6t-V2-7SvNhTh0-Wkw23WydcVrlV4ER-RKpP5vxN2w"
          />  </Link>
           <p> HP :{arr2[7].HP} </p>
           <p> Defense :{arr2[7].Defense} </p>
           <p> Attack :{arr2[7].Attack} </p>

        </div>

        <div classname="box1">
          {" "}
          <h1>{arr1[8]}</h1>
          <Link to="/play/now"> <img
            className="pokemon"
            src="https://thumbs.gfycat.com/AdoredAlertIndianpalmsquirrel-max-1mb.gif"
          />  </Link>
           <p> HP :{arr2[8].HP} </p>
           <p> Defense :{arr2[8].Defense} </p>
           <p> Attack :{arr2[8].Attack} </p>

        </div>

        <div classname="box1">
          {" "}
          <h1>{arr1[9]}</h1>
          <Link to="/play/now"> <img
            className="pokemon"
            src="https://66.media.tumblr.com/tumblr_ma9fz0Rb0e1rfjowdo1_500.gif"
          /> </Link>
           <p> HP :{arr2[9].HP} </p>
           <p> Defense :{arr2[9].Defense} </p>
           <p> Attack :{arr2[9].Attack} </p>

        </div>
      </div>
    </div>
  );
};

export default Game;
