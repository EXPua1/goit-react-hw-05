import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={100}
            />
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
