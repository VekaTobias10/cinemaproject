import React, { useState, useEffect } from 'react';
import './Movies.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import { lotrApi } from '../api/lotrApi';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: "460px",
          borderRadius: "50px",
          padding: "15px",
          margin: "20px 10px",
          maxHeight: "250px",
          backgroundColor: "#6D475B",
        },
      },
    },
  },
});

export const Movies = () => {
  const { fetchMovies } = lotrApi;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(setMovies)
      .catch(() => toast.error('Error del fetch'));
  }, [fetchMovies, setMovies]);

  return (
    <ThemeProvider theme={theme}>
    <div className='main_container'>
      <h1 className='title_header'>Movies</h1>
      <div className='card_box_container'>
        <ul className='list_block'>
          {movies &&
            movies.map((c, movie) => (
              <li key={movie}>
                <Card className='card_movie'>
                  <CardContent>
                    <Typography className='name' component='p'>
                      <span className='subtitle_movie'>Name:</span> {c.name}
                    </Typography>

                    <Typography className='duration' component='p'>
                      <span className='subtitle_movie'>Duration:</span>
                      {c.runtimeInMinutes} min
                    </Typography>

                    <Typography className='score' component='p'>
                      <span className='subtitle_movie'>Score: </span>
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
    </ThemeProvider>
  );
};
