import React from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  // Переименование пропа
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.topic.value.trim(); // Удаляем пробелы
    if (query) {
      onSearch(query); // Вызываем функцию обновления запроса
      event.target.reset(); // Очищаем поле ввода
    } else {
      alert("Please enter a movie name."); // Уведомление при пустом запросе
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
          required // Добавление обязательного поля
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
