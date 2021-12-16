import React, { useState, useEffect } from "react";

import "./App.css";
import Names from "./components/nameslist";
import GetById from "./components/getbyid";
import Details from "./components/details";
import Navbar from "./components/navbar";
import Game from "./components/game"
import { Link } from "react-router-dom";
import Playing from "./components/playing";
import Footer from "./components/footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";

function App() {
  const [info, setInfo] = useState();
  // empty array is a truthy value !!
  useEffect(() => {
    fetch("https://bxb-project.herokuapp.com/pokemon")
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
        throw new Error("sorry,not working");
      })
      .then((data) => {
        // console.log(data);
        setInfo(data);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

 
  return (
    <div>
  <Navbar />

    <Switch>
      
    <Route exact path="/play">
        <Game info={info} />
      </Route>
      <Route exact path="/play/now">
        <Playing info={info} />
      </Route>

      <Route exact path="/">
        <Names info={info} />
      </Route>

      <Route exact path="/pokemon/:id">
        <GetById info={info} />
      </Route>

      <Route exact path="/pokemon/:id/info">
        <Details info={info} />
      </Route>
    </Switch>
    <Footer />
      </div>
  );
}

export default App;
