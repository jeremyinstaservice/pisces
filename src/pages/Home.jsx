// import React from 'react'

import IntroBanner from "../components/IntroBanner";
import Assurance from "../components/Assurance";
import Perks from "../components/Perks";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Partnership from "../components/Partnership";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col lg:gap-20 mt-[75px]">
      <IntroBanner />
      <Services />
      <Assurance />
      <Perks />
      <Portfolio />
      <Partnership />
      <Testimonials />
    </div>
  );
};

export default Home;
