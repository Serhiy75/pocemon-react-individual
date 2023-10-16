import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/Movies/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesApi';
import { BeginSearch } from 'components/BeginSearch/BeginSearch';
import errorImage from 'images/businessman-with-magnifying-glass-white-background.jpg';
import { NotFound } from 'components/NotFound/NotFound';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(data => {
      if (data.results.length === 0) {
        setIsEmpty(true);
        return;
      }
      setMovies(data.results);
    });
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });
    setIsEmpty(false);
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {!query && <BeginSearch image={errorImage} />}
      {isEmpty && (
        <NotFound title={' Nothing find!Please enter a valid query! 🤦‍♂️  '} />
      )}
      <MoviesList movies={movies} />
    </>
  );
};

export default SearchMovies;
