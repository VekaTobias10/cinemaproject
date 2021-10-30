import React, { useState } from "react";
import "./App.css";
import Header from './components/header';
import TOKEN_BEARER from './appConfig.js';

function App() {

  const [movies, setMovies] = useState([]);
  const base_url = "https://the-one-api.dev/v2";

  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN_BEARER}`,
    },
  };

  fetch(`${base_url}/movie`, options)
    .then((r) => r.json())
    .then((m) => setMovies(m.docs));


  return (
    <div>
      <Header></Header>
      <div className="card_box_container">
      {movies.map((c) => (
        <div className="card_movie">
          <p className="name">
            <span className="subtitle">Name:</span> {c.name}
          </p>
          <p className="duration">
            <span className="subtitle">Duration:</span> {c.runtimeInMinutes}
          </p>
          <p className="score">
            <span className="subtitle">Score: </span> {c.rottenTomatoesScore}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
