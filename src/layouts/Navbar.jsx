// import React from 'react'
import { Link } from "react-router-dom";
import Pisces from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white right-0 w-[90%] lg:w-[70%] py-5 mx-auto flex flex-row justify-around items-center z-40">
      <Link to="/" className="flex flex-row items-center flex-1 gap-0">
        <div className="w-10 h-10">
          <img src={Pisces} alt="Logo" className="" />
        </div>
        <h2 className="w-1/4 text-2xl font-semibold">Pisces</h2>
      </Link>

      <ul className="flex flex-row items-center gap-5 font-bold">
        <Link to="/login">Login</Link>
        <Link
          to="/signup"
          className="py-1 px-5 bg-blue-950 text-white rounded-full"
        >
          Join us
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
