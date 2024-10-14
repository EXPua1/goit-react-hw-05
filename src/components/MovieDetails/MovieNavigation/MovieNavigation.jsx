// MovieNavigation.jsx
import { Link } from "react-router-dom";

const MovieNavigation = ({ movie }) => {
  return (
    <nav>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </nav>
  );
};

export default MovieNavigation;
