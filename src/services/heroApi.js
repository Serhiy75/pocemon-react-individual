import axios from 'axios';

export async function getHero(page) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';
  const END_POINT = 'heroes?';
  const PARAMS = new URLSearchParams({ page });
  const url = BASE_URL + END_POINT + PARAMS;
  return axios
    .get(url, {
      headers: {
        'X-RapidAPI-Key': 'a83342e2c2mshe07c3ac492c25eap166eecjsn232a9f9ebf48',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
      },
    })

    .then(res => res.data);
}

// const options = {
//   method: 'GET',
//   url: 'https://superhero-search.p.rapidapi.com/api/',
//   params: { hero: 'Spiderman' },
//   headers: {
//     'X-RapidAPI-Key': 'a83342e2c2mshe07c3ac492c25eap166eecjsn232a9f9ebf48',
//     'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://superhero-search.p.rapidapi.com/api/heroes',
//   headers: {
//     'X-RapidAPI-Key': 'a83342e2c2mshe07c3ac492c25eap166eecjsn232a9f9ebf48',
//     'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
