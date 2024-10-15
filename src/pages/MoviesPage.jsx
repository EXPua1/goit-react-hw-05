import { useState, useEffect } from "react";
import { Container, SearchBar, Section } from "../components";
import { searchMovieByQuery } from "../movieApi";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // Отримуємо параметр пошуку з URL

  useEffect(() => {
    if (!query) return; // Якщо немає запиту, не робимо запит на фільми

    // Функція для отримання фільмів
    const fetchMovies = async (searchQuery) => {
      try {
        const data = await searchMovieByQuery(searchQuery);
        setMovies(data); // Оновлюємо стан фільмів
      } catch (error) {
        console.error("Помилка завантаження фільмів:", error);
      }
    };

    fetchMovies(query); // Викликаємо функцію для запиту фільмів
  }, [query]);

  // Функція для обробки пошукового запиту з форми
  const handleFormSubmit = (query) => {
    setSearchParams({ query }); // Оновлюємо параметри в URL
  };

  return (
    <Section>
      <Container>
        <SearchBar onSearch={handleFormSubmit} /> {/* Пошукова форма */}
        <MovieList movies={movies} /> {/* Список фільмів */}
      </Container>
    </Section>
  );
};

export default MoviesPage;
