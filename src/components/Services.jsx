// import React from 'react'
import Mock from "../assets/trade.png";
import Card from "../assets/insta/Pisces-card.png";
import Stats from "../assets/StakingHero.avif";

const Services = () => {
  return (
    <div className="flex flex-col justify-center w-11/12 lg:w-2/3 mx-auto">
      <div className="text-center">
        <h1 className="text-slate-900 text-3xl lg:text-7xl font-extrabold mt-20 mb-5">
          Crypto ? <br />
          Pisces got you covered.
        </h1>
        <h3 className="text-xl lg:text-3xl font-medium">
          We are crypto-obsessed and compliance-focused, <br />
          making it safe and easy to buy and sell crypto.
        </h3>
      </div>

      <div className="">
        {/* Div2 */}
        <div className="flex flex-row justify-between my-5 shadow-md rounded-md">
          <div className="flex flex-col gap-10 justify-between p-10">
            <span className="text-4xl font-semibold">
              Become part of a community
            </span>
            <span className="text-xl lg:text-4xl font-semibold">
              Promote Crypto in businesses
            </span>
          </div>
          <div className="hidden lg:block">
            <img src={Mock} alt="Mock" />
          </div>
        </div>

        {/* Div3 */}
        <div className=" flex flex-col lg:flex-row items-center gap-5">
          {/*  one */}
          <div className="bg-[#24DDF9] text-white flex-1 h-[43rem] flex flex-col gap-3 shadow-lg rounded-2xl py-10 px-3">
            <div className="w-2/3 ">
              <img src={Card} alt="Card" className="" />
            </div>

            <h1 className="text-6xl font-bold">Invest when you spend</h1>
            <p className="text-sm pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolore sit voluptatum rem, ea dicta iure asperiores beatae
              voluptates sint accusantium rerum consequatur id reiciendis
              quisquam distinctio recusandae modi atque.
            </p>
          </div>

          {/* two */}
          <div className="bg-[#A485FF] text-white flex-1 flex flex-col gap-5 justify-between h-[43rem] shadow-lg rounded-2xl py-10 px-3">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Get Reward <br />
              on your <br />
              Crypto
            </h1>

            <div className="w-11/12 lg:w-2/3 ">
              <img src={Stats} alt="Card" className="w-full" />
            </div>

            <span className="text-4xl font-semibold">Staking</span>
          </div>

          {/* three */}
          <div className="relative nft-background flex-1 flex flex-col h-[43rem] shadow-md rounded-md">
            <h2 className="absolute bottom-20 flex items-end justify-end text-white text-6xl font-bold px-2">
              Buy and Sell <br />
              Nfts
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
