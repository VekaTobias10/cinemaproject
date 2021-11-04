import React, { useState, useEffect } from "react";
import "./Movies.css";
import { appConfig } from "../appConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Movies = () => {

  const [movies, setMovies] = useState([]);
  const { BEARER_TOKEN, BASE_URL } = appConfig;



  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    fetch(`${BASE_URL}/movie`, options)
      .then((r) => r.json())
      .then((m) => setMovies(m.docs))
      .catch(() => {
        toast.error("Error del fetch")
      });
  }, [setMovies, BASE_URL])

  return (
    <div className="main_container">
      <h1 className='title_header'>Cinema Project</h1>
      <div className="card_box_container">
        <ul className="list_block">
          {movies.map((c, movie) => (
            <li key={movie}>
              <div className="card_movie">
                <p className="name">
                  <span className="subtitle">Name:</span> {c.name}
                </p>
                <p className="duration">
                  <span className="subtitle">Duration:</span> {c.runtimeInMinutes} min
                </p>
                <p className="score">
                  <span className="subtitle">Score: </span> {c.rottenTomatoesScore}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

