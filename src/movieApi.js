import axios from "axios";

const API_KEY = "b792f8c4c7f299b641f738aeee0c2574"; // Замени на свой ключ
const BASE_URL = "https://api.themoviedb.org/3";
axios.defaults.baseURL = BASE_URL;
export const getTrendingMovies = async (timeWindow = "day") => {
  const { data } = await axios.get(`/trending/movie/${timeWindow}`, {
    params: {
      api_key: API_KEY, // Передаем API-ключ в параметрах запроса
    },
  });
  return data.results; // Возвращаем массив результатов
};

export const findMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY, // Передаем API-ключ в параметрах запроса
    },
  });
  return data; // Возвращаем данные о фильме
};

export const findMovieCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY, // Передаем API-ключ в параметрах запроса
    },
  });
  return data.cast; // Возвращаем массив кастов
};

export const findMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY, // Передаем API-ключ в параметрах запроса
    },
  });
  return data.results; // Возвращаем массив отзывов
};

export const searchMovieByQuery = async (query) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY, // Передаем API-ключ в параметрах запроса
      query,
    },
  });
  return data.results; // Возвращаем массив результатов
};
