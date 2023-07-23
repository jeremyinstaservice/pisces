// import React from 'react'

const Assurance = () => {
  return (
    <div className="flex flex-col gap-10 w-11/12 lg:w-2/3 mx-auto ">
      <div className="text-center">
        <h1 className="text-slate-900 text-3xl lg:text-7xl font-extrabold mt-20 mb-5">
          We are here. For good
        </h1>
        <h3 className="text-xl font-medium">
          Gemini is a full-reserve and highly-regulated cryptocurrency exchange
          and custodian.
        </h3>
      </div>
      <div className="flex flex-col flex-wrap gap-10 ">
        <div className="flex flex-col lg:flex-row   gap-5">
          <div className="flex flex-col gap-5">
            <div className="bg-blue-950 text-white flex flex-col justify-center items-center p-4 w-[20rem] lg:w-[25rem] h-[15rem] rounded-xl">
              <span className="text-xl">Based in NYC since 2014</span>
              <span className="text-3xl">Available anywhere</span>
            </div>
            <div className="bg-[#24DDF9] text-white flex flex-col justify-center font-bold p-4 w-[20rem] lg:w-[25rem] h-[15rem] rounded-xl">
              <span className="text-xl">Our Mantra</span>
              <h2 className="text-3xl">
                Asking permission, <br />
                not forgiveness
              </h2>
            </div>
          </div>
          <div className="bg-slate-200 flex flex-col w-[25rem] lg:w-[50rem] p-5 rounded-xl">
            <span className="text-lg mt-20">we are </span>
            <span className="text-6xl font-semibold">Certified.</span>
            <span className="text-6xl font-semibold">Regulated.</span>
            <span className="text-6xl font-semibold">Licensed.</span>
            <p className="text-xl mt-10">
              From day one, Pisces has prioritized the <br />
              security of your assets. We never have and <br />
              never will compromise on that.
            </p>
          </div>
        </div>
        <div className=" h-auto flex flex-col lg:flex-row gap-10 justify-between ">
          <div className="bg-[#DABE76]  w-[25rem] lg:w-[50rem]  flex flex-col gap-3 px-5 py-16 rounded-lg   ">
            <span className="text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </span>
            <span className=" text-3xl lg:text-6xl font-extrabold">
              Overall Best <br /> Crytpo Exchange
            </span>
          </div>

          <div className="bg-orange-500 text-white font-bold w-[23rem] p-5 py-10 rounded-lg flex text-xl lg:text-3xl items-center">
            <span className="">
              Crypto is not just a technology, it is a movement. And it is just
              getting started.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assurance;
