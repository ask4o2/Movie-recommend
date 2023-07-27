import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  movie_recommend,
  one_movie,
  select_movie,
  select_movie_recommendations,
} from "../store/appSlice";
import { useParams } from "react-router-dom";
import { image_path } from "../utils/helper";
import { MovieCard } from "../components";
import { AiOutlinePlus } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

const MovieDetails = () => {
  const movie_details = useSelector(select_movie);
  const movie_recommended = useSelector(select_movie_recommendations);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(one_movie(id));
    dispatch(movie_recommend(id));
  }, [id]);

  return (
    <div className="relative">
      {Object.keys(movie_details).length < 1 ? (
        <div className="h-[20vh] flex justify-center pt-8">
          <BeatLoader color="white" />
        </div>
      ) : (
        <div className="relative">
          <div className="w-full tint relative z-5">
            <img
              src={image_path + movie_details?.backdrop_path}
              className="w-full lg:h-[600px] rounded-md"
            />
          </div>

          <div className="z-30 md:w-3/5 lg:w-2/5 text-white absolute top-10 bottom-10 md:left-10 flex flex-col justify-center px-4 my-auto">
            <p className="uppercase mb-4 md:text-3xl font-bold">
              {movie_details?.title}
            </p>

            <p className="text-xs md:text-base line-clamp-3  md:line-clamp-4 lg:line-clamp-5">
              {movie_details?.overview}
            </p>

            <div className="sm:text-sm text-xs my-4 space-y-3 border-l-2 border- pl-3">
              <p>
                Genres:{" "}
                {movie_details?.genres?.map((it, i) => (
                  <span key={i} className="mx-2">
                    {it.name}
                  </span>
                ))}
              </p>

              <p>Release date: {movie_details?.release_date}</p>
            </div>

            <div className="lg:flex hidden items-center gap-5">
              <button className="rounded-full px-4 p-2 text-center border-2 text-xs hover:bg-white hover:text-black">
                Watch trailer
              </button>
              <button className="w-9 h-9 rounded-full grid place-items-center border-2">
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h3 className="">People Also Watched</h3>

        {movie_recommend.length < 1 ? (
          <div className="h-50vh flex justify center"></div>
        ) : (
          <div className="grid grid-cols-2 md:flex flex-wrap">
            {movie_recommended?.slice(0, 5).map((it, i) => (
              <MovieCard key={it.id} data={it} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
