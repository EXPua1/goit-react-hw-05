import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Button, Container, Navigation, Section } from "../components";
import { findMovieById } from "../movieApi";
import MovieCard from "../components/MovieDetails/MovieCard";
import MovieNavigation from "../components/MovieDetails/MovieNavigation/MovieNavigation";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || "/movies"); // Если state.from не существует, вернуться на "/movies"

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await findMovieById(movieId);
        setMovie(data);
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
        <Button to={backLink.current}>Go back</Button>
        <div>
          <MovieCard movie={movie} />
          <MovieNavigation movie={movie} />
          <Outlet />
        </div>
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
