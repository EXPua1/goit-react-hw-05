// CastList.jsx
import React from "react";
import css from "./CastList.module.css";
import defImg from "../../../../public/image/defImg.jpg";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500"; // Базовый URL для изображений
const DEFAULT_IMAGE = "https://via.placeholder.com/100"; // Значение по умолчанию для изображений

const CastList = ({ cast }) => {
  return (
    <ul className={css.list}>
      {cast.map((actor) => (
        <li className={css.item} key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `${BASE_IMAGE_URL}${actor.profile_path}` // Генерируем URL для изображения
                : DEFAULT_IMAGE // Используем изображение по умолчанию, если его нет
            }
            alt={actor.name}
            width={100} // Укажите желаемую ширину изображения
          />
          <p>
            {actor.name} as {actor.character}
          </p>{" "}
          {/* Имя и роль актера */}
        </li>
      ))}
    </ul>
  );
};

export default CastList;
