import { MovieItem } from './MoviesItem';

export const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map((el, i) => (
        <MovieItem key={i} movie={el} />
      ))}
    </ul>
  );
};
