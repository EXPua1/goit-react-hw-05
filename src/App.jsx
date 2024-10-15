import { React, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, LoadingPage, Navigation, Section } from "./components";

// Объект для ленивой загрузки компонентов
const LazyComponents = {
  HomePage: lazy(() => import("./pages/HomePage")),
  MoviesPage: lazy(() => import("./pages/MoviesPage")),
  MovieDetailsPage: lazy(() => import("./pages/MovieDetailsPage")),
  MovieCast: lazy(() => import("./components/MovieCast/MovieCast")),
  MovieReviews: lazy(() => import("./components/MovieReviews/MovieReviews")),
  NotFoundPage: lazy(() => import("./pages/NotFoundPage")),
};

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Section>
        <Container>
          <Navigation />
        </Container>
      </Section>

      <Routes>
        <Route path="/" element={<LazyComponents.HomePage />} />
        <Route path="/movies" element={<LazyComponents.MoviesPage />} />
        <Route
          path="/movies/:movieId"
          element={<LazyComponents.MovieDetailsPage />}
        >
          <Route path="cast" element={<LazyComponents.MovieCast />} />
          <Route path="reviews" element={<LazyComponents.MovieReviews />} />
        </Route>
        <Route path="*" element={<LazyComponents.NotFoundPage />} />{" "}
        {/* Для 404 */}
      </Routes>
    </Suspense>
  );
};

export default App;
