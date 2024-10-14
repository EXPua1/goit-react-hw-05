import { useState, useEffect } from "react";

import { Container, Navigation, SearchBar, Section } from "../components";
import { searchMovieByQuery } from "../movieApi";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      try {
        const data = await searchMovieByQuery(query);

        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);

  const handleFormSubmit = (query) => {
    setQuery(query);
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
