// MovieNavigation.jsx
import { Link } from "react-router-dom";
import css from "./MovieNavigation.module.css";

const MovieNavigation = ({ movie }) => {
  return (
    <nav className={css.nav}>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </nav>
  );
};

export default MovieNavigation;
