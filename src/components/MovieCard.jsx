import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data, show }) => {
  let image_path = `https://image.tmdb.org/t/p/w300`;
  const navigate = useNavigate();

  const handleClick = () => {
    !show ? navigate(`/movie/${data?.id}`) : navigate(`/show/${data?.id}`);
  };

  return (
    <div className="flex flex-col gap-3 w-[200px] p-2 shrink-0">
      <div className="relative">
        <img
          onClick={handleClick}
          src={image_path + data?.poster_path}
          className="w-full rounded-md bg-gray-500 cursor-pointer"
          alt=""
        />
        {/* <img
          src={image_path + data?.backdrop_path}
          className="w-full rounded-md bg-gray-500 border "
          alt=""
        /> */}
      </div>

      {/* <div className="text-xs space-y-3 text-justify">
        <p>{data?.title}</p>
        <p>{data?.overview}</p>
      </div> */}
    </div>
  );
};

export default MovieCard;
