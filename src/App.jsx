import React from "react";
import { useSelector } from "react-redux";
import { AllRoutes } from "./Routes";
import { select_movies } from "./store/appSlice";

function App() {
  return <AllRoutes />;
}

export default App;
