import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import { Layout } from "./components";

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/shows" element={<Shows />} />

      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/show/:id" element={<ShowDetails />} />
    </Route>
    <Route path="*" element={<p>Does not exist</p>} />
  </Routes>
);
