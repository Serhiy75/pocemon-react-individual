import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieReviews(id).then(reviews => {
      setReviews(reviews.results);
    });
  }, [id]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>No Reviews</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
