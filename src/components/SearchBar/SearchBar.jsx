import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Импортируем необходимые хуки
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.topic.value.trim();
    onSearch(query);
    if (query) {
      // Обновляем URL с параметром запроса
      navigate(`?query=${encodeURIComponent(query)}`, { replace: true }); // Используйте replace, чтобы не добавлять новый элемент в историю
      event.target.reset(); // Очищаем поле ввода
    } else {
      alert("Please enter a movie name.");
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="topic"
          placeholder="Movie name search..."
          required
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
