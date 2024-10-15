import React from "react";
import { Link, useLocation } from "react-router-dom"; // Импортируем Link
import css from "./MovieList.module.css";
import defImg from "../../../public/image/defImg.jpg";

const MovieList = ({ movies }) => {
  const location = useLocation(); // Получаем текущую локацию

  return (
    <div>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            {/* Оборачиваем изображение в Link */}
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defImg
                }
                alt={movie.title}
                width={100}
              />
              {/* Выводим заголовок фильма под изображением, если нужно */}
              <span>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
