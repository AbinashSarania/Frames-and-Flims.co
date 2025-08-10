import React from "react";
import Hero from "../home/Hero";
import FeaturedWork from "../home/FeaturedWork";
import Offers from "./Offers";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Offers />
      <Footer />
    </>
  );
};

export default Home;
