import React, { useState, useEffect } from "react";
import "./Characters.css";
import { appConfig } from "../appConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';


export const  Characters = () => {


  const [characters, setCharacters] = useState([]);
  const { BEARER_TOKEN, BASE_URL } = appConfig;



  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    fetch(`${BASE_URL}/character?race=Hobbit&death>0`, options)
      .then((r) => r.json())
      .then((m) => setCharacters(m.docs))
      .catch(() => {
        toast.error("Error del fetch")
      });
  }, [setCharacters, BASE_URL])

  return (
    <div className="main_container_character">
      <h1 className='title_header_character'>Characters</h1>
      <div className="card_box_container">
        <ul className="list_block">
          {characters && characters.map((c, character) => (
            <li key={character}>
              <Card className="card_character">

               <CardContent>

                   <Typography className="c_name" component="p">
                  <span className="subtitle_character">Name:</span>{c.name}
                </Typography>
                <Typography className="c_spouse" component="p">
                  <span className="subtitle_character">Spouse: </span> {c.spouse}
                </Typography>
                <Typography  className="c_gender" component="p">
                  <span className="subtitle_character">Gender: </span> {c.gender}
                </Typography>
                <Typography className="c_hair" component="p">
                  <span className="subtitle_character">Hair: </span> {c.hair}
                </Typography>
                <Typography className="c_race" component="p">
                  <span className="subtitle_character">Race: </span> {c.race}
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



