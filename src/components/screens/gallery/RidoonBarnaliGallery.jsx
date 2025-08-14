import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import all 51 images
import img1 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_1.jpg";
import img2 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_2.jpg";
import img3 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_3.jpg";
import img4 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_4.jpg";
import img5 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_5.jpg";
import img6 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_6.jpg";
import img7 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_7.jpg";
import img8 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_8.jpg";
import img9 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_9.jpg";
import img10 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_10.jpg";
import img11 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_11.jpg";
import img12 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_12.jpg";
import img13 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_13.jpg";
import img14 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_14.jpg";
import img15 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_15.jpg";
import img16 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_16.jpg";
import img17 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_17.jpg";
import img18 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_18.jpg";
import img19 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_19.jpg";
import img20 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_20.jpg";
import img21 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_21.jpg";
import img22 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_22.jpg";
import img23 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_23.jpg";
import img24 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_24.jpg";
import img25 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_25.jpg";
import img26 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_26.JPG";
import img27 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_27.JPG";
import img28 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_28.JPG";
import img29 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_29.JPG";
import img30 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_30.jpg";
import img31 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_31.jpg";
import img32 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_32.jpg";
import img33 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_33.jpg";
import img34 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_34.jpg";
import img35 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_35.jpg";
import img36 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_36.jpg";
import img37 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_37.jpg";
import img38 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_38.jpg";
import img39 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_39.jpg";
import img40 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_40.jpg";
import img41 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_41.jpg";
import img42 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_42.jpg";
import img43 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_43.jpg";
import img44 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_44.jpg";
import img45 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_45.jpg";
import img46 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_46.jpg";
import img47 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_47.jpg";
import img48 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_48.jpg";
import img49 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_49.jpg";
import img50 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_50.jpg";
import img51 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_51.jpg";
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
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
];

// Shuffle array
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const CouplesGallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [shuffledImages] = useState(() => shuffleArray(images));

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
        Ridoon & Barnali
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
              alt={`Ridoon & Barnali ${index + 1}`}
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
