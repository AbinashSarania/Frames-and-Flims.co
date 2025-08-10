import { useEffect, useState } from "react";
import img1 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_33.jpg";
import img2 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_25.jpg";
import img3 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_27.jpg";
import img4 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_15.jpg";
import useInView from "../../hooks/useInView";

const images = [
  { src: img1, speed: 0.2, start: 120 },
  { src: img2, speed: 0.15, start: 140 },
  { src: img3, speed: 0.25, start: 160 },
  { src: img4, speed: 0.18, start: 180 },
];

export default function ImageScrollEffect() {
  const [scrollY, setScrollY] = useState(0);
  const [headingRef] = useInView();
  const [buttonRef] = useInView();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f5f1e7] overflow-hidden">
      {/* Fixed Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <h1
          ref={headingRef}
          className="font-monsieur text-5xl md:text-7xl font-thin leading-tight"
        >
          Your love story in focus.
        </h1>
        <button
          ref={buttonRef}
          className="mt-4 px-6 py-2 bg-[#8b5e3b] text-white rounded-md shadow pointer-events-auto transition duration-300 hover:bg-[#734b2f]"
        >
          SUBMIT AN INQUIRY
        </button>
      </div>

      {/* Floating Images */}
      {images.map((image, index) => {
        const offset = image.start - scrollY * image.speed;
        const fadeDistance = 100;
        const baseOpacity = 0.85;
        const opacity = Math.max(
          0,
          Math.min(1, baseOpacity - Math.abs(offset - 50) / fadeDistance)
        );

        return (
          <img
            key={index}
            src={image.src}
            alt={`Floating ${index}`}
            className="absolute z-0 transition-all duration-[2500ms] ease-[cubic-bezier(0.33,1,0.68,1)] w-36 sm:w-40 md:w-64"
            style={{
              top: `${offset}%`,
              left: `${index * 25}%`,
              opacity,
              pointerEvents: "none",
              transform: "translateX(0)",
            }}
          />
        );
      })}

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#f5f1e7] z-20 pointer-events-none" />

      {/* Scrollable Spacer */}
      <div className="h-screen bg-white" />
    </div>
  );
}
