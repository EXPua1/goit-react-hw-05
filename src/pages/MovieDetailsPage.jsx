import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Navigation, Section } from "../components";
import { findMovieById } from "../movieApi";
import MovieCard from "../components/MovieDetails/MovieCard";
import MovieNavigation from "../components/MovieDetails/MovieNavigation/MovieNavigation";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); // Инициализация состояния для хранения данных о фильме

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await findMovieById(movieId);
        setMovie(data); // Сохраняем данные о фильме

        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <Section>
      <Container>
        <Navigation />
        <div>
          <MovieCard movie={movie} />
          <MovieNavigation movie={movie} />
          <Outlet /> {/* Для вложенных маршрутов */}
        </div>
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
