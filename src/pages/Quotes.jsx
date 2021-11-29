import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Quotes.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Typography from "@mui/material/Typography";
import { lotrApi } from "../api/lotrApi";

export const Quotes = () => {
  const { fetchQuotes } = lotrApi;
  const [quotes, setQuotes] = useState([]);
  const { characterId } = useParams();

  useEffect(() => {
    fetchQuotes(characterId)
      .then(setQuotes)
      .catch(() => toast.error("Error del fetch"));
  }, [fetchQuotes, setQuotes, characterId]);

  return (
    <div className="main_container">
      <h1 className="title_header_quotes">Quotes</h1>
      <div className="card_box_container">
        <ul className="list_block">
          {quotes &&
            quotes.map((q, quote) => (
              <li key={quote}>
                <Card className="card_quote">
                  <CardContent>
                    <Typography className="quote" component="p">
                      <span className="subtitle_quote">Dialoge:</span>{" "}
                      {q.dialog}
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
