import React, { useState, useEffect } from 'react';
import './Characters.css';
import { ToastContainer, toast } from 'react-toastify';
import { lotrApi } from '../api/lotrApi';
import { Character } from '../components/Character';
import { Pagination, TextField } from '@mui/material';
import { useDebounce } from 'react-use';

export const Characters = () => {
  const characterPageSize = 12;
  const { fetchCharacters } = lotrApi;
  const [name, setName] = useState('');
  const [debouncedName, setDebouncedName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  useDebounce(() => setDebouncedName(name), 2000, [name]);
  useEffect(() => {
    fetchCharacters(debouncedName, {
      page: page,
      limit: characterPageSize,
      pages: pages,
    })
      .then((characterInfo) => {
        setCharacters(characterInfo.characters);
        setPages(characterInfo.pagination.pages);
      })
      .catch(() => toast.error('Error del fetch'));
  }, [fetchCharacters, setCharacters, debouncedName, page, pages]);

  const handleChange = (event, page) => {
    setPage(page);
  };
  return (
    <div className='main_container_character'>
      <h1 className='title_header_character'>Characters</h1>
      <div className='card_box_container'>
        <div className='filters'>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <ul className='list_block'>
          {characters &&
            characters.map((character, characterIndex) => (
              <li key={characterIndex}>
                <a href={`/quotes/${character._id}`}>
                  <Character character={character} />
                </a>
              </li>
            ))}
        </ul>
        <Pagination
          count={characterPageSize}
          page={page}
          onChange={handleChange}
        />
      </div>
      <ToastContainer />
    </div>
  );
};