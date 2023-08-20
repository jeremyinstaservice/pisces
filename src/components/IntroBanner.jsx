// import React from 'react'
import { Link } from "react-router-dom";

const IntroBanner = () => {
  return (
    <div className="relative flex flex-col">
      <div className="w-11/12 lg:w-2/3 mx-auto">
        <div className="flex flex-col justify-center items-center gap-5 mt-28 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold lg:w-2/3">
            Turn your instagram engagements into assets
          </h1>
          <span className="text-xl font-medium">
            The secure way to Earn. <br /> Millions use Gemini to diversify
            their portfolios.
          </span>
          <Link
            to="/vote"
            className="bg-blue-950 w-10/12  lg:w-1/6 p-3 rounded-full text-white text-lg font-bold"
          >
            Vote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
