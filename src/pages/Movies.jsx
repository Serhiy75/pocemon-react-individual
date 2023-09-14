import { MoviesList } from 'components/MoviesList';
import { SearchMovie } from 'components/SearchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) return;
    searchMovies(query).then(data => {
      setMovies(data.results);
    });
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearchMovie onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
