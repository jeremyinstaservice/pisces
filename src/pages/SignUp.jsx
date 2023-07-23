// import React from 'react'
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, hidepassword] = useState(false);
  const [type, setType] = useState(1);

  return (
    <div className=" flex-1 flex flex-col h-auto justify-center items-center mt-[10rem]">
      <h1 className="w-[23rem] mx-auto  text-blue-950 text-2xl font-bold">
        Lets get you started with a Pisces account
      </h1>

      <div className="w-[23rem] mx-auto  flex flex-col gap-5 my-10">
        <h1 className="text-xl font-bold">Account Type</h1>
        {/* div1 */}
        <div
          className={`w-[23rem] mx-auto lg:w-[30rem] flex flex-row gap-4 items-center px-10 py-5 ${
            type === 1
              ? "border-2 border-slate-950 "
              : " border border-gray-300"
          } rounded-2xl`}
          onClick={() => setType(1)}
        >
          <BsPersonCircle size={40} className="text-slate-900" />
          <div className="flex flex-col">
            {" "}
            <h3 className="text-xl font-bold">Individual</h3>
            <span>Your account is for personal use</span>
          </div>
        </div>

        {/* div2 */}
        <div
          className={` w-[23rem] mx-auto  lg:w-[30rem] flex flex-row gap-4 items-center p-5 ${
            type === 2
              ? "border-2 border-slate-950 "
              : " border border-gray-300"
          } rounded-2xl`}
          onClick={() => setType(2)}
        >
          <MdBusinessCenter size={40} className="text-slate-900" />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">Business</h3>
            <span>Your account is for Business use</span>
          </div>
        </div>

        {/* form */}

        <div className="flex flex-col text-md gap-3">
          <label htmlFor="given_name" className="font-bold">
            Given Name
          </label>
          <input
            type="text"
            name="given_name"
            id="given_name"
            className="bg-slate-100 w-[23rem] mx-auto lg:w-[30rem] h-[3rem] rounded-lg p-4 border-0 focus:border-0"
          />
        </div>

        <div className="flex flex-col text-md gap-3">
          <label htmlFor="family_name" className="font-bold">
            Family Name
          </label>
          <input
            type="text"
            name="family_name"
            id="family_name"
            className="bg-slate-100  w-[23rem] mx-auto  lg:w-[30rem]  h-[3rem] rounded-lg p-4 border-0 focus:border-0"
          />
        </div>

        <div className="flex flex-col text-md gap-3">
          <label htmlFor="email" className="font-bold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-slate-100  w-[23rem] mx-auto  lg:w-[30rem] h-[3rem] rounded-lg p-4 border-0 focus:border-0"
          />
        </div>

        <div className="flex flex-col text-md gap-3">
          <label htmlFor="phone" className="font-bold">
            Mobile Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="bg-slate-100  w-[23rem] mx-auto  lg:w-[30rem] h-[3rem] rounded-lg p-4 border-0 focus:border-0"
          />
        </div>

        <div className="lg:w-[30rem] flex flex-col text-lg gap-3">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <div className="flex flex-row items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="bg-slate-100  w-[23rem] mx-auto  lg:w-[30rem] h-[3rem] rounded-lg p-4 border-0 focus:border-0"
            />

            <div className="-ml-16">
              {showPassword ? (
                <AiFillEyeInvisible
                  size={30}
                  onClick={() => hidepassword(!showPassword)}
                />
              ) : (
                <AiFillEye
                  size={30}
                  onClick={() => hidepassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-[25rem] lg:w-[30rem] flex flex-row justify-between my-10">
          <button className="bg-blue-950 text-white font-bold py-3 px-10 rounded-full">
            Create an account
          </button>

          <Link
            to="/login"
            className="text-blue-950 font-bold py-3 px-10 rounded-full"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
