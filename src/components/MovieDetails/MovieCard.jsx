import css from "./MovieCard.module.css";
const MovieCard = ({ movie }) => {
  if (!movie) {
    return null; // Можно вернуть любой индикатор загрузки, если movie не загружен
  }
  const movieImage = {
    baseURL: "https://image.tmdb.org/t/p/",
    fileSize: "w500",
    posterPath: movie.poster_path,
  };
  const imageUrl = movieImage.posterPath
    ? `${movieImage.baseURL}${movieImage.fileSize}${movieImage.posterPath}`
    : null;
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "Unknown";

  return (
    <div className={css.card_container}>
      <h1>{movie.title}</h1>
      <div className={css.card}>
        <div>
          <img className={css.image} src={imageUrl} alt={movie.title} />
        </div>
        <div>
          <p>Average rating: {movie.vote_average}</p>
          <p>Country : {movie.origin_country}</p>
          <p>Release date : {releaseYear}</p>
          <p>18+: {movie.adult ? "Only for adult" : "Not for adult"}</p>
          <p>Genre: {movie.genres.map((genre) => genre.name).join(", ")}</p>
          <p>duration: {movie.runtime} min</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
