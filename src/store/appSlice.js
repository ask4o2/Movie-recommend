import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  discover_movies,
  discover_tv_shows,
  get_movie_genres,
  get_movie_recommend,
  get_one_movie,
  get_one_show,
  get_show_genres,
  get_trending_shows,
} from "./api";

const initialState = {
  movies: [],
  movie: {},
  movie_genre: [],
  movie_genre_liked: [],
  movie_recommendations: [],
  shows: [],
  shows_trending: [],
  show: [],
  show_genre: [],
  show_genre_liked: [],
  error: {},
  loading: false,
};

// async thunks
export const get_all_movies = createAsyncThunk(
  "movies/discover",
  async (genres, thunkAPI) => {
    const res = await discover_movies(genres);

    return res;
  }
);

export const tv_shows = createAsyncThunk("shows/discover", async () => {
  const res = await discover_tv_shows();

  return res;
});

export const one_show = createAsyncThunk(
  "shows/one",
  async (show_id, thunkAPI) => {
    const res = await get_one_show(show_id);

    return res;
  }
);

export const trending_shows = createAsyncThunk("shows/trending", async () => {
  const res = await get_trending_shows();
  return res;
});

export const one_movie = createAsyncThunk(
  "movies/get_one",
  async (movie_id, thunkAPI) => {
    const res = await get_one_movie(movie_id);

    return res;
  }
);

export const movie_recommend = createAsyncThunk(
  "movies/recommend",
  async (movie_id, thunkAPI) => {
    const res = await get_movie_recommend(movie_id);

    return res;
  }
);

export const movie_genres = createAsyncThunk("movies/genre", async () => {
  const res = await get_movie_genres();

  return res;
});

export const show_genres = createAsyncThunk("tv/genre", async () => {
  const res = await get_show_genres();

  return res;
});

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    set_user: (state, action) => {
      state.value = action.payload;
    },
    set_movie_genre_liked: (state, action) => {
      state.movie_genre_liked.push(action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_all_movies.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(get_all_movies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.loading = false;
    });

    builder.addCase(get_all_movies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(one_movie.pending, (state, action) => {
      state.movie = {};
      state.loading = true;
    });

    builder.addCase(one_movie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(one_movie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    });

    builder.addCase(tv_shows.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(tv_shows.rejected, (state, action) => {
      state.loading = false;
      state.error.shows = action.error.message;
    });

    builder.addCase(tv_shows.fulfilled, (state, action) => {
      state.shows = action.payload.results;
      state.loading = false;
    });

    builder.addCase(one_show.pending, (state, action) => {
      state.show = {};
      state.loading = true;
    });

    builder.addCase(one_show.rejected, (state, action) => {
      state.show = {};
      state.loading = false;
      state.error.show = action.error.message;
    });

    builder.addCase(one_show.fulfilled, (state, action) => {
      state.show = action.payload;
      state.loading = false;
    });

    // trending shows
    builder.addCase(trending_shows.fulfilled, (state, action) => {
      state.shows_trending = action.payload.results;
      state.loading = false;
    });

    // movie genres
    builder.addCase(movie_genres.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(movie_genres.rejected, (state, action) => {
      state.loading = false;
      state.error.movie_genre = action.error.message;
    });

    builder.addCase(movie_genres.fulfilled, (state, action) => {
      state.loading = false;
      state.movie_genre = action.payload.genres;
    });

    // movie recommend
    builder.addCase(movie_recommend.fulfilled, (state, action) => {
      state.movie_recommendations = action.payload.results;
    });

    builder.addCase(movie_recommend.rejected, (state, action) => {
      state.error.movie_recommendations = action.error.message;
    });

    // show genres
    builder.addCase(show_genres.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(show_genres.rejected, (state, action) => {
      state.loading = false;
      state.error.show_genre = action.error.message;
    });

    builder.addCase(show_genres.fulfilled, (state, action) => {
      state.loading = false;
      state.show_genre = action.payload.genres;
    });
  },
});

export const { set_user } = appSlice.actions;
export const select_movies = (state) => state.app.movies;
export const select_movie = (state) => state.app.movie;
export const select_movie_genre = (state) => state.app.movie_genre;
export const select_movie_recommendations = (state) =>
  state.app.movie_recommendations;

export const select_shows = (state) => state.app.shows;
export const select_show = (state) => state.app.show;
export const select_show_genre = (state) => state.app.show_genre;
export const select_shows_trending = (state) => state.app.shows_trending;

export default appSlice.reducer;
