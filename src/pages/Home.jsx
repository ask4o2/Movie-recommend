import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_all_movies,
  select_movies,
  select_shows,
  tv_shows,
} from "../store/appSlice";
import { MovieCard } from "../components";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(select_movies);
  const shows = useSelector(select_shows);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(get_all_movies());
    dispatch(tv_shows());
  }, []);

  if (!movies || movies.length < 1) {
    return (
      <div className="container mx-auto h-[90vh] flex pt-16 justify-center">
        <BeatLoader color="white" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="w-full">
        <h2>Trending Movies</h2>
        <div className="flex overflow-x-scroll mt-4 scrollbar-horizontal">
          {movies?.map((it, i) => (
            <MovieCard data={it} key={i} />
          ))}
        </div>

        <h2 className="mb-4 mt-8">Discover TV Shows</h2>
        <div className="flex overflow-x-scroll scrollbar-horizontal">
          {shows?.map((it, i) => (
            <MovieCard show data={it} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
