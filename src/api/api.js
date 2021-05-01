export const API_URL = 'https://swapi.dev/api/people/';

export const getPersonages = () => fetch(API_URL)
  .then((result) => result.json())
  .catch(err => alert(err.message))
