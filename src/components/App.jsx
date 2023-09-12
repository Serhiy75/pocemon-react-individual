import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import Home from 'pages/Home';
import Heroes from 'pages/Heroes';
import Pocemons from 'pages/Pocemons';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/pocemons" element={<Pocemons />} />
      </Route>
    </Routes>
  );
};
