import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Quotes } from "./pages/Quotes";
import { Movies} from "./pages/Movies";
import { Characters } from "./pages/Characters";
import { Navbar } from "./components/Navbar";

export default function App() {

  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/quotes/:characterId">
            <Quotes />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Movies />
          </Route>
        </Switch>
    </Router>



  );
};


