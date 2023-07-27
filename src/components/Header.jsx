import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  const activeStyle = `text-blue-300 font-bold`;

  return (
    <div className="py-4 bg-[#18171f] sticky top-0 z-50">
      <header className=" flex  items-center text-xs md:text-sm justify-between container px-3 mx-auto">
        <div className="flex gap-4">
          <p
            onClick={() => navigate("/")}
            className={`cursor ${pathname === "/" && activeStyle}`}
          >
            Home
          </p>

          <p
            onClick={() => navigate("/shows")}
            className={`cursor ${pathname.includes("/show") && activeStyle}`}
          >
            Tv Shows
          </p>
          <p
            onClick={() => navigate("/movies")}
            className={`cursor ${pathname.includes("/movie") && activeStyle}`}
          >
            Movies
          </p>

          <p className="cursor">Favourites</p>
        </div>

        <div className="gap-3 flex">
          <p className="cursor">Search</p>
          <p className="cursor">Profile</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
