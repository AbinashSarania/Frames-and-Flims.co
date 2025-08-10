import React from "react";
import Photographer from "../../../assets/photographer.png"; // Adjust the path if needed

const Hero = () => {
  return (
    <section className="relative bg-gray-300 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Photographer Image - Always bottom left */}
      <div className="absolute bottom-0 left-0">
        <img
          src={Photographer}
          alt="Photographer"
          className="h-auto max-w-full object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 z-10">
        {/* Empty div for spacing due to image */}
        <div></div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            CAPTURING <br />
            <span className="block">ONE FRAME AT A TIME</span>
          </h2>

          <div className="border-t border-gray-600 my-6 w-48 mx-auto md:mx-0"></div>

          <p className="text-xl italic text-gray-800 mb-8">
            Ethan <span className="font-medium">Parker</span>
          </p>

          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
