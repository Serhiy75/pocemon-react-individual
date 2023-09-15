import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesApi';
import css from '../pages/MovieDetailes.module.css';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetailes = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  if (!movie) return;

  return (
    <div className={css.moviesearch}>
      <Link to={backLink.current} className={css.back}>
        Go Back
      </Link>
      <hr />
      <div className={css.title}>
        <img
          className={css.img}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          width="300px"
        />
        <div className={css.paragraf}>
          <h2>{movie.title}</h2>
          <p>Overview: {movie.overview}</p>
          <p>Genres: {movie.genres.map(el => el.name).join(',')}</p>
          <p>
            Production companies :{' '}
            {movie.production_companies.map(el => el.name).join(',')}
          </p>
          <p>
            Production countries:{' '}
            {movie.production_countries.map(el => el.name).join(',')}
          </p>
          <p>Popularity: {movie.popularity}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      </div>

      <ul>
        <hr />
        <h4>Additional Information</h4>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <hr />
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailes;
// genres:([{obj} {obj} {obj}]);
// original_title;overview;title;poster_path;popularity
