import React, { useState, useEffect } from "react";
import "./Characters.css";
import { appConfig } from "../appConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
          {characters.map((c, character) => (
            <li key={character}>
              <div className="card_character">
                <p className="c_name">
                  <span className="subtitle">Name:</span> {c.name}
                </p>
                <p className="c_gender">
                  <span className="subtitle">Gender: </span> {c.gender}
                </p>
                <p className="c_hair">
                  <span className="subtitle">Hair: </span> {c.hair}
                </p>
                <p className="c_race">
                  <span className="subtitle">Race: </span> {c.race}
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



