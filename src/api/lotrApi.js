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

    const nameFilter = name && `&name=/${name}/i`;
    return fetch(
      `${BASE_URL}/character?page=${pagination.page}&limit=${pagination.limit}${nameFilter}`,
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
