import { useState } from "react";
import img1 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_31.jpg";
import img2 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_51.jpg";
import img3 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_25.jpg";
import img4 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_21.jpg";
import img5 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_26.JPG";
import img6 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_47.jpg";
import img7 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_15.jpg";
import useInView from "../../hooks/useInView";

export default function CategoriesSection() {
  const categories = [
    { name: "Destination", img: img1 },
    { name: "Couples", img: img2 },
    { name: "Film", img: img3 },
    { name: "Video", img: img4 },
    { name: "Elopements", img: img5 },
    { name: "Engagements", img: img6 },
    { name: "Weddings", img: img7 },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hoveredImage = hoveredIndex !== null ? categories[hoveredIndex] : null;
  const isEven = hoveredIndex % 2 === 0;

  return (
    <div className="relative flex flex-col items-center bg-[#f5f1e7] text-black px-4 md:px-0 py-8 md:py-0 md:h-screen md:justify-center overflow-hidden">
      <div className="absolute top-0 w-full h-32 bg-gradient-to-t from-transparent to-[#f5f1e7] z-20 pointer-events-none" />

      {/* Floating Image */}
      {hoveredImage && (
        <img
          src={hoveredImage.img}
          alt=""
          className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 
            ${isEven ? "left-6 md:left-10" : "right-6 md:right-10"} 
            w-40 md:w-56 lg:w-72 object-cover shadow-xl rounded transition-opacity duration-500 ease-in-out z-10`}
        />
      )}

      <div className="z-20 flex flex-col items-center text-center w-full">
        {categories.map((category, index) => {
          const [ref, isInView] = useInView();

          return (
            <p
              key={index}
              ref={ref}
              className={`text-2xl sm:text-3xl md:text-5xl font-light my-3 cursor-pointer transition duration-200 hover:text-[#7a5a32] ${
                isInView ? "animate-fadeUp" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {category.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
