import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Work1 from "../../../assets/Work (1).JPG";
import Work2 from "../../../assets/Work (2).JPG";
import Work3 from "../../../assets/Work (3).JPG";

const categories = ["FASHION", "COUPLES", "PORTRAITS", "FREESTYLE"];

// Dummy images for all categories
const dummyImages = [Work1, Work2, Work3];

const FeaturedWork = () => {
  const [activeCategory, setActiveCategory] = useState("FASHION");
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3;

  // Change category and reset slider position
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setStartIndex(0);
  };

  const handleNext = () => {
    if (startIndex + visibleItems < dummyImages.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">SELECTED WORK</h2>

        {/* Category Tabs */}
        <div className="flex space-x-8 border-b border-gray-700 pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`uppercase ${
                activeCategory === cat
                  ? "border-b-2 border-white"
                  : "text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 bg-white text-black p-2 rounded-full z-10"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Images */}
          <div className="flex overflow-hidden w-full space-x-6">
            {dummyImages
              .slice(startIndex, startIndex + visibleItems)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${activeCategory.toLowerCase()}-work-${index}`}
                  className="w-1/3 object-cover hover:scale-105 transition-transform rounded-lg"
                />
              ))}
          </div>

          {/* Next Button */}
          {startIndex + visibleItems < dummyImages.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 bg-white text-black p-2 rounded-full z-10"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
