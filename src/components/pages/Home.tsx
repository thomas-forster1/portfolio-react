import React from "react";
import AdvancedStatistics from "../advanced-statistics/advanced-statistics";
import Banner from "../banner/Banner";
import Hero from "../hero/Hero";
import Shorten from "../shorten/Shorten";

import Master from "./../frames/Master";

const Home = () => {
  return (
    <Master>
      <Hero />
      <Shorten />
      <AdvancedStatistics />
      <Banner />
    </Master>
  );
};

export default Home;
