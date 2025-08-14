import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import all 27 images
import img2 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_2.jpg";
import img1 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_1.jpg";
import img3 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_3.jpg";
import img4 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_4.jpg";
import img5 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_5.jpg";
import img6 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_6.jpg";
import img7 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_7.jpg";
import img8 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_8.jpg";
import img9 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_9.jpg";
import img10 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_10.jpg";
import img11 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_11.jpg";
import img12 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_12.jpg";
import img13 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_13.jpg";
import img14 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_14.jpg";
import img15 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_15.jpg";
import img16 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_16.jpg";
import img17 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_17.jpg";
import img18 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_18.jpg";
import img19 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_19.jpg";
import img20 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_20.jpg";
import img21 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_21.jpg";
import img22 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_22.jpg";
import img23 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_23.jpg";
import img24 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_24.jpg";
import img25 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_25.jpg";
import img26 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_26.jpg";
import img27 from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_27.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
];

// Shuffle array
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const CouplesGallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Shuffle once on mount
  const [shuffledImages] = useState(() => shuffleArray(images));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-[#f4efdf] py-10 px-4 lg:px-20">
      <h2 className="font-tangerine text-center text-6xl font-thin mb-8">
        Nitesh & Niyati
      </h2>
      <p className="text-center text-lg text-gray-600 mb-8">July 31, 2025</p>

      {/* Masonry Layout */}
      <Masonry
        breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
        className="flex gap-4"
        columnClassName="space-y-4">
        {shuffledImages.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:opacity-90 transition"
            onClick={() => handleImageClick(index)}>
            <img
              src={src}
              alt={`Nitesh & Niyati ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Masonry>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={shuffledImages.map((img) => ({ src: img }))}
        />
      )}
    </section>
  );
};

export default CouplesGallerySection;
