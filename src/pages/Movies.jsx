import React, { useEffect } from "react";
import {
  get_all_movies,
  movie_genres,
  select_movie_genre,
  select_movies,
} from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { FilterGenre, MovieCard } from "../components";
import { AiFillCloseCircle, AiFillCaretDown } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(select_movies);
  const movie_genre = useSelector(select_movie_genre);
  const fav_movie_genres =
    JSON.parse(localStorage.getItem("movie_genres")) || [];

  let genre_ids =
    fav_movie_genres.length > 0
      ? fav_movie_genres.map((it) => it.id).join()
      : "";

  useEffect(() => {
    dispatch(get_all_movies(genre_ids));
    dispatch(movie_genres());
  }, []);

  const Tags = ({ text, id }) => {
    const handleRemoveTag = () => {
      const newArr = fav_movie_genres.filter((it) => it.id !== id);

      localStorage.setItem("movie_genres", JSON.stringify(newArr));

      window.location.reload();
    };

    return (
      <div
        onClick={handleRemoveTag}
        className="p-2 text-xs rounded-lg px-4 cursor  border flex items-center gap-3"
      >
        <span>{text}</span>
        <span className="text-gray-500" onClick={() => {}}>
          <AiFillCloseCircle />
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="my-4">
        <FilterGenre />

        <div className="flex  mt-5 flex-wrap gap-2">
          {fav_movie_genres?.map((it) => (
            <Tags key={it.id} text={it.name} id={it.id} />
          ))}
        </div>
      </div>

      {!movies || movies.length < 1 ? (
        <div className="h-[90vh] flex pt-16 justify-center">
          <BeatLoader color="white" />
        </div>
      ) : (
        <div className="grid xl:grid-cols-7 lg:grid-cols-5 grid-cols-2 sm:grid-cols-3">
          {movies?.map((it, i) => (
            <MovieCard key={i} data={it} />
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
