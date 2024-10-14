import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Получаем ID фильма

  return (
    <div>
      <h1>Movie Details for ID: {movieId}</h1>
      {/* Здесь может быть информация о фильме */}
      {/* Ссылки для навигации */}
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet /> {/* Вставляем вложенные маршруты (cast и reviews) */}
    </div>
  );
};

export default MovieDetailsPage;
