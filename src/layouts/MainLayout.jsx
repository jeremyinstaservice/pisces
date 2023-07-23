// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="relative flex flex-col h-auto ">
      <div className="bg-white fixed top-0 w-full py-7 z-40">
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
