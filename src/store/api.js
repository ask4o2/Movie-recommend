import axios from "axios";

export const tmdb_api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    accept: "application/json",
  },
});

export const search_movies = async (query, page = 1) => {
  const res = await tmdb_api.get(`search/movie?query=${query}&page=${page}`);

  return res.data;
};

export const get_one_movie = async (movie_id) => {
  const res = await tmdb_api.get(`movie/${movie_id}`);

  return res.data;
};

export const discover_movies = async (genres = "") => {
  const res = await tmdb_api.get(`discover/movie`, {
    params: {
      with_genres: `${genres}`,
    },
  });

  return res.data;
};

export const discover_tv_shows = async () => {
  const res = await tmdb_api.get(`discover/tv`);

  return res.data;
};

export const get_one_show = async (show_id) => {
  const res = await tmdb_api.get(`tv/${show_id}`);

  return res.data;
};

export const get_top_rated_movies = async () => {
  const res = await tmdb_api.get(`movie/top_rated`);
  return res.data;
};

export const get_movie_genres = async () => {
  const res = await tmdb_api.get(`genre/movie/list`);

  return res.data;
};

export const get_movie_recommend = async (movie_id) => {
  const res = await tmdb_api.get(`movie/${movie_id}/recommendations`);

  return res.data;
};

export const get_show_genres = async () => {
  const res = await tmdb_api.get(`genre/tv/list`);

  return res.data;
};

export const get_trending_shows = async () => {
  const res = await tmdb_api.get(`trending/tv/day`);

  return res.data;
};
