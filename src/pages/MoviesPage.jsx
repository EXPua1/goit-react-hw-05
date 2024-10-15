import { useState, useEffect } from "react";
import { Container, Navigation, SearchBar, Section } from "../components";
import { searchMovieByQuery } from "../movieApi";
import MovieList from "../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Проверяем, есть ли переданный запрос из URL
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    if (searchQuery) {
      setQuery(searchQuery);
      // Проверяем наличие сохраненных фильмов
      const savedMovies = localStorage.getItem("movies");
      if (savedMovies) {
        const parsedMovies = JSON.parse(savedMovies);
        // Проверяем, соответствует ли сохраненный запрос текущему
        if (parsedMovies.query === searchQuery) {
          setMovies(parsedMovies.results); // Загружаем фильмы из localStorage
        } else {
          fetchMovies(searchQuery); // Если запрос другой, выполняем новый запрос
        }
      } else {
        fetchMovies(searchQuery); // Если фильмов нет в localStorage, выполняем запрос
      }
    }
  }, [location.search]);

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return;
    try {
      const data = await searchMovieByQuery(searchQuery);
      setMovies(data);
      // Сохраняем результаты в localStorage с текущим запросом
      localStorage.setItem(
        "movies",
        JSON.stringify({ query: searchQuery, results: data })
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (query) => {
    setQuery(query);
    fetchMovies(query);
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
