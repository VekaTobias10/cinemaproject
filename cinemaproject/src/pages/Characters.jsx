import React, { useState, useEffect } from "react";
import "./Characters.css";
import { ToastContainer, toast } from "react-toastify";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { lotrApi } from "../api/lotrApi";

export const Characters = () => {

  const { fetchCharacters } = lotrApi;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .catch(() => toast.error("Error del fetch"));
  }, [fetchCharacters, setCharacters]);


  return (
    <div className="main_container_character">
      <h1 className="title_header_character">Characters</h1>
      <div className="card_box_container">
        <ul className="list_block">
          {characters &&
            characters.map((c, character) => (
              <li key={character}>
                <Card className="card_character">
                  <CardContent>
                    <Typography className="c_name" component="p">
                      <span className="subtitle_character">Name:</span>
                      {c.name}
                    </Typography>
                    <Typography className="c_spouse" component="p">
                      <span className="subtitle_character">Spouse: </span>{" "}
                      {c.spouse}
                    </Typography>
                    <Typography className="c_gender" component="p">
                      <span className="subtitle_character">Gender: </span>{" "}
                      {c.gender}
                    </Typography>
                    <Typography className="c_hair" component="p">
                      <span className="subtitle_character">Hair: </span>{" "}
                      {c.hair}
                    </Typography>
                    <Typography className="c_race" component="p">
                      <span className="subtitle_character">Race: </span>{" "}
                      {c.race}
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