import React, { useState, useEffect } from "react";

import "./App.css";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Names from "./components/nameslist";

function App() {
  const [info, setInfo] = useState([]);
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

  //

  const filteredNames = info.map((pokemon) => pokemon.name.english);
  console.log(filteredNames);


  //  return(
  //   { info && info.name.english.map((names) => {
  //        <fragment>
  //             <p>{names.name}</p>
  //           </fragment>

  //       });

  //  )
  return (
    <>
      <Switch>
        <Route path="/pokemon">{info.length > 0 && <Names info={info} />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
