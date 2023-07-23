import { useState } from "react";
import Analytics from "../assets/media-analytics.png";
import SocialDashboard from "../assets/social-media-dashboard.png";

import { BiCustomize } from "react-icons/bi";
import { SiDogecoin } from "react-icons/si";
import { IoPeopleCircle } from "react-icons/io5";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-11/12 lg:w-2/3 mx-auto my-10 ">
      <div className="text-center">
        <h1 className="text-3xl lg:text-6xl font-bold">
          Your account. Your way.
        </h1>
        <p className="text-xl font-semibold">
          You have the freedom to choose what approach works for you. <br />
          We provide analytics to monitor your growth.
        </p>
      </div>

      <div className="hidden lg:flex flex-col justify-between my-20">
        <div className="tab flex flex-row justify-around items-center  mx-auto p-2 bg-slate-100 rounded-full cursor-pointer ">
          <div
            className={`${
              activeTab === 1 ? "bg-white px-5 py-3 rounded-full " : "p-2"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Monitor engagements
          </div>
          <div
            className={`${
              activeTab === 2 ? "bg-white px-5 py-3 rounded-full " : "p-2"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Manage your account
          </div>
        </div>

        <div className="lg:flex justify-center items-center my-20 hidden ">
          <div className="bg-black w-[55rem] h-[40rem] rounded-[2rem] ">
            <div className="relative bg-white w-[52rem] h-[35rem] mx-auto mt-[2rem] overflow-hidden">
              <img
                src={SocialDashboard}
                alt=""
                className={`absolute ease-in-out duration-500 ${
                  activeTab === 1 ? "left-0" : "-left-[100rem]"
                }`}
              />

              <img
                src={Analytics}
                alt=""
                className={`absolute ease-in-out duration-500 ${
                  activeTab === 2 ? "right-0" : "-right-[100rem]"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* one */}
        <div className="flex flex-col gap-5 h-[20rem] p-10 shadow-lg rounded-lg">
          <BiCustomize size={50} />
          <h1 className="text-4xl font-bold">
            Customize <br />
            your view
          </h1>

          <span className="text-md font-semibold">
            Multiple charting types, watchlists, and price alerts help you
            follow the market and make strategic trades.
          </span>
        </div>

        {/* two */}
        <div className="flex flex-col justify-between gap-5 h-[20rem] p-10 shadow-lg rounded-lg">
          <SiDogecoin size={50} />
          <h1 className="text-4xl font-bold">
            Earn Crypto <br />
          </h1>

          <span className="text-md font-semibold">
            Multiple charting types, watchlists, and price alerts help you
            follow the market and make strategic trades.
          </span>
        </div>

        {/* three */}
        <div className="flex flex-col gap-5 h-[20rem] p-10 shadow-lg rounded-lg">
          <IoPeopleCircle size={50} />
          <h1 className="text-4xl font-bold">
            Monetize <br />
            Your followers
          </h1>

          <span className="text-md font-semibold">
            Multiple charting types, watchlists, and price alerts help you
            follow the market and make strategic trades.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
