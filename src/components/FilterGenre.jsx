import React, { useState } from "react";
import { useSelector } from "react-redux";
import { select_movie_genre } from "../store/appSlice";
import { AiFillCaretDown } from "react-icons/ai";

const FilterGenre = () => {
  const [dropdown, set_dropdown] = useState(false);

  const fav_movie_genres =
    JSON.parse(localStorage.getItem("movie_genres")) || [];

  const movie_genre = useSelector(select_movie_genre);

  const handleClick = (data) => {
    set_dropdown(false);

    let genreExist = !!fav_movie_genres.filter((it) => it.name === data.name)
      .length;

    genreExist ? null : fav_movie_genres.push(data);

    localStorage.setItem("movie_genres", JSON.stringify(fav_movie_genres));
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-3 relative">
      <div
        onClick={() => set_dropdown(!dropdown)}
        className="flex items-center gap-2  cursor"
      >
        <span> Select Your Favourite Category</span>
        <AiFillCaretDown />
      </div>

      {dropdown && (
        <div className=" grid absolute mt-8 z-30 text-xs gap-3 p-3 w-fit grid-cols-3 rounded-md bg-gray-700">
          {movie_genre?.map((it, i) => (
            <p onClick={() => handleClick(it)} className="cursor" key={it.id}>
              {it.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGenre;
