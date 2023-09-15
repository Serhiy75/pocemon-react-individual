import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from './Header/Header';
import Cast from './Movies/Cast';
import Reviews from './Movies/Reviews';
// import Home from 'pages/Home';
// import Heroes from 'pages/Heroes';
// import Pocemons from 'pages/Pocemons';
// import Movies from 'pages/Movies';
// import MovieDetailes from 'pages/MovieDetailes';

const Home = lazy(() => import('pages/Home'));
const Heroes = lazy(() => import('pages/Heroes'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetailes = lazy(() => import('pages/MovieDetailes'));
const Pocemons = lazy(() => import('pages/Pocemons'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetailes />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/pocemons" element={<Pocemons />} />
      </Route>
    </Routes>
  );
};
