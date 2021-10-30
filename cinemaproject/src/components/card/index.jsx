import React, { useState } from "react";
import "./style.css";

export default function Cards() {
  const [movies, setMovies] = useState([]);
  const base_url = "https://the-one-api.dev/v2";

  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer CfXrfk889Q7CB6IAOuH6",
    },
  };

  fetch(`${base_url}/movie`, options)
    .then((r) => r.json())
    .then((m) => setMovies(m.docs));

  return (
    <div className="card_box_container">
      {movies.map((c) => (
        <div className="card_movie">
          <p className="name">
            <span className="subtitle">Nombre de la pelicula:</span> {c.name}
          </p>
          <p className="duration">
            <span className="subtitle">Duración:</span> {c.runtimeInMinutes}
          </p>
          <p className="score">
            <span className="subtitle">Puntuación: </span> {c.rottenTomatoesScore}
          </p>
        </div>
      ))}
    </div>
  );
}
