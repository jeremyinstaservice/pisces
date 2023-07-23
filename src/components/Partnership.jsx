// import React from 'react'
import Mock from "../assets/Exchange.webp";

const Partnership = () => {
  return (
    <div className="w-11/12 lg:w-2/3 mx-auto">
      <div className="text-center">
        <h1 className="text-slate-900 text-4xl lg:text-7xl font-extrabold mt-20 mb-5">
          Earn Crypto as a side hustle.
        </h1>
        <h3 className="text-xl lg:text-3xl font-medium">
          Pisces is the best way to go, We are partnered leading <br />
          institutions to help you grow.
        </h3>
      </div>

      <div>
        <div className="bg-stone-900 flex flex-row justify-between py-10 my-5 shadow-md rounded-md">
          <div className="flex flex-col gap-10 justify-between p-10 text-white">
            <span className="text-gray-900">Earn</span>
            <span className="text-5xl font-bold">
              Earn Crypto <br /> with each new follower
            </span>
            <span className="text-4xl font-semibold">Pisces institutional</span>
          </div>
          <div className="hidden lg:block">
            <img src={Mock} alt="Mock" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
