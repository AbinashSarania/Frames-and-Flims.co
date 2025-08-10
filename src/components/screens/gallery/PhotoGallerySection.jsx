import React from "react";
import useInView from "../../hooks/useInView";
import leftImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_51.jpg";
import rightImage from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_11.jpg";

const PhotoGallerySection = () => {
  const [textRef, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Images */}
      <div className="absolute inset-0 flex flex-col lg:flex-row z-0">
        <img
          src={leftImage}
          alt="Gallery Left"
          className="w-full h-full object-cover lg:w-1/2 lg:h-full"
        />
        <img
          src={rightImage}
          alt="Gallery Right"
          className="hidden lg:block w-1/2 h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Text Content */}
      <div
        ref={textRef}
        className={`relative z-20 flex flex-col justify-center items-center text-center px-4 text-white w-full h-full transition-all duration-1000 ease-out ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="uppercase text-sm font-medium tracking-widest">
          Featured Couples
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold my-4">
          Photo galleries.
        </h2>
        <p className="max-w-2xl text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua t enim ad
          minim veniam.
        </p>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
