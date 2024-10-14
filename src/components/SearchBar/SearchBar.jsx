import React from "react";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={css.form}>
      <input
        className={css.input}
        type="text"
        name="topic"
        placeholder="Поиск картинок..."
      />
      <button className={css.btn} type="submit">
        Поиск
      </button>
    </form>
  );
};

export default SearchBar;
