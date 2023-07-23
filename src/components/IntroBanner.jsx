// import React from 'react'
import { Link } from "react-router-dom";
import Iphone from "../assets/Iphone.avif";
import Tablet from "../assets/table.avif";

const IntroBanner = () => {
  return (
    <div className="relative flex flex-col">
      <div className="w-11/12 lg:w-2/3 mx-auto">
        <div className="flex flex-col justify-center items-center gap-5 mt-28 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold lg:w-2/3">
            Turn your instagram engagements into crypto assets
          </h1>
          <span className="text-xl font-medium">
            The secure way to buy, sell, store, and convert crypto. Millions use
            Gemini to diversify their portfolios.
          </span>
          <Link
            to="/signup"
            className="bg-blue-950 w-10/12  lg:w-1/6 p-5 rounded-full text-white text-md font-bold"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className=" hidden lg:flex flex-row items-center justify-around w-2/3 mx-auto my-10 ">
        <img src={Iphone} alt="Iphone" className=" w-[25rem] h-[15rem]" />
        <h1 className="hidden lg:block">Instagram</h1>
        <img src={Tablet} alt="Iphone" className="w-[35rem] h-[30rem]" />
      </div>
    </div>
  );
};

export default IntroBanner;
