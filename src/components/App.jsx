import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Header } from './Header/Header';
import Cast from './Movies/Cast';
import Reviews from './Movies/Reviews';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operation';

const Home = lazy(() => import('pages/Home'));
const Heroes = lazy(() => import('pages/Heroes'));
const Gallery = lazy(() => import('pages/Gallery/Gallery'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetailes = lazy(() => import('pages/MovieDetailes'));
const Pocemons = lazy(() => import('pages/Pocemons'));
const Register = lazy(() => import('pages/Register/Register'));
const Favorite = lazy(() => import('pages/Favorite/Favorite'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailes />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="favorite" element={<Favorite />} />
          <Route path="/pocemons" element={<Pocemons />} />
        </Route>
      </Routes>
    </>
  );
};
