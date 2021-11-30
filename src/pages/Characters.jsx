import React, { useState, useEffect } from "react";
import "./Characters.css";
import { ToastContainer, toast } from "react-toastify";
import { lotrApi } from "../api/lotrApi";
import { CharacterCard } from "../components/Character";
import { Pagination, TextField } from "@mui/material";
import { useDebounce } from "react-use";
import { usePagination } from "../hooks/usePagination";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#FFD778",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFD778",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E1F5F7",
    },
    "&:hover fieldset": {
      borderColor: "#FFD778",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFD778",
    },
  },
});

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiButtonBase : {
      styleOverrides: {
        root: {
          backgroundColor: "#E1F5F7",
        },
      }
    },
  },
});

export const Characters = () => {
  const characterPageSize = 12;
  const { fetchCharacters } = lotrApi;
  const [name, setName] = useState("");
  const [debouncedName, setDebouncedName] = useState("");
  const [characters, setCharacters] = useState([]);
  const { page, pages, setPage, setPageCount } = usePagination();

  useDebounce(
    () => {
      if (name !== debouncedName) {
        setPage(1);
      }
      setDebouncedName(name);
    },
    1000,
    [name]
  );

  useEffect(() => {
    fetchCharacters(debouncedName, {
      page: page,
      limit: characterPageSize,
    })
      .then((characterInfo) => {
        setCharacters(characterInfo.characters);
        setPageCount(characterInfo.pagination.pages);
      })
      .catch(() => toast.error("Error del fetch"));
  }, [fetchCharacters, setCharacters, debouncedName, page, setPageCount]);

  const handleChange = (event, page) => {
    setPage(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main_container_character">
        <h1 className="title_header_character">Characters</h1>
        <div className="card_box_container">
          <div className="filters">
            <CssTextField
              id="outlined-basic"
              label="Filter by name..."
              variant="outlined"
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
          <ul className="list_block">
            {characters &&
              characters.map((character, characterIndex) => (
                <li key={characterIndex}>
                  <a href={`/quotes/${character._id}`} className="linkToQuotes">
                    <CharacterCard character={character} />
                  </a>
                </li>
              ))}
          </ul>
          <Pagination
            count={pages}
            color="secondary"
            page={page}
            onChange={handleChange}
            className="pagination_style"
          />
        </div>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
};
