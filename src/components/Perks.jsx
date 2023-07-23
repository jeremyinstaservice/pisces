// import React from 'react'
import Connect from "../assets/Hardware_security_keys__1_.webp";
import Authy from "../assets/two-factor-authentication__1_.webp";
import Address from "../assets/Approved_addresses__1_.webp";

const Perks = () => {
  return (
    <div className="flex flex-col gap-10 w-11/12 lg:w-2/3 mx-auto">
      <div className="text-center">
        <h2 className="text-slate-900 text-3xl lg:text-6xl font-extrabold my-10">
          Earn with every engagement
        </h2>
        <span className="text-xl lg:mt-0 mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Facere voluptatum, consectetur excepturi accusantium modi repellendus?
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col justify-between h-auto lg:h-[43rem] px-10 shadow-lg rounded-lg">
          <div className="w-auto lg:w-[20rem]   ">
            <img src={Connect} alt="Hardware security" className="w-full" />
          </div>
          <span className="text-2xl font-bold py-10 ">
            Encryption level security
          </span>
        </div>
        {/* two */}
        <div className="flex flex-col justify-between h-auto lg:h-[43rem]  px-10 shadow-lg rounded-lg">
          <div className="w-auto lg:w-[20rem]  ">
            <img src={Authy} alt="Hardware security" className="w-full" />
          </div>
          <span className="text-2xl font-bold py-10 ">
            Integrated Authentication <br />
          </span>
        </div>
        {/* three */}
        <div className="flex flex-col justify-between h-auto lg:h-[43rem] px-10 shadow-lg rounded-lg">
          <div className="w-auto lg:w-[20rem]   ">
            <img src={Address} alt="Hardware security" className="w-full" />
          </div>
          <span className="text-2xl font-bold py-10 ">
            Protected Crytpo Addresses <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Perks;
