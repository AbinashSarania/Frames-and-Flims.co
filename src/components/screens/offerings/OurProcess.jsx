import React from "react";
import bgImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_46.jpg"; // Ensure the path is correct

const steps = [
  {
    number: "1",
    title: "Let’s chat.",
    description:
      "Sed viverra vehicula dictum. Proin magna tellus, vehicula nec rutrum vitae, mattis malesuada risus.",
  },
  {
    number: "2",
    title: "Plan and prep.",
    description:
      "Morbi sed dui in mi placerat tincidunt in sed lectus. Fusce lacus sem, dapibus in fringilla non, finibus quis quam.",
  },
  {
    number: "3",
    title: "The big day.",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed dui in mi placerat tincidunt in sed lectus.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-[#FAF6EC] text-black">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase text-sm tracking-widest font-semibold text-gray-200 mb-2">
            How we work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Our process.
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua t enim ad
            minim veniam.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-[#c9bda4]">
        {steps.map((step, index) => (
          <div key={index} className="px-8 py-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="border border-[#7A5A32] rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium">
                {step.number}
              </span>
            </div>
            <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
            <p className="text-sm text-[#333]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
