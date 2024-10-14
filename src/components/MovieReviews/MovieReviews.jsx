import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findMovieReviews } from "../../movieApi";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await findMovieReviews(movieId);
        setReviews(reviewsData);
        console.log(reviewsData);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? ( // Проверка наличия рецензий
        reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p> // Сообщение, если рецензий нет
      )}
    </div>
  );
};

export default MovieReviews;
