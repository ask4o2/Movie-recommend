import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  one_show,
  select_show,
  select_shows_trending,
  trending_shows,
} from "../store/appSlice";
import { MovieCard, ShowCard } from "../components";
import { image_path } from "../utils/helper";
import { BeatLoader } from "react-spinners";
import { AiOutlinePlus } from "react-icons/ai";

const ShowDetails = ({ data }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const show = useSelector(select_show);
  const shows_trending = useSelector(select_shows_trending);

  useEffect(() => {
    dispatch(one_show(id));
    dispatch(trending_shows());
  }, [id]);

  return (
    <div className="relative">
      {Object.keys(show).length < 1 ? (
        <div className="h-[20vh] flex justify-center pt-8">
          <BeatLoader color="white" />
        </div>
      ) : (
        <div className="relative">
          <div className="w-full tint relative z-5">
            <img
              src={image_path + show?.backdrop_path}
              className="w-full lg:h-[600px] rounded-md"
            />
          </div>

          <div className="z-30 md:w-3/5 lg:w-2/5 text-white absolute top-10 bottom-10 md:left-10 flex flex-col justify-center px-4 my-auto">
            <p className="uppercase mb-4 md:text-3xl font-bold">{show?.name}</p>

            <p className="text-xs md:text-base line-clamp-3  md:line-clamp-4 lg:line-clamp-5">
              {show?.overview}
            </p>

            <div className="sm:text-sm text-xs my-4 space-y-1 border-l-2 border- pl-3">
              <p>
                Genres:{" "}
                {show?.genres?.map((it, i) => (
                  <span key={i} className="mx-2">
                    {it.name}
                  </span>
                ))}
              </p>

              {/* <p>First Release: {show?.first_air_date}</p> */}
              <p>Seasons: {show?.number_of_seasons}</p>
              <p>No of episodes: {show?.number_of_episodes}</p>
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
        <h3 className="">Trending Today</h3>

        {shows_trending.length < 1 ? (
          <div className="h-50vh flex justify center"></div>
        ) : (
          <div className="grid grid-cols-2 md:flex flex-wrap">
            {shows_trending?.slice(0, 5).map((it, i) => (
              <MovieCard show key={it.id} data={it} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;
