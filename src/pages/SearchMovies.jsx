import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/Movies/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesApi';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    searchMovies(query).then(data => {
      setMovies(data.results);
    });
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default SearchMovies;
