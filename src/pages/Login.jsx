// import React from 'react'

import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, hidepassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "log" && password === "log") {
      navigate("/emails");
    }
  };
  return (
    <div className="flex-1 flex flex-col justify-center items-center mt-[10rem]">
      <form
        method="GET"
        onSubmit={handleSubmit}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col text-lg gap-3 ">
          <label htmlFor="email" className="font-bold">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-100 w-[23rem] lg:w-[30rem] mx-auto h-[3rem] rounded-lg p-4 border-0 focus:border-0"
          />
        </div>

        <div className=" flex flex-col text-lg gap-3">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <div className="flex flex-row items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-100 w-[23rem] lg:w-[30rem] h-[3rem] rounded-lg p-4 border-0 focus:border-0"
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

        <div className="flex flex-row justify-between">
          <button
            type="submit"
            className="bg-blue-950 text-white font-bold py-3 px-10 rounded-full"
          >
            Sign in
          </button>

          <Link
            to="/signup"
            className="text-blue-950 font-bold py-3 px-10 rounded-full"
          >
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
