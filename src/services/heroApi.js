import axios from 'axios';

export function getHero() {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';
  const END_POINT = 'heroes';
  // const PARAMS = new URLSearchParams({ hero: hero });
  const url = BASE_URL + END_POINT;
  return axios
    .get(url, {
      headers: {
        'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
      },
    })

    .then(res => res.data);
}

// import axios from 'axios';

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
