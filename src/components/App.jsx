import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Header } from './Header/Header';
import Cast from './Movies/Cast';
import Reviews from './Movies/Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operation';
import { ScrollToTop } from './ScrollToTop/ScrollToTop';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { isRefreshing } from 'redux/auth/selector';

import { useLocalStorage } from 'hooks/useLocalStorage';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const Home = lazy(() => import('pages/Home'));
const Heroes = lazy(() => import('pages/Heroes'));
const Gallery = lazy(() => import('pages/Gallery/Gallery'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetailes = lazy(() => import('pages/Movies/MovieDetailes'));
const Pocemons = lazy(() => import('pages/Pocemons'));
const Register = lazy(() => import('pages/Register/Register'));
const Favorite = lazy(() => import('pages/Favorite/Favorite'));
const Login = lazy(() => import('pages/Login/Login'));
const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));

export const App = () => {
  const [themeColor, setThemeColor] = useLocalStorage('theme', 'light');

  const dispatch = useDispatch();
  const isRefresh = useSelector(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <>
      <ThemeProvider theme={theme[themeColor]}>
        <Routes>
          <Route
            path="/"
            element={<Header setTheme={setThemeColor} theme={themeColor} />}
          >
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={<PublicRoute component={<Register />} redirectTo="/" />}
            />
            <Route
              path="/login"
              element={<PublicRoute component={<Login />} redirectTo="/" />}
            />
            <Route
              path="/heroes"
              element={
                <PrivateRoute component={<Heroes />} redirectTo="/login" />
              }
            />
            <Route
              path="/gallery"
              element={
                <PrivateRoute component={<Gallery />} redirectTo="/login" />
              }
            />
            <Route
              path="/movies"
              element={
                <PrivateRoute component={<Movies />} redirectTo="/login" />
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <PrivateRoute
                  component={<MovieDetailes />}
                  redirectTo="/login"
                />
              }
            >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route
              path="favorite"
              element={
                <PrivateRoute component={<Favorite />} redirectTo="/login" />
              }
            />
            <Route
              path="/pocemons"
              element={
                <PrivateRoute component={<Pocemons />} redirectTo="/login" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Phonebook />} redirectTo="/login" />
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ScrollToTop />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};
