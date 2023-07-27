import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className=" text-white">
      <Header />
      <div className="px-2 container mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
