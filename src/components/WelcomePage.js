import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import LocationsList from "./LocationsList";
import CharacterList from "./CharacterList";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to ="/character">Character</Link>
            </li>
            <li>
              <Link to ="Location">Location</Link>
            </li>
          </ul>
          <Switch>
            {/* <Route path ="/location" component ={Locationslist}/> */}
            <Route path ="/character" component ={CharacterList}/>
            <Route exact path ="/" component = {WelcomePage} />
          </Switch>
        </div>
      </Router>
    </section>
  );
}

