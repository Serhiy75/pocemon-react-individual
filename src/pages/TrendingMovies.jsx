import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'services/moviesApi';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // if (movies.length) return;
    getTrending().then(data => {
      // console.log(data);
      setMovies(data.results);
    });
  }, []);
  return (
    <>
      <h1>Trending Today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default TrendingMovies;
