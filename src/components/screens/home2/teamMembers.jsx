import React from "react";
import img1 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_17.jpg";
import img2 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_17.jpg";
import img3 from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_17.jpg";
import useInView from "../../hooks/useInView";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Photographer",
    image: img1,
  },
  {
    name: "Samantha Lee",
    role: "Creative Director",
    image: img2,
  },
  {
    name: "Michael Brown",
    role: "Cinematographer",
    image: img3,
  },
  // Add more members here as needed
];

export default function OurTeam() {
  return (
    <section className="bg-[#E8E1D3] py-16 px-4 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-light text-gray-900 text-center">
        Meet Our Team
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 mt-4 text-center max-w-xl">
        Passionate storytellers dedicated to capturing your most cherished
        moments.
      </p>

      {/* Team Members Grid */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-6xl">
        {teamMembers.map((member, index) => {
          const [ref, visible] = useInView();
          return (
            <div
              key={index}
              ref={ref}
              className={`w-[calc(33.33%-1rem)] min-w-[150px] max-w-[250px] flex flex-col items-center text-center transition-opacity duration-700 ease-out ${
                visible ? "animate-fadeUp" : "opacity-0"
              }`}
            >
              {/* Image */}
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="mt-4 text-lg md:text-xl font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
