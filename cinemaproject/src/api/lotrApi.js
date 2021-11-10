import { appConfig } from "../appConfig";

const { BEARER_TOKEN, BASE_URL } = appConfig;

export const lotrApi = {
  fetchCharacters: async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    return fetch(`${BASE_URL}/character?race=Hobbit&death>0`, options)
      .then((r) => r.json())
      .then((m) => m.docs);
  },
  
  fetchMovies: async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    return fetch(`${BASE_URL}/movie`, options)
      .then((r) => r.json())
      .then((m) => m.docs);
  },
};
