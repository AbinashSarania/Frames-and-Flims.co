import React, { useState } from "react";
import img1 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_5.jpg";
import img2 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_20.jpg";
import useInView from "../../hooks/useInView";

const reviews = [
  {
    quote:
      "There aren't enough kind words to express how wonderful the photos are! An amazing photographer with a true gift of talent!",
    author: "LEAH T.",
  },
  {
    quote:
      "The pictures captured our day so beautifully! We couldn’t have asked for a better storyteller for our wedding.",
    author: "EMILIA R.",
  },
  {
    quote:
      "So professional and easy to work with! The final photos exceeded all our expectations. Thank you!",
    author: "NICOLE M.",
  },
  {
    quote:
      "Every emotion, every glance, every moment — perfectly frozen in time. Truly magical work.",
    author: "STEPHANIE K.",
  },
];

export default function StoryTellerSection() {
  const [imgRef, imgVisible] = useInView();
  const [titleRef, titleVisible] = useInView();
  const [descRef, descVisible] = useInView();
  const [quoteRef, quoteVisible] = useInView();
  const [authorRef, authorVisible] = useInView();
  const [navRef, navVisible] = useInView();
  const [loveRef, loveVisible] = useInView();

  const [currentReview, setCurrentReview] = useState(0);

  const handlePrev = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentReview((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-[#eee9df]">
      {/* Storyteller Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-12">
        {/* Left Side - Image */}
        <div
          ref={imgRef}
          className={`md:w-1/2 w-full flex justify-center mb-6 md:mb-0 ${
            imgVisible ? "animate-fadeUp" : "opacity-0"
          }`}
        >
          <div className="w-full max-w-[90%] md:max-w-[80%] h-auto aspect-[4/5] overflow-hidden flex items-center justify-center py-10">
            <img
              src={img1}
              alt="Wedding"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left px-6 flex flex-col items-center md:items-start">
          <h2
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-gray-900 ${
              titleVisible ? "animate-fadeUp" : "opacity-0"
            }`}
          >
            Let me be the storyteller of your most cherished moments.
          </h2>
          <p
            ref={descRef}
            className={`text-gray-600 mt-4 max-w-md text-sm sm:text-base ${
              descVisible ? "animate-fadeUp" : "opacity-0"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua t enim
            ad minim veniam.
          </p>
        </div>
      </div>

      {/* Love Stories Section */}
      <div
        ref={loveRef}
        className={`relative h-[100vh] w-full flex items-center justify-center bg-black ${
          loveVisible ? "animate-fadeUp" : "opacity-0"
        }`}
      >
        <img
          src={img2}
          alt="Wedding Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 object-left sm:object-center"
        />
        <div className="relative z-10 text-white text-center px-6">
          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-4xl">
            Jessa & Marck — Stephanie & Erick — Emilia & Nathan — Nicole and
            Jon — Leah and Adam
          </p>
        </div>
      </div>

      {/* Review Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <p
          ref={quoteRef}
          className={`text-lg sm:text-xl md:text-2xl italic text-gray-900 max-w-3xl ${
            quoteVisible ? "animate-fadeUp" : "opacity-0"
          }`}
        >
          “{reviews[currentReview].quote}”
        </p>
        <p
          ref={authorRef}
          className={`font-bold mt-4 text-gray-800 ${
            authorVisible ? "animate-fadeUp" : "opacity-0"
          }`}
        >
          {reviews[currentReview].author}
        </p>

        {/* Navigation Buttons */}
        <div
          ref={navRef}
          className={`flex space-x-4 mt-6 ${
            navVisible ? "animate-fadeUp" : "opacity-0"
          }`}
        >
          <button
            onClick={handlePrev}
            className="border border-gray-800 px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="border border-gray-800 px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
