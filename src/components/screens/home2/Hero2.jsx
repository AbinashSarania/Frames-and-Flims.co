import React from "react";
import bgImage from "../../../assets/Hero_Image.jpg";
import "./Hero2.css";

export default function Hero2() {
  return (
    <div className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden">
      <img
        src={bgImage}
        alt="Wedding Hero"
        className="w-full h-full object-cover object-center"
      />

      {/* Animated White Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none noise-overlay"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-tangerine text-white text-5xl md:text-8xl text-center px-4 drop-shadow-lg animate-float-breathe">
          "Two souls, one journey, endless love."
        </h1>
      </div>
    </div>
  );
}
