import axios from 'axios';

export function getPokemons() {
  const BASE_URL = 'https://pokeapi.co/api/v2/';
  const END_POINT = 'pokemon?';
  const params = new URLSearchParams({
    limit: 21,
    offset: 0,
  });
  const url = BASE_URL + END_POINT + params;
  return axios
    .get(url)
    .then(res => res.data) //масив посилань на покемонів
    .then(({ results }) => {
      const promises = results.map(el => axios.get(el.url)); //отримуєм масив промісів запитів
      return Promise.all(promises); //повертаєм проміс з масивом результатів
    })
    .then(res => {
      return res.map(pok => pok.data); //повертаєм після мапа дата(покемон)
    });
}
export function getUrlPokemons(url) {
  return axios.get(url).then(res => res.data);
}
