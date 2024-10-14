import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findMovieCast } from "../../movieApi"; // Импорт новой функции
import CastList from "./CastList/CastList";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500"; // Базовый URL для изображений

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]); // Состояние для хранения кастов

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await findMovieCast(movieId); // Получаем данные о касте
        setCast(castData); // Сохраняем массив актеров в состояние
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    if (movieId) {
      fetchCast(); // Вызываем функцию для получения кастов
    }
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <CastList cast={cast} />
    </div>
  );
};

export default MovieCast;
