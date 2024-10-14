import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {/* Создаем ссылку для каждого фильма */}
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
