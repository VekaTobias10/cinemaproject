import { appConfig } from '../appConfig';

const { BEARER_TOKEN, BASE_URL } = appConfig;

export const lotrApi = {
  fetchCharacters: async (name, pagination) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    return fetch(
      `${BASE_URL}/character?limit=20&page=${pagination.page}&name=${pagination.name}`,
      options
    )
      .then((r) => r.json())
      .then((m) => {
        return {
          characters: m.docs,
          pagination: {
            limit: m.limit,
            page: m.page,
            pages: m.pages,
          },
        };
      });
  },

  fetchMovies: async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    return fetch(`${BASE_URL}/movie`, options)
      .then((r) => r.json())
      .then((m) => m.docs);
  },

  fetchQuotes: async (characterId) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    };

    return fetch(`${BASE_URL}/character/${characterId}/quote`, options)
      .then((r) => r.json())
      .then((q) => q.docs);
  },
};
