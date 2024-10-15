import { useState, useEffect } from "react";
import { Container, Navigation, SearchBar, Section } from "../components";
import { searchMovieByQuery } from "../movieApi";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // Отримуємо параметр пошуку із URL

  useEffect(() => {
    // Якщо є пошуковий запит, завантажуємо фільми
    if (query) {
      const savedMovies = localStorage.getItem("movies");

      if (savedMovies) {
        const parsedMovies = JSON.parse(savedMovies);
        // Якщо збережений запит збігається з поточним, використовуємо локальні дані
        if (parsedMovies.query === query) {
          setMovies(parsedMovies.results);
        } else {
          fetchMovies(query); // Інакше викликаємо новий запит
        }
      } else {
        fetchMovies(query); // Якщо фільмів немає в localStorage, робимо запит
      }
    }
  }, [query]);

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return;
    try {
      const data = await searchMovieByQuery(searchQuery);
      setMovies(data);
      localStorage.setItem(
        "movies",
        JSON.stringify({ query: searchQuery, results: data })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (query) => {
    setSearchParams({ query }); // Оновлюємо параметри в URL
  };

  return (
    <Section>
      <Container>
        <Navigation />
        <SearchBar onSearch={handleFormSubmit} />
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default MoviesPage;
