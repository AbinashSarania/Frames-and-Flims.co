import React from "react";
import { useNavigate } from "react-router-dom";
import niteshNiyatiThumb from "../../../assets/nitesh-niyati-thumb.jpg";
import ridoonBarnaliThumb from "../../../assets/ridoon-barnali-thumb.jpg"; // <-- new thumbnail
import leftImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_51.jpg";
import rightImage from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_11.jpg";

const couples = [
  {
    name: "Nitesh & Niyati",
    caption: "A timeless wedding journey.",
    image: niteshNiyatiThumb,
    link: "/gallery/nitesh-niyati",
  },
  {
    name: "Ridoon & Barnali",
    caption: "A celebration of love and togetherness.",
    image: ridoonBarnaliThumb,
    link: "/gallery/ridoon-barnali", // <-- update with your actual route
  },
];

const CouplesGallerySection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f4efdf] py-10 px-4 lg:px-20">
      {/* Couples Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-l border-[#c9bfa8] justify-items-center">
        {couples.map((couple, index) => (
          <div
            key={index}
            onClick={() => couple.link && navigate(couple.link)}
            className="border-b border-r border-[#c9bfa8] bg-[#f4efdf] cursor-pointer w-full max-w-sm">
            <div className="p-4 sm:p-6">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={couple.image}
                  alt={couple.name}
                  className="w-full h-64 sm:h-[480px] object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="pb-4 sm:pb-6 px-2 sm:px-4 text-center">
              <h3 className="font-tangerine text-4xl font-thin">
                {couple.name}
              </h3>
              <p className="text-xs sm:text-sm mt-1 text-gray-700">
                {couple.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 py-16 px-4 md:px-24">
        <img
          src={leftImage}
          alt="left visual"
          className="w-full max-w-[350px] aspect-square md:w-40 md:h-60 sm:md:w-56 sm:md:h-72 object-cover rounded md:ml-[-4rem]"
        />
        <div className="text-center my-8 md:my-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
            Capturing love stories in <br />
            South Florida and abroad.
          </h2>
          <button className="mt-2 bg-[#8E6B3E] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#7a582c] transition">
            SUBMIT AN INQUIRY
          </button>
        </div>
        <img
          src={rightImage}
          alt="right visual"
          className="w-full max-w-[350px] aspect-square md:w-40 md:h-60 sm:md:w-56 sm:md:h-72 object-cover rounded md:mr-[-4rem]"
        />
      </div>
    </section>
  );
};

export default CouplesGallerySection;
