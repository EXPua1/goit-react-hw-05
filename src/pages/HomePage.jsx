import { useEffect, useState } from "react";
import { getTrendingMovies } from "../movieApi";
import MovieList from "../components/MovieList/MovieList";
import { Container, Navigation, Section } from "../components";

const HomePage = () => {
  const [movies, setMovies] = useState([]); // Инициализация как пустой массив

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []); // Запускаем функцию по монтированию

  return (
    <Section>
      <Container>
        <Navigation />
        <h1>Trending today</h1>
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default HomePage;
