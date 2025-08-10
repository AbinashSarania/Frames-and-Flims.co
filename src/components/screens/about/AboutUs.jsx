import React from "react";
import img1 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_17.jpg";
import img2 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_17.jpg";
import img3 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_17.jpg";
import leftImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_51.jpg";
import rightImage from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_11.jpg";

const photographers = [
  {
    name: "Aria Bennett",
    role: "Creative Director & Lead Photographer",
    image: img1,
    bio: "Aria brings a decade of experience capturing weddings across the globe. She’s known for her editorial style and storytelling approach.",
  },
  {
    name: "Liam Carter",
    role: "Cinematographer & Visual Artist",
    image: img2,
    bio: "Liam specializes in cinematic wedding films. His calm presence helps couples feel at ease in front of the lens.",
  },
  {
    name: "Sophia Ray",
    role: "Fine Art Photographer",
    image: img3,
    bio: "Sophia’s eye for detail and love for natural light results in timeless, emotion-filled imagery.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#f4efdf] text-black py-16 px-4 lg:px-20">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-base sm:text-lg leading-relaxed">
          We're a passionate team of photographers and filmmakers dedicated to
          capturing authentic love stories. With a focus on emotion, light, and
          storytelling, we create timeless memories you'll cherish forever.
        </p>
      </div>

      {/* Meet the Photographers */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Meet the Photographers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {photographers.map((photographer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={photographer.image}
                alt={photographer.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold">{photographer.name}</h3>
                <p className="text-sm text-gray-600 italic">
                  {photographer.role}
                </p>
                <p className="text-sm mt-3">{photographer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Philosophy */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Our Philosophy
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          We believe that photography is more than images — it's about
          connection, emotion, and the in-between moments. Whether it’s an
          intimate elopement or a grand celebration, we’re here to document your
          story with intention and care.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 py-16 px-4 md:px-24">
        {/* Left Image */}
        <img
          src={leftImage}
          alt="left visual"
          className="w-full max-w-[350px] aspect-square md:w-40 md:h-60 sm:md:w-56 sm:md:h-72 object-cover rounded md:ml-[-4rem]"
        />

        {/* Text */}
        <div className="text-center my-8 md:my-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
            Capturing love stories in <br />
            South Florida and abroad.
          </h2>
          <button className="mt-2 bg-[#8E6B3E] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#7a582c] transition">
            SUBMIT AN INQUIRY
          </button>
        </div>

        {/* Right Image */}
        <img
          src={rightImage}
          alt="right visual"
          className="w-full max-w-[350px] aspect-square md:w-40 md:h-60 sm:md:w-56 sm:md:h-72 object-cover rounded md:mr-[-4rem]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
