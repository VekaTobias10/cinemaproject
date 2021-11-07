import React, { useState, useEffect } from "react";
import "./Movies.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { appConfig } from "../appConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typography from '@mui/material/Typography';

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
        toast.error("Error del fetch");
      });
  }, [setMovies, BASE_URL]);

  return (
    <div className="main_container">
      <h1 className="title_header">Movies</h1>
      <div className="card_box_container">
        <ul className="list_block">
          {movies.map((c, movie) => (
            <li key={movie}>
              <Card className="card_movie">
                <CardContent>
                  <Typography className="name" component="p">
                    <span className="subtitle_movie">Name:</span> {c.name}
                  </Typography>
                 
                  <Typography className="duration" component="p">
                  <span className="subtitle_movie">Duration:</span>{" "}
                    {c.runtimeInMinutes} min
                  </Typography>

                  <Typography className="score" component="p">
                  <span className="subtitle_movie">Score: </span>{" "}
                    {c.rottenTomatoesScore}
                  </Typography>

                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};
