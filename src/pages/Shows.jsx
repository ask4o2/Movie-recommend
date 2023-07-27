import React, { useEffect } from "react";
import {
  get_all_movies,
  movie_genres,
  select_movie_genre,
  select_movies,
  select_shows,
  tv_shows,
} from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { FilterGenre, MovieCard } from "../components";
import { AiFillCloseCircle, AiFillCaretDown } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

const Shows = () => {
  const dispatch = useDispatch();
  const movies = useSelector(select_movies);
  const shows = useSelector(select_shows);
  const movie_genre = useSelector(select_movie_genre);
  const fav_movie_genres =
    JSON.parse(localStorage.getItem("movie_genres")) || [];

  let genre_ids =
    fav_movie_genres.length > 0
      ? fav_movie_genres.map((it) => it.id).join()
      : "";

  useEffect(() => {
    dispatch(tv_shows());
  }, []);

  return (
    <>
      <div className="my-4">
        <h3>Discover Trending Tv Shows</h3>
      </div>
      {!movies || movies.length < 1 ? (
        <div className="h-[90vh] flex pt-16 justify-center">
          <BeatLoader color="white" />
        </div>
      ) : (
        <div className="grid xl:grid-cols-7 lg:grid-cols-5 grid-cols-2 sm:grid-cols-3">
          {shows?.map((it, i) => (
            <MovieCard show key={i} data={it} />
          ))}
        </div>
      )}
    </>
  );
};

export default Shows;
