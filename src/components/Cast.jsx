import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesApi';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [creditCast, setCreditCast] = useState('');
  const id = useParams();
  useEffect(() => {
    getMovieCast(id).then(setCreditCast);
  }, [id]);
  return (
    <>
      {creditCast.length === 0 ? (
        <p>No Casts</p>
      ) : (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {creditCast.cast.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : defaultImg
                }
                alt={item.original_name}
                width="150px"
              />
              <p>{item.original_name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
