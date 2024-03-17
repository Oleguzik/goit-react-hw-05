import axios from "axios";

const LANGUAGE = "en-US";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjZhN2FmMjZhOTQ2YzliNjIxMjIyYjkyZmU4NTZmNiIsInN1YiI6IjY1ZThlNzMyMzg5ZGExMDE4MGQ1YjUyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KT1XY5_G0CTG6aSvWef-b3Rl6rVAocmS5k2KHaKHNM4";

const PATH_IMG = "https://image.tmdb.org/t/p/w500";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

const sourceAPI = {
  posterImagePath: PATH_IMG,

  getTrendingMovies: async function (timeWindow = "day", language = "") {
    const response = await axios.get(`/3/trending/movie/${timeWindow}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data.results;
  },

  getMovieDetails: async function (id, language = "") {
    const response = await axios.get(`/3/movie/${id}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieReviews: async function (id, language = "") {
    const response = await axios.get(`/3/movie/${id}/reviews`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieCast: async function (id, language = "") {
    const response = await axios.get(`/3/movie/${id}/credits`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMoviesByQuery: async function (query, language = "") {
    const response = await axios.get(`/3/search/movie`, {
      params: { query, language: language || LANGUAGE, include_adult: false },
    });
    return response.data.results;
  },
};

export default sourceAPI;
