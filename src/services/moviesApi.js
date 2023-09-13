import axios from 'axios';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

const axios2 = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: API_KEY },
});

export function getTrending() {
  return axios2.get('/trending/movie/day').then(res => res.data);
}

export function searchMovies(query) {
  return axios2
    .get('/search/movie', { params: { query } })
    .then(res => res.data);
}

export function getMovieDetails(id) {
  return axios2.get(`/movie/${id}`).then(res => res.data);
}

export function getMovieCast(id) {
  return axios2.get(`/movie/${id}/credits`).then(res => res.data);
}

export function getMovieReviews(id) {
  return axios2.get(`/movie/${id}/reviews`).then(res => res.data);
}
