import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

const API_KEY = '34743659-466169dfa54ca6e44e629ca0f';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(
    `/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
}

// const url = `https://pixabay.com/api/`;

// const instance = axios.create({
//   baseURL: url,
//   params: {
//     key: '34743659-466169dfa54ca6e44e629ca0f',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//   },
// });

// export const fetchImages = async (query, page = 1) => {
//   const { data } = await instance.get('/', {
//     params: {
//       q: query,
//       page,
//     },
//   });
//   return data;
// };
